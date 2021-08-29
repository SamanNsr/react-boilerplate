import { useCallback, useReducer } from 'react';
import formReducer from '../reducers/fromReducer';

/**
 * A hook that manages forms states dynamically.
 *
 * `useForm` is usually usable when you want handle a form which has several important inputs that need validations.
 * `formState` set a state for each form. Maybe each form has an initial value and initial validity.
 * `inputHandler` dispatch an action which controls each input value & validation individually.
 * `setFormData` will dispatch an action which add new inputs to the form.
 *
 *
 **/

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
