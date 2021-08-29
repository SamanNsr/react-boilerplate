import React, { useEffect } from 'react';
import useInput from '../hooks/useInput';

const Input = (props) => {
  const { id, type, onInput, initialValue, initialValid, validators } = props;

  const [inputState, changeHandler, touchHandler, reset] = useInput(
    id,
    type,
    initialValue,
    validators,
    initialValid,
    onInput,
  );

  // componentWillUnmount
  useEffect(() => {
    reset();
  }, []);

  const style =
    !inputState.isValid && inputState.isTouched
      ? {
          borderColor: 'red',
        }
      : {
          borderColor: 'black',
        };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        checked={props.checked}
        style={style}
        className={`${props.type !== 'checkbox' && ''} ${
          !inputState.isValid && inputState.isTouched && ''
        } ${props.className}`}
      />
    ) : props.element === 'textarea' ? (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        placeholder={props.placeholder}
        className={`${!inputState.isValid && inputState.isTouched && ''} ${props.className}`}
      />
    ) : null;

  return props.type === 'checkbox' ? (
    <div>
      {/* IN CHECKBOX: Label comes after element itself. */}
      {element}
      <label htmlFor={props.id} className={props.labelStyles}>
        {props.label}
      </label>
      {!inputState.isValid && inputState.isTouched && (
        <p className={props.errorTextStyle}>{inputState.err}</p>
      )}
    </div>
  ) : (
    <div>
      <label htmlFor={props.id} className={props.labelStyles + ' my-1'}>
        {props.label}
        <div className="w-full relative">
          {element}
          {props.icon && (
            <i onClick={props.iconOnClick} className={`${props.iconStyle}`}>
              {/* <FontAwesomeIcon icon={props.icon} /> */}
            </i>
          )}
        </div>
      </label>
      {!inputState.isValid && inputState.isTouched && (
        <p className={props.errorTextStyle}>{inputState.err}</p>
      )}
    </div>
  );
};

export default Input;
