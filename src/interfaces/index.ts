/* --------------------|> API Requests Interfaces <|-------------------- */

export interface IAPIStatusLine {
  lines: IStatusLine[];
  message: string;
}

/* ------------------------|> Line Interfaces <|------------------------ */

export interface ILineColor {
  background: string;
  text: string;
}

export interface IStatusLine {
  id: number;
  name: string;
  status: string;
  details: string;
  operator: 'M'|'4'|'5'|'C';
  updatedAt: Date;
}

export interface ILine {
  id: string;
  number: number;
  name: string;
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

export interface IStationOnLine {
  id: string;
  lineId: string;
  stationId: string;
  nextId?: string;
  details?: string;
}
