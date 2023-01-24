import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserForm />
    </ThemeProvider>
  );
}

export default App;
