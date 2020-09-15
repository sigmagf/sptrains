import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect, useCallback } from 'react';

import { LineCard } from '~/components/LineCard';

import { useAPI } from '~/hooks/useAPI';
import useLineColor from '~/hooks/useLineColor';

import { HomeContainer } from '~/styles/pages/home';

import { IStatusAPIResponse } from '~/interfaces';

const Home: NextPage = () => {
  const [linesStatus, setLinesStatus] = useState<IStatusAPIResponse[]>(null);
  const lineColors = useLineColor();
  const api = useAPI();

  const getData = useCallback(async () => {
    const data = await api.getStatus();

    setLinesStatus(data);
  }, [api]);

  useEffect(() => {
    getData();
    setInterval((getData), 60000);
  }, []);

  return (
    <>
      <Head>
        <title>SPTrains</title>
      </Head>
      <HomeContainer>
        {
          linesStatus
          && linesStatus.map((line) => <LineCard key={line.id} line={{ ...line, color: lineColors[line.id] }} />)
        }
      </HomeContainer>
    </>
  );
};

export default Home;
