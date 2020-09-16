import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { FaCog, FaPen, FaTimes } from 'react-icons/fa';
import ReactLoading from 'react-loading';

import { LineStatusCard } from '~/components/LineStatusCard';

import { useLinesColor, useAPI } from '~/hooks';

import {
  HomeContainer,
  LoadingContainer,
  UserContainer,
  UserAvatar,
  UserSettings,
  UserLogout,
} from '~/styles/pages/home';

import { IAPIStatusRequest } from '~/interfaces';

const Home: NextPage = () => {
  const { data } = useAPI<IAPIStatusRequest>('lines/status', { method: 'GET' }, { refreshInterval: 300000 });
  const colors = useLinesColor();
  const router = useRouter();

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
        <UserContainer>
          <UserAvatar>
            <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="user-avatar" />
            <div>
              <FaPen size={20} />
            </div>
          </UserAvatar>
          <UserSettings onClick={() => router.push('/dashboard')}>
            <FaCog size={20} />
          </UserSettings>
          <UserLogout>
            <FaTimes size={20} />
          </UserLogout>
        </UserContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
