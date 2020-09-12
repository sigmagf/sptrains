import { NowRequest, NowResponse } from '@vercel/node';
import axios from 'axios';

import useLineColor from '~/hooks/useLineColor';

import { IStatusResponse, ILine } from '~/interfaces';

export default async (req: NowRequest, res: NowResponse) => {
  const lineColors = useLineColor();

  const result = await axios.get<IStatusResponse[]>(process.env.API_URL);

  if(!result.data) {
    throw new Error('Error on get status');
  }

  const lines = result.data.map((line): ILine => ({
    id: line.LinhaId,
    name: line.Nome,
    color: lineColors[line.LinhaId],
    status: line.Status,
    details: line.Descricao,
    operator: line.Tipo,
    updatedAt: line.DataGeracao,
  }));

  return res.json(lines);
};
