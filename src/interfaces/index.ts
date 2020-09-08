export interface IAPIResponse {
  LinhaId: number;
  Status: string;
  Descricao: string;
  Nome: string;
  Tipo: 'M'|'4'|'5'|'C';
  DataGeracao: Date;
}

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
