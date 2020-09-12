import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import { LineCard } from '~/components/LineCard';

import { IndexContainer } from '~/styles/pages/index';

import { ILine, ILinesColor, IStatusResponse } from '~/interfaces';

interface IIndexProps {
  lines: ILine[];
}

const lineColors: ILinesColor = {
  1: { color: '#171796', text: '#FFFFFF' },
  2: { color: '#007A5E', text: '#FFFFFF' },
  3: { color: '#ED2E38', text: '#222222' },
  4: { color: '#FFD525', text: '#222222' },
  5: { color: '#BA1FB5', text: '#FFFFFF' },
  7: { color: '#9E1766', text: '#FFFFFF' },
  8: { color: '#9E9E93', text: '#222222' },
  9: { color: '#00A78E', text: '#222222' },
  10: { color: '#007C8F', text: '#FFFFFF' },
  11: { color: '#F04D22', text: '#222222' },
  12: { color: '#083E89', text: '#FFFFFF' },
  13: { color: '#00AB5B', text: '#222222' },
  15: { color: '#8F8F8C', text: '#222222' },
};

const Index: NextPage<IIndexProps> = ({ lines }) => {
  const [linesStates, setLinesStates] = useState<ILine[]>(lines);

  const getData = useCallback(async () => {
    const result = await axios.get<IStatusResponse[]>(process.env.API_URL);

    if(!result.data) {
      throw new Error('Error on get status');
    }

    const newLines = result.data.map((line): ILine => ({
      id: line.LinhaId,
      name: line.Nome,
      color: lineColors[line.LinhaId],
      status: line.Status,
      details: line.Descricao,
      operator: line.Tipo,
      updatedAt: line.DataGeracao,
    }));

    setLinesStates(newLines);
  }, []);

  useEffect(() => {
    if(process.env.NODE_ENV === 'development') {
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
  const result = await axios.get<IStatusResponse[]>(process.env.API_URL);

  if(!result.data) {
    throw new Error('Error on get status');
  }

  const lines = result.data.map((line): ILine => ({
    id: line.LinhaId,
    name: line.Nome,
    color: lineColors[line.LinhaId],
    status: line.Status,
    details: line.Descricao,
    operator: line.Tipo,
    updatedAt: line.DataGeracao,
  }));

  return { lines };
};

export default Index;
