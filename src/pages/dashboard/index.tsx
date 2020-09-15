import { NextPage } from 'next';
import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';
import { FaTrain, FaBezierCurve, FaUserCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { DashboardCard } from '~/components/DashboardCard';
import { LineStatusCard } from '~/components/LineStatusCard';

import { useAPI } from '~/hooks/useAPI';

import { DashboardContainer, DashboardStatusContainer } from '~/styles/pages/dashboard';

import { IStatusAPIResponse } from '~/interfaces';

const Dashboard: NextPage = () => {
  const [linesStatus, setLinesStatus] = useState<IStatusAPIResponse[]>(null);
  const [linesStatusActive, setLinesStatusActive] = useState(true);
  const api = useAPI();

  const getData = useCallback(async () => {
    const data = await api.getStatus();

    setLinesStatus(data);
  }, [api]);

  useEffect(() => {
    getData();
    setInterval((getData), 300000);
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard • SPTrains</title>
      </Head>
      <DashboardContainer>
        <DashboardStatusContainer active={linesStatusActive}>
          {linesStatus && linesStatus.map((line) => <LineStatusCard key={line.id} line={line} />)}
          <div className="handler">
            <button type="button" onClick={() => setLinesStatusActive((old) => !old)}>
              {linesStatusActive ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
          </div>
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
