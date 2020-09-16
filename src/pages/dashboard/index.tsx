import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { FaTrain, FaBezierCurve, FaUserCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReactLoading from 'react-loading';

import { DashboardCard } from '~/components/DashboardCard';
import { LineStatusCard } from '~/components/LineStatusCard';

import { useLinesColor, useAPI } from '~/hooks';

import { DashboardContainer, DashboardStatusContainer } from '~/styles/pages/dashboard';

import { IAPIStatusRequest } from '~/interfaces';

const Dashboard: NextPage = () => {
  const [linesStatusActive, setLinesStatusActive] = useState(true);
  const colors = useLinesColor();

  const { data } = useAPI<IAPIStatusRequest>('lines/status', { method: 'GET' }, { refreshInterval: 300000 });

  return (
    <>
      <Head>
        <title>Dashboard • SPTrains</title>
      </Head>
      <DashboardContainer>
        <DashboardStatusContainer active={linesStatusActive}>
          {
            (!data || (!data.lines && data.lines.length < 1))
              ? <ReactLoading type="cylon" color="#000000" />
              : data.lines.map((line) => <LineStatusCard key={line.id} line={line} color={colors.ofLine(line.id)} />)
          }
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
