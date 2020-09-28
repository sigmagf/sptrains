import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ReactLoading from 'react-loading';

import { LineStatusCard } from '~/components/LineStatusCard';
import { UserUi } from '~/components/UserUi';

import { useLinesColor, useAPI } from '~/hooks';

import { HomeContainer, LoadingContainer } from '~/styles/pages/home';

import { IAPIStatusRequest } from '~/interfaces';

const Home: NextPage = () => {
  const { data } = useAPI<IAPIStatusRequest>('lines/status', { method: 'GET' });
  const colors = useLinesColor();

  return (
    <>
      <Head>
        <title>SPTrains</title>
      </Head>
      <HomeContainer>
        {
          (!data || (!data.lines && data.lines.length < 1))
            ? <LoadingContainer><ReactLoading type="cylon" color="#000000" /></LoadingContainer>
            : data.lines.map((line) => <LineStatusCard key={line.id} line={line} color={colors.ofLine(line.id)} />)
        }
      </HomeContainer>
      <UserUi />
    </>
  );
};

export default Home;
