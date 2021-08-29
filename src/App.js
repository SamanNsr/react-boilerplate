import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from './hooks/useForm';
import Input from './components/Form';
import { EMAIL_VALIDATOR, REQUIRED_VALIDATOR } from './utils/schemaValidation';

function App() {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  useEffect(() => console.log(formState), [formState]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* sample of input form */}
        <Input
          element="input"
          id="email"
          type="text"
          placeholder={'Email'}
          validators={[EMAIL_VALIDATOR, REQUIRED_VALIDATOR]}
          // className=""
          label={'Title'}
          // labelStyles=""
          // errorTextStyle=""
          onInput={inputHandler}
        />

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
