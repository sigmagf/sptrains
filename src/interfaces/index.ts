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

export interface IStatusResponse {
  LinhaId: number;
  Nome: string;
  Status: string;
  Descricao: string;
  Tipo: 'M'|'C'|'4'|'5';
  DataGeracao: Date;
}
