import { ChangeEvent, useState } from 'react';

export const useForm = <T extends { [key: string]: string }>(formFields: T) => {
  const [formState, setFormState] = useState(formFields);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormReset = () => {
    setFormState(formFields);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onFormReset,
  };
};
