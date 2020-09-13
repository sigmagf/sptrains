import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import axios from 'axios';

import { StationsCard } from '~/components/StationsCard';

import { DashboardContainer } from '~/styles/pages/dashboard';

import { ILineWithoutStations, IStation } from '~/interfaces';

interface IAPIError {
  status: string;
  message: string;
}

interface IAPILinesRequest {
  lines?: ILineWithoutStations[];
  message?: string;
}

interface IAPIStationsRequest {
  stations?: IStation[];
  message?: string;
}

interface IDashboardProps {
  lines?: ILineWithoutStations[];
  stations?: IStation[];
  error?: IAPIError;
}

const Dashboard: NextPage<IDashboardProps> = ({ lines, stations, error }) => {
  if(error) {
    return (
      <>
        <Head>
          <title>Dashboard - SPTrains</title>
        </Head>
        <DashboardContainer>
          <h1>ERROR</h1>
          <h3>{error.status}</h3>
          <h6>{error.message}</h6>
        </DashboardContainer>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Dashboard - SPTrains</title>
      </Head>
      <DashboardContainer>
        {lines.map((line) => <StationsCard key={line.id} line={line} stations={stations} />)}
      </DashboardContainer>
    </>
  );
};

Dashboard.getInitialProps = async () => {
  try {
    const linesReq = await axios.get<IAPILinesRequest>(`${process.env.NEXT_PUBLIC_API_URL}/lines`);
    const stationsReq = await axios.get<IAPIStationsRequest>(`${process.env.NEXT_PUBLIC_API_URL}/stations`);
    return {
      lines: linesReq.data.lines,
      stations: stationsReq.data.stations,
      error: null,
    };
  } catch(err) {
    if(err.response) {
      return {
        lines: null,
        stations: null,
        error: {
          status: err.response.status,
          message: err.response.data.message || 'Unexpected error.',
        },
      };
    }
    return {
      lines: null,
      stations: null,
      error: {
        status: 500,
        message: err.message || 'Unexpected error.',
      },
    };
  }
};

export default Dashboard;
