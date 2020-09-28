import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { TextInputContainer } from './styles';

interface ITextInputProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
}

const TextInput: React.FC<ITextInputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <TextInputContainer>
      {label && <label htmlFor={name}>{ label }</label>}
      <input ref={inputRef} id={name} defaultValue={defaultValue} {...rest} />
    </TextInputContainer>
  );
};

export { TextInput };
