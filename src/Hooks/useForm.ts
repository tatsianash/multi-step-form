import React, { useState } from 'react';

export interface FormDataType {
  firstName?: string;
  lastName?: string;
  email?: string;
  occupation?: string;
  city?: string;
  state?: string;
  bio?: string;
}
export default function useForm(initialValue: FormDataType) {
  //Form values
  const [values, setValues] = useState(initialValue);
  //Errors
  const [errors, setErrors] = useState({});
  const validate = (name: string, value: string) => {
    //A function to validate each input values

    switch (name) {
      case 'state':
        if (value.length < 2 || value.length > 2) {
          // we will set the error state

          setErrors({
            ...errors,
            state: 'Please use 2 letter format',
          });
        } else {
          const omitSingle = (key: string, { [key]: _, ...obj }) => obj;
          let newObj = omitSingle('state', errors);
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };
  const handleFieldsChange = (field: string, value: string) => {
    validate(field, value);
    setValues({ ...values, [field]: value });
  };
  //A method to handle form inputs

  return { values, handleFieldsChange, errors };
}
