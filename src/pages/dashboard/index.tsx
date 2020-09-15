import { NextPage } from 'next';
import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';
import { FaTrain, FaBezierCurve, FaUserCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { DashboardCard } from '~/components/DashboardCard';
import { DashboardStatusCard } from '~/components/DashboardStatusCard';

import { useAPI } from '~/hooks/useAPI';

import { DashboardContainer, DashboardStatusContainer } from '~/styles/pages/dashboard';

import { IStatusAPIResponse } from '~/interfaces';

const Dashboard: NextPage = () => {
  const [linesStatus, setLinesStatus] = useState<IStatusAPIResponse[]>(null);
  const [linesStatusActive, setLinesStatusActive] = useState<>(false);
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
        <title>Dashboard • SPTrains</title>
      </Head>
      <DashboardContainer>
        <DashboardStatusContainer active={linesStatusActive}>
          {linesStatus && linesStatus.map((line) => <DashboardStatusCard key={line.id} line={line} />)}
          <button type="button" onClick={() => setLinesStatusActive((old) => !old)} className="handler">
            {linesStatusActive ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </DashboardStatusContainer>
        <div className="cards-group">
          <DashboardCard gridArea="S" icon={FaTrain} title="ESTAÇÕES" />
          <DashboardCard gridArea="L" icon={FaBezierCurve} title="LINHAS" />
          <DashboardCard gridArea="O" icon={FaUserCog} title="OPERADORES" />
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
