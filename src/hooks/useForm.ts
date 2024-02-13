import { useState } from 'react';

export const useForm = ( formFields = {} ) => {
  const [formState, setFormState] = useState( formFields )

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [ name ]: value,
    });
  }

  const onFormReset = () => {
    setFormState(formFields);
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onFormReset,
  }
}
