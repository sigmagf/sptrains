import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import { LineCard } from '~/components/LineCard';

import useLineColor from '~/hooks/useLineColor';

import { IndexContainer } from '~/styles/pages/index';

import { IStatusAPIResponse } from '~/interfaces';

interface IIndexProps {
  lines: IStatusAPIResponse[];
}

interface IRequestResponse {
  lines?: IStatusAPIResponse[];
}

const Index: NextPage<IIndexProps> = ({ lines }) => {
  const [linesStatus, setLinesStatus] = useState<IStatusAPIResponse[]>(lines);
  const lineColors = useLineColor();

  const getData = useCallback(async () => {
    const result = await axios.get<IRequestResponse>(`${process.env.NEXT_PUBLIC_API_URL}/lines/status`);

    if(result.data) {
      const newStatus = result.data.lines.map((line): IStatusAPIResponse => ({
        id: line.id,
        name: line.name,
        details: line.details,
        operator: line.operator,
        status: line.status,
        updatedAt: line.updatedAt,
      }));

      setLinesStatus(newStatus);
    }
  }, []);

  useEffect(() => {
    setInterval(getData, 60000);
  }, [getData]);

  return (
    <>
      <Head>
        <title>SPTrains</title>
      </Head>
      <IndexContainer>
        {
          linesStatus
          && linesStatus.map((line) => <LineCard key={line.id} line={{ ...line, color: lineColors[line.id] }} />)
        }
      </IndexContainer>
    </>
  );
};

Index.getInitialProps = async () => {
  const result = await axios.get<IRequestResponse>(`${process.env.NEXT_PUBLIC_API_URL}/lines/status`);

  if(result.data) {
    const newStatus = result.data.lines.map((line): IStatusAPIResponse => ({
      id: line.id,
      name: line.name,
      details: line.details,
      operator: line.operator,
      status: line.status,
      updatedAt: line.updatedAt,
    }));

    return { lines: newStatus };
  }

  return { lines: null };
};

export default Index;
