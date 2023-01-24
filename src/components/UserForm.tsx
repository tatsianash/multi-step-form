import React, { useState } from 'react';
import Confirm from './Confirm';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';
import Success from './Success';

export interface FormDataType {
  firstName?: string | undefined;
  lastName?: string | undefined;
  email?: string | undefined;
  occupation?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  bio?: string | undefined;
}

export default function UserForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    state: '',
    bio: '',
  });

  const nextStep = () => {
    setStep((st) => st + 1);
  };

  const prevStep = () => {
    setStep((st) => st - 1);
  };

  const handleFieldsChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleFieldsChange}
          values={formData}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleFieldsChange}
          values={formData}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={formData} />
      );
    // case 4:
    //   return <Success  prevStep={prevStep} handleChange={handleFieldsChange} values={formData}/>;
    default:
      return <div>Error happend..</div>;
  }
}
