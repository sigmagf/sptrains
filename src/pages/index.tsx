import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect, useCallback } from 'react';
import { FaCog, FaPen, FaTimes } from 'react-icons/fa';

import { LineStatusCard } from '~/components/LineStatusCard';

import { useAPI } from '~/hooks/useAPI';

import { HomeContainer, HomeUserContainer, UserAvatar, UserSettings, UserLogout } from '~/styles/pages/home';

import { IStatusAPIResponse } from '~/interfaces';

const Home: NextPage = () => {
  const [linesStatus, setLinesStatus] = useState<IStatusAPIResponse[]>(null);
  const [lineStatusInterval, setLinesStatusInterval] = useState<NodeJS.Timeout>(null);
  const api = useAPI();

  const getData = useCallback(async () => {
    const data = await api.getStatus();

    setLinesStatus(data);
  }, [api]);

  const clearTimer = () => {
    if(lineStatusInterval) {
      clearInterval(lineStatusInterval);
      setLinesStatusInterval(null);
    }
  };

  const restartTimer = useCallback(() => {
    getData();
    setLinesStatusInterval(setTimeout(getData, 300000));
  }, [getData]);

  useEffect(() => {
    restartTimer();
  }, []);

  return (
    <>
      <Head>
        <title>SPTrains</title>
      </Head>
      <HomeContainer>
        { linesStatus && linesStatus.map((line) => <LineStatusCard key={line.id} line={{ ...line }} />) }
        <HomeUserContainer>
          <UserAvatar>
            <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="user-avatar" />
            <div>
              <FaPen size={20} />
            </div>
          </UserAvatar>
          <UserSettings>
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
