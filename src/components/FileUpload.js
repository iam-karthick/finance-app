import React, { useState } from 'react';
import Papa from 'papaparse';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import { Container, Typography, Button } from '@mui/material';
import axios from 'axios';

const FileUpload = () => {
  const [data, setData] = useState([]);
  const [categorizedData, setCategorizedData] = useState([]);
  const [error, setError] = useState(null);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === 'text/csv') {
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            processData(result.data);
          },
        });
      } else {
        alert('Unsupported file format. Please upload a CSV file.');
      }
    }
  };

  const processData = async (transactions) => {
    try {
      // Send transactions to the ChatGPT API for categorization
      const response = await axios.post('/api/chatgpt/categorize', { transactions });
      if (response.data && response.data.categorizedData) {
        setCategorizedData(response.data.categorizedData);
        setError(null);
      } else {
        setError('Failed to categorize transactions.');
      }
    } catch (err) {
      setError('Error processing the data. Please try again.');
    }
  };

  const calculateTotals = () => {
    const totals = categorizedData.reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + parseFloat(curr.amount);
      return acc;
    }, {});
    return Object.entries(totals).map(([category, total]) => ({
      name: category,
      value: total,
    }));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Bank Statement Processing
      </Typography>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        style={{ marginBottom: '20px' }}
      />
      {error && <Typography color="error">{error}</Typography>}
      {categorizedData.length > 0 && (
        <>
          <Typography variant="h6" gutterBottom>
            Spending by Category
          </Typography>
          <PieChart width={400} height={400}>
            <Pie
              data={calculateTotals()}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {calculateTotals().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </>
      )}
    </Container>
  );
};

export default FileUpload;
