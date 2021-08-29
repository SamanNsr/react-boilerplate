import { useReducer, useEffect } from 'react';

// import { validate } from '../../utils/validators';
import inputReducer from '../reducers/inputReducer';

function useInput(id, type, initialValue, validators, initialValid, onFormInput) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || '',
    isValid: initialValid || false,
    err: null,
    isTouched: false,
  });

  //   const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onFormInput && onFormInput(id, value, isValid);
  }, [id, onFormInput, isValid, value]);

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: type === 'checkbox' ? event.target.checked : event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  const reset = () => {
    dispatch({
      type: 'RESET',
      value: initialValue || '',
      isValid: initialValid || false,
    });
  };

  return [inputState, changeHandler, touchHandler, reset];
}

export default useInput;
