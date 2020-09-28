import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import { InputOutContainer, InputContainer, InputLabelContainer, InputErrorAlert } from './styles';

interface IInputProps {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & IInputProps;

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(containerRef.current && inputRef.current && (event.target as HTMLDivElement) === containerRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <InputOutContainer>
      <InputContainer ref={containerRef} haveError={error !== undefined} onClick={handleClick}>
        {label && (
          <InputLabelContainer>
            {label}
          </InputLabelContainer>
        )}

        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
      </InputContainer>
      {error && <InputErrorAlert>{error}</InputErrorAlert>}
    </InputOutContainer>
  );
};

export default Input;
