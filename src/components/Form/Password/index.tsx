import React, { useRef, useEffect, useState, useCallback } from 'react';
import { FaLock, FaUnlock } from 'react-icons/fa';

import { useField } from '@unform/core';

import { InputOutContainer, InputContainer, InputIconContainer, InputErrorAlert } from './styles';

interface IInputProps {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & IInputProps;

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [togglePassword, setTogglePassword] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(containerRef.current && inputRef.current && (event.target as HTMLDivElement) === containerRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleTogglePassword = useCallback(() => {
    if(inputRef.current) {
      const inputElem = inputRef.current as HTMLInputElement;

      if(inputElem.type === 'password') {
        inputElem.type = 'text';
        setTogglePassword(true);
      } else {
        inputElem.type = 'password';
        setTogglePassword(false);
      }
    }
  }, []);

  return (
    <InputOutContainer>
      <InputContainer ref={containerRef} haveError={error !== undefined} onClick={handleClick}>
        <input
          type="password"
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          placeholder="• • • • • • • •"
          {...rest}
        />
        <InputIconContainer type="button" onClick={handleTogglePassword}>
          {togglePassword ? <FaUnlock /> : <FaLock />}
        </InputIconContainer>
      </InputContainer>
      {error && <InputErrorAlert>{error}</InputErrorAlert>}
    </InputOutContainer>
  );
};

export default Input;
