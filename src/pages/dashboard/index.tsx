import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { DashboardContainer } from '~/styles/pages/dashboard';

const Dashboard: NextPage = () => (
  <>
    <Head>
      <title>Dashboard • SPTrains</title>
    </Head>
    <DashboardContainer>
      a
    </DashboardContainer>
  </>
);

export default Dashboard;
