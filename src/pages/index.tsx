import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { FaCog, FaPen, FaTimes } from 'react-icons/fa';
import ReactLoading from 'react-loading';

import { LineStatusCard } from '~/components/LineStatusCard';

import { useLinesColor } from '~/hooks';
import { useAPI } from '~/hooks/useAPI';

import { HomeContainer, HomeUserContainer, UserAvatar, UserSettings, UserLogout } from '~/styles/pages/home';

import { IAPIStatusRequest } from '~/interfaces';

const Home: NextPage = () => {
  const { data } = useAPI<IAPIStatusRequest>('/lines/status', { method: 'GET' });
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
            ? <ReactLoading type="cylon" color="#000000" />
            : data.lines.map((line) => <LineStatusCard key={line.id} line={{ ...line }} color={colors.of(line.id)} />)
        }
        <HomeUserContainer>
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
        </HomeUserContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
