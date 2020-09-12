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

interface IRequestError {
  code: number;
  message: string;
}

const apiURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/status' : '/api/status';

const Index: NextPage<IIndexProps> = ({ lines }) => {
  const [linesStates, setLinesStates] = useState<ILine[]>(lines);
  const [requestError, setRequestError] = useState<IRequestError>(null);

  const getData = useCallback(() => {
    axios.get<ILine[]>(apiURL).then((result) => {
      setLinesStates(result.data);
    }).catch((err) => {
      setRequestError({
        code: err.response.status || 0,
        message: err.response.message || err.message || 'Unexpected error',
      });
    });
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
        {requestError && (
          <div>
            <h2>Request Error.</h2>
            <h3>Code: {requestError.code}</h3>
            <h5>Message: {requestError.message}</h5>
          </div>

        )}
        {!requestError && linesStates.map((line) => <LineCard key={line.id} line={line} />)}
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
