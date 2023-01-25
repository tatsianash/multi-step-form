import React from 'react';
import { FormDataType } from '../../Hooks/useForm';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { List, ListItem, ListItemText } from '@mui/material';
import { styles } from './stepStyles';
import CustomList from '../CustomListItem';

interface IProps {
  values: FormDataType;
  nextStep: () => void;
  prevStep: () => void;
}
export default function Confirm({ values, nextStep, prevStep }: IProps) {
  const { firstName, lastName, email, occupation, city, state, bio } = values;
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
      <AppBar style={styles.appbar}>Confirm User Data</AppBar>

      <List style={styles.textField}>
        {Object.entries(values).map(([k, v]) => (
          <CustomList key={k} label={k} value={v} />
        ))}
      </List>

      <div>
        <Button onClick={toPrevStep}>Back</Button>
        <Button onClick={toNextStep}>Continue</Button>
      </div>
    </div>
  );
}
