import { NowRequest, NowResponse } from '@vercel/node';
import axios from 'axios';

import useLineColor from '~/hooks/useLineColor';

import { IStatusResponse, ILine } from '~/interfaces';

export default async (req: NowRequest, res: NowResponse) => {
  const lineColors = useLineColor();

  axios.get<IStatusResponse[]>(process.env.API_URL).then((result) => {
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
  }).catch((error) => res.json({ message: error.message || 'Unexpected error.' }));
};
