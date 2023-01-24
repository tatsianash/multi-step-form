import React from 'react';
import { FormDataType } from './UserForm';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

interface IProps {
  values: FormDataType;
  nextStep: () => void;
  prevStep: () => void;
  handleChange: (field: string, value: string) => void;
}
export default function FormPersonalDetails({
  values,
  nextStep,
  prevStep,
  handleChange,
}: IProps) {
  const toNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };
  const toPrevStep = (e: React.FormEvent) => {
    e.preventDefault();
    prevStep();
  };
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
      <AppBar style={styles.appbar}>Enter User Details</AppBar>
      <TextField
        style={styles.textField}
        label="Occupation"
        onChange={(e) => handleChange('occupation', e.target.value)}
        value={values?.occupation}
      />

      <TextField
        style={styles.textField}
        label="City"
        onChange={(e) => handleChange('city', e.target.value)}
        value={values?.city}
      />

      <TextField
        style={styles.textField}
        label="State"
        onChange={(e) => handleChange('state', e.target.value)}
        value={values?.state}
      />
      <TextField
        style={styles.textField}
        label="Bio"
        onChange={(e) => handleChange('bio', e.target.value)}
        value={values?.bio}
      />
      <br></br>
      <div>
        <Button onClick={toPrevStep}>Back</Button>
        <Button onClick={toNextStep}>Continue</Button>
      </div>
    </div>
  );
}
