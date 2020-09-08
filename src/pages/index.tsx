import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import { LineCard } from '~/components/LineCard';

import { IndexContainer } from '~/styles/pages/index';

import { ILine, IAPIResponse, ILineColor } from '~/interfaces';

interface IIndexProps {
  lines: ILine[];
}

interface ILineColorsResponse {
  [x: number]: ILineColor;
}

const apiUrl = 'http://apps.cptm.sp.gov.br:8080/AppMobileService/api/LinhasMetropolitanasAppV3?versao=4';

const Index: NextPage<IIndexProps> = ({ lines }) => {
  const [linesStates, setLinesStates] = useState<ILine[]>(lines);

  const getData = useCallback(async () => {
    const response = await axios.get<IAPIResponse[]>(apiUrl);

    const lineColors: ILineColorsResponse = {
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

    if(response.data) {
      const result: ILine[] = response.data.map((line) => ({
        id: line.LinhaId,
        name: line.Nome,
        color: lineColors[line.LinhaId],
        status: line.Status,
        details: line.Descricao,
        operator: line.Tipo,
        updatedAt: line.DataGeracao,
      }));

      setLinesStates(result);
    }
  }, []);

  useEffect(() => { setInterval(getData, 60000); }, []);

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
  const response = await axios.get<IAPIResponse[]>(apiUrl);

  const lineColors: ILineColorsResponse = {
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

  if(!response.data) {
    return null;
  }

  const result: ILine[] = response.data.map((line) => ({
    id: line.LinhaId,
    name: line.Nome,
    color: lineColors[line.LinhaId],
    status: line.Status,
    details: line.Descricao,
    operator: line.Tipo,
    updatedAt: line.DataGeracao,
  }));

  return { lines: result };
};

export default Index;
