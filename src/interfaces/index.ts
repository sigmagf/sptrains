export interface ILineColor {
  color: string;
  text: string;
}

export interface ILine {
  id: number;
  name: string;
  color: ILineColor;
  status: string;
  details: string;
  operator: 'M'|'4'|'5'|'C';
  updatedAt: Date;
}

export interface ILinesColor {
  [x: number]: ILineColor;
}

export type IAPIResponse = Omit<ILine, 'color'>;
