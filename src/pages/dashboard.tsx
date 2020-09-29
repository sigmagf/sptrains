import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { FaTrain, FaBezierCurve, FaUserCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReactLoading from 'react-loading';

import { LineStatusCard } from '~/components/LineStatusCard';
import { UserUi } from '~/components/UserUi';

import { useLinesColor, useAPI } from '~/hooks';

import { DashboardContainer, DashboardStatusContainer, DashboardCard } from '~/styles/pages/dashboard';

import { IAPIStatusLine } from '~/interfaces';

const Dashboard: NextPage = () => {
  const [linesStatusActive, setLinesStatusActive] = useState(true);
  const colors = useLinesColor();

  const { data } = useAPI<IAPIStatusLine>('lines/status', { method: 'GET' });

  return (
    <>
      <Head>
        <title>Dashboard • SPTrains</title>
      </Head>
      <DashboardContainer>
        <DashboardStatusContainer active={linesStatusActive}>
          { data && (
            (!data.lines || data.lines.length < 1)
              ? <ReactLoading type="cylon" color="#000000" />
              : data.lines.map((l) => <LineStatusCard key={l.id} line={l} color={colors.ofLine(l.id)} details={false} />)
          )}
          <div className="handler">
            <button type="button" onClick={() => setLinesStatusActive((old) => !old)}>
              {linesStatusActive ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
          </div>
        </DashboardStatusContainer>

        <div className="cards-group">
          <DashboardCard gridArea="ST">
            <div className="icon"><FaTrain size={80} /></div>
            <div className="title">ESTAÇÕES</div>
          </DashboardCard>
          <DashboardCard gridArea="LN">
            <div className="icon"><FaBezierCurve size={80} /></div>
            <div className="title">LINHAS</div>
          </DashboardCard>
          <DashboardCard gridArea="OP">
            <div className="icon"><FaUserCog size={80} /></div>
            <div className="title">OPERADORES</div>
          </DashboardCard>
        </div>
      </DashboardContainer>
      <UserUi />
    </>
  );
};

export default Dashboard;
