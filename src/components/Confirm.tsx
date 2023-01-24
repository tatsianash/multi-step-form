import React from 'react';
import { FormDataType } from './UserForm';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { List, ListItem, ListItemText } from '@mui/material';

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
      <AppBar style={styles.appbar}>Confirm User Data</AppBar>
      <List style={styles.textField}>
        <ListItem>
          <ListItemText primary="First Name" secondary={firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="First Name" secondary={lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="First Name" secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last Name" secondary={occupation} />
        </ListItem>
        <ListItem>
          <ListItemText primary="City" secondary={city} />
        </ListItem>
        <ListItem>
          <ListItemText primary="State" secondary={state} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bio" secondary={bio} />
        </ListItem>
      </List>

      <div>
        <Button onClick={toPrevStep}>Back</Button>
        <Button onClick={toNextStep}>Continue</Button>
      </div>
    </div>
  );
}
