import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import { LineCard } from '~/components/LineCard';

import { IndexContainer } from '~/styles/pages/index';

import { ILine } from '~/interfaces';

interface IIndexProps {
  lines: ILine[];
}

const apiURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/status' : '/api/status';

const Index: NextPage<IIndexProps> = ({ lines }) => {
  const [linesStates, setLinesStates] = useState<ILine[]>(lines);

  const getData = useCallback(async () => {
    const result = await axios.get<ILine[]>(apiURL);

    if(result.data) {
      setLinesStates(result.data);
    }
  }, []);

  useEffect(() => {
    if(process.env.NODE_ENV !== 'development') {
      if(lines === null) {
        getData();
      }

      setInterval(getData, 60000);
    }
  }, []);

  return (
    <>
      <Head>
        <title>SPTrains</title>
      </Head>
      <IndexContainer>
        {linesStates.map((line) => <LineCard key={line.id} line={line} />)}
      </IndexContainer>
    </>
  );
};

Index.getInitialProps = async () => {
  const result = await axios.get<ILine[]>(apiURL);

  if(!result.data) {
    return { lines: null };
  }

  return { lines: result.data };
};

export default Index;
