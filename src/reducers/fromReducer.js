const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      // Check whether the input exists in our state or not.
      for (const inputId in state.inputs) {
        // it will pass if our input id not matches with any input id in our current state.
        if (!state.inputs[inputId]) {
          continue;
        }
        // Check form validity after adding our new input to state.
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          // Check form validity if current input exists in current state.
          formIsValid = (formIsValid && state.inputs[inputId].isValid) || true;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };

    case 'SET_DATA':
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

export default formReducer;
