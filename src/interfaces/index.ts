export interface IStatusLineColor {
  background: string;
  text: string;
}

export interface IStatusLinesColor {
  [x: number]: IStatusLineColor;
}

export interface IStatusLine {
  id: number;
  name: string;
  color: IStatusLineColor;
  status: string;
  details: string;
  operator: 'M'|'4'|'5'|'C';
  updatedAt: Date;
}

export type IStatusAPIResponse = Omit<IStatusLine, 'color'>;

/* ------------------------|> Line Interfaces <|------------------------ */

export interface ILineWithoutStations {
  id: string;
  number: number;
  name: string;
  color: string;
  active: boolean;
  operatorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IStation {
  id: string;
  displayName: string;
  fullName: string;
  elevator: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ILineWithStations {
  id: string;
  number: number;
  name: string;
  color: string;
  active: boolean;
  stations: IStation[];
  operatorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IStationOnLine {
  id: string;
  lineId: string;
  stationId: string;
  nextId?: string;
  details?: string;
}
