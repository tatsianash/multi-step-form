import React from 'react';
import { FormDataType } from '../UserForm';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { styles } from './stepStyles';

interface IProps {
  values: FormDataType;
  nextStep: () => void;
  //   prevStep: () => void;
  handleChange: (field: string, value: string) => void;
}

export default function FormUserDetails({
  nextStep,
  handleChange,
  values,
}: IProps) {
  const toNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div style={styles.root as React.CSSProperties}>
      <AppBar style={styles.appbar}>Enter User Details</AppBar>
      <TextField
        style={styles.textField}
        label="First Name"
        onChange={(e) => handleChange('firstName', e.target.value)}
        value={values?.firstName}
      />

      <TextField
        style={styles.textField}
        label="Last Name"
        onChange={(e) => handleChange('lastName', e.target.value)}
        value={values?.lastName}
      />

      <TextField
        style={styles.textField}
        label="Email"
        onChange={(e) => handleChange('email', e.target.value)}
        value={values?.email}
      />
      <br></br>
      <Button onClick={toNextStep}>Continue</Button>
    </div>
  );
}
