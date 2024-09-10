export const validateName = (name) => {
    if (!name) return 'Name is required.';
    if (name.length > 50) return 'Name cannot exceed 50 characters.';
    return '';
  };
  
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required.';
    if (!emailRegex.test(email)) return 'Invalid email format.';
    return '';
  };
  
  export const validatePassword = (password) => {
    const passwordRegex = /^[A-Za-z0-9]{8,}$/;
    if (!password) return 'Password is required.';
    if (!passwordRegex.test(password)) return 'Password must be at least 8 characters long and contain only alphabets and numbers.';
    return '';
  };
  