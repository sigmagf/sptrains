import React, { useRef, useEffect } from 'react';
import { IconType } from 'react-icons/lib';

import { useField } from '@unform/core';

import { InputOutContainer, InputContainer, InputIconContainer, InputErrorAlert } from './styles';

interface IIconInputProps {
  name: string;
  icon: IconType;
}

type IconInputProps = JSX.IntrinsicElements['input'] & IIconInputProps;

const IconInput: React.FC<IconInputProps> = ({ name, icon: Icon, ...rest }) => {
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
        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
        <InputIconContainer>
          <Icon />
        </InputIconContainer>
      </InputContainer>
      {error && <InputErrorAlert>{error}</InputErrorAlert>}
    </InputOutContainer>
  );
};

export default IconInput;
