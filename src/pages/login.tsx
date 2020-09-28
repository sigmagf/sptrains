import { NextPage } from 'next';
import Head from 'next/head';
import React, { useRef } from 'react';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import { TextInput } from '~/components/Form/TextInput';

import { LoginContainer, LoginTitle, LoginCard } from '~/styles/pages/login';

interface FormData {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data, { reset }) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Head>
        <title>Login • SPTrains</title>
      </Head>
      <LoginContainer>
        <LoginTitle>
          SPTrains
        </LoginTitle>
        <LoginCard>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <TextInput type="text" name="username" label="Usuário" />
            <TextInput type="password" name="password" label="Senha" />
            <button type="submit">Entrar</button>
          </Form>
        </LoginCard>
      </LoginContainer>
    </>
  );
};

export default Login;
