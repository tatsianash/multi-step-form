import React, { useState } from 'react';
import Confirm from './steps/Confirm';
import FormPersonalDetails from './steps/FormPersonalDetails';
import FormUserDetails from './steps/FormUserDetails';
import Success from './steps/Success';
import useForm from '../Hooks/useForm';

export default function UserForm() {
  const [step, setStep] = useState(1);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    state: '',
    bio: '',
  };
  const {
    values: formData,
    handleFieldsChange,
    errors,
  } = useForm(initialValues);

  const nextStep = () => {
    setStep((st) => st + 1);
  };

  const prevStep = () => {
    setStep((st) => st - 1);
  };

  console.log('errors', errors);

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
          errors={errors}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={formData} />
      );
    case 4:
      return <Success />;
    default:
      return <div>Error happend..</div>;
  }
}
