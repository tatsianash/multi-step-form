import React from 'react';
import AppBar from '@mui/material/AppBar';

export default function Success() {
  const styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    appbar: {
      alignItems: 'center',
      padding: '10px 0',
    },
    textField: { marginTop: '50px' },
  };

  return (
    <div style={styles.root as React.CSSProperties}>
      <AppBar style={styles.appbar}>Success</AppBar>
      <h1 style={styles.textField}>Thank You For Your Submission</h1>
      <p> You will get an email with further instructions</p>
    </div>
  );
}
