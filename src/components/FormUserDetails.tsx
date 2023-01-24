import React from 'react';
import { FormDataType } from './UserForm';

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
  return <div>FormUserDetails</div>;
}
