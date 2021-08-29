import validationField from '../utils/validate';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      const { isValid, err } = validationField(action.val, action.validators);
      return {
        ...state,
        value: action.val,
        // Input validation happens on every onChange call.
        // So, if an input is totally optional or have not any validation,
        // you can leave 'isValid' property 'undefined' in useForm first parameter.
        isValid,
        err,
      };
    case 'TOUCH':
      return { ...state, isTouched: true };
    case 'RESET':
      return {
        value: action.initialValue || '',
        isValid: action.initialValid || false,
        err: null,
        isTouched: false,
      };
    default:
      return state;
  }
};

export default inputReducer;
