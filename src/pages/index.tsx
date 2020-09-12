import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import { LineCard } from '~/components/LineCard';

import useLineColor from '~/hooks/useLineColor';

import { IndexContainer } from '~/styles/pages/index';

import { IAPIResponse, ILine } from '~/interfaces';

interface IIndexProps {
  lines: ILine[];
}

const lineColors = useLineColor();

const Index: NextPage<IIndexProps> = ({ lines }) => {
  const [linesStatus, setLinesStatus] = useState<ILine[]>(lines);

  const getData = useCallback(async () => {
    const result = await axios.get<IAPIResponse[]>(process.env.API_URL);

    if(result.data) {
      const newStatus = result.data.map((line): ILine => ({
        id: line.id,
        name: line.name,
        color: lineColors[line.id],
        details: line.details,
        operator: line.operator,
        status: line.status,
        updatedAt: line.updatedAt,
      }));

      setLinesStatus(newStatus);
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
        {linesStatus.map((line) => <LineCard key={line.id} line={line} />)}
      </IndexContainer>
    </>
  );
};

Index.getInitialProps = async () => {
  const result = await axios.get<IAPIResponse[]>(process.env.API_URL);

  if(!result.data) {
    return { lines: null };
  }

  const lines = result.data.map((line): ILine => ({
    id: line.id,
    name: line.name,
    color: lineColors[line.id],
    details: line.details,
    operator: line.operator,
    status: line.status,
    updatedAt: line.updatedAt,
  }));

  return { lines };
};

export default Index;
