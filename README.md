# Finance App Frontend

The Finance App Frontend is a user interface built with React, Materiel-UI, and Redux. It includes features such as user authantication, account management, and a dashboard with user details and lists. The aplication is designed to be responsive and user-friendly.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
  - [Login](#login)
  - [Create Account](#create-account)
  - [Dashboard](#dashboard)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Login and logout functionality.
- **Account Creation**: Register new users with form validation.
- **Dashboard**: Access user details and user lists.
- **Responsive Design**: Built using Material-UI to provide a consist look and feel across devices.
- **Toaster Notifications**: Display success and error messages using toast notifications.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework with pre-built components.
- **Redux**: A state management library for JavaScript apps.
- **React Router**: A library for routing in React applications.
- **Axios**: A promise-based HTTP client for making requests to the backend API.
- **React Toastify**: A library for showing toast notifications.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) (v6 or above)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/iam-karthick/finance-app [https://github.com/iam-karthick/finance-app]
   cd finance-app-frontend

1. **Install dependencies:**
    bash

    ### `npm install`

2. **Configure Environment Variables:**
    Create a .env file in the root directory and add the following:
    REACT_APP_API_URL=http://localhost:8080/api [http://localhost:3000/api]

## Running the App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage
### Login
    Navigate to the login page.
    Enter your email and password.
    Click "Login" to access the dashboard.
### Create Account
    Go to the "Create Account" page.
    Fill in your details including name, email, and password.
    Agree to the terms by checking the consent checkbox.
    Click "Create Account" to register.
### Dashboard
    Once logged in, you will be redirected to the dashboard.
    Use the navigation bar to access "User Details" and "Users List" sections.
## Folder Structure
Here's an overview of the project's folder structure:src/


├── components/       # Reusable React components
│   ├── Login.js      # Login component
│   ├── CreateAccount.js # Create Account component
│   └── Navbar.js     # Navigation bar component
├── redux/            # Redux setup and slices
│   ├── slices/       # Redux slices
│   └── store.js      # Redux store configuration
├── context/          # Context API for global states
│   └── AuthContext.js# Authentication context
├── pages/            # Page components
│   ├── Dashboard.js  # Dashboard page
│   └── UserList.js   # User list page
├── App.js            # Main app component
├── index.js          # Entry point of the application
├── styles/           # Global and component-specific styles
│   ├── Login.css     # Styles for the Login component
│   └── CreateAccount.css # Styles for the Create Account component
└── setupTests.js     # Test setup

