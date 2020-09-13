import React, { useState, useCallback, useEffect } from 'react';
import Select from 'react-select';

import axios from 'axios';

import useLineColor from '~/hooks/useLineColor';

import { ILineWithoutStations, IStation, IStationOnLine } from '~/interfaces';

import { StationsCardItem } from './StationsCardItem';
import { StationsCardContainer, StationsCardHeader, StationsCardSelect } from './styles';

interface IStationsCardProps {
  line: ILineWithoutStations;
  stations: IStation[];
}

const StationsCard: React.FC<IStationsCardProps> = ({ line, stations }) => {
  const [stationsOnLine, setStationsOnLine] = useState<IStationOnLine[]>([]);

  const lineColors = useLineColor();
  const lineTextColor = lineColors[line.number] ? lineColors[line.number].text : '#FFFFFF';

  const handleGetStationOnLine = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ligatures/l/${line.id}`);

      setStationsOnLine(response.data.ligatures);
    } catch(err) {
      if(!err.response) {
        alert(err.message);
      }
    }
  }, [line.id]);

  const handleStationSave = useCallback(async (e) => {
    try {
      const previousId = stationsOnLine.length > 0 ? stationsOnLine[stationsOnLine.length - 1].id : undefined;
      console.log(previousId);

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/ligatures`, {
        lineId: line.id,
        stationId: e.value,
        previousId,
      });
      console.log(response.data.ligature);

      handleGetStationOnLine();
    } catch(err) {
      if(err.response) {
        alert(err.response.data.message);
      } else {
        alert(err.message);
      }
    }
  }, [handleGetStationOnLine, line.id, stationsOnLine]);

  const handleStationRemove = useCallback(async (st: string) => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm('Deseja remover a estação da linha?')) {
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/ligatures/${st}`);

        handleGetStationOnLine();
      } catch(err) {
        alert(err.message);
      }
    }
  }, [handleGetStationOnLine]);

  useEffect(() => {
    handleGetStationOnLine();
  }, [handleGetStationOnLine]);

  return (
    <StationsCardContainer>
      <StationsCardHeader color={line.color} text={lineTextColor}>
        { line.number.toString().padStart(2, '0') } - { line.name }
      </StationsCardHeader>
      <StationsCardSelect color={line.color} text={lineTextColor}>
        <Select
          isClearable
          isSearchable
          options={stations.map((st) => ({ value: st.id, label: st.displayName }))}
          onChange={handleStationSave}
        />
      </StationsCardSelect>
      <div className="stations-container">
        {stationsOnLine.length > 0 && stationsOnLine.map((sol) => (
          <StationsCardItem
            key={sol.stationId}
            displayName={stations.find((station) => station.id === sol.stationId).displayName}
            remove={() => handleStationRemove(sol.id)}
          />
        ))}
      </div>
    </StationsCardContainer>
  );
};

export { StationsCard };
