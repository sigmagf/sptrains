import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import { LineCard } from '~/components/LineCard';

import useLineColor from '~/hooks/useLineColor';

import { IndexContainer } from '~/styles/pages/index';

import { IStatusAPIResponse, IStatusLine } from '~/interfaces';

interface IIndexProps {
  lines: IStatusLine[];
}

interface IRequestResponse {
  lines?: IStatusAPIResponse[];
}

const Index: NextPage = () => {
  const [linesStatus, setLinesStatus] = useState<IStatusLine[]>([]);
  const lineColors = useLineColor();

  const getData = useCallback(async () => {
    const result = await axios.get<IRequestResponse>(`${process.env.NEXT_PUBLIC_API_URL}/lines/status`);

    if(result.data) {
      const newStatus = result.data.lines.map((line): IStatusLine => ({
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
  }, [lineColors]);

  useEffect(() => {
    setInterval(getData, 60000);
  }, [getData]);

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

export default Index;
