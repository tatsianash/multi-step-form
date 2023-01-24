import React from 'react';
import { FormDataType } from '../UserForm';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { styles } from './stepStyles';
import { labelMap } from '../labelMap';

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

  return (
    <div style={styles.root as React.CSSProperties}>
      <AppBar style={styles.appbar}>Enter User Details</AppBar>
      <TextField
        style={styles.textField}
        label={labelMap.occupation}
        onChange={(e) => handleChange('occupation', e.target.value)}
        value={values?.occupation}
      />

      <TextField
        style={styles.textField}
        label={labelMap.city}
        onChange={(e) => handleChange('city', e.target.value)}
        value={values?.city}
      />

      <TextField
        style={styles.textField}
        label={labelMap.state}
        onChange={(e) => handleChange('state', e.target.value)}
        value={values?.state}
      />
      <TextField
        style={styles.textField}
        label={labelMap.bio}
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
