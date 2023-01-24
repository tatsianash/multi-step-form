import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { labelMap } from './labelMap';

interface IProps {
  label: string;
  value: string;
}
export default function CustomListItem({ label, value }: IProps) {
  return (
    <ListItem>
      <ListItemText primary={labelMap[label]} secondary={value} />
    </ListItem>
  );
}
