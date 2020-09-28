import { NextPage } from 'next';
import Head from 'next/head';
import React, { useRef } from 'react';
import { FaUser } from 'react-icons/fa';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import { IconInput, Password } from '~/components/Form';

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
            <IconInput name="username" icon={FaUser} placeholder="Usuário" />
            <Password name="password" placeholder="Senha" />
            <button type="submit">Login</button>
          </Form>
        </LoginCard>
      </LoginContainer>
    </>
  );
};

export default Login;
