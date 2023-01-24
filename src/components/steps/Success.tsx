import React from 'react';
import AppBar from '@mui/material/AppBar';
import { styles } from './stepStyles';

export default function Success() {
  return (
    <div style={styles.root as React.CSSProperties}>
      <AppBar style={styles.appbar}>Success</AppBar>
      <h1 style={styles.textField}>Thank You For Your Submission</h1>
      <p> You will get an email with further instructions</p>
    </div>
  );
}
