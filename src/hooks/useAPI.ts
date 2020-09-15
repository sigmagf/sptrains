import axios from 'axios';

import { IStatusAPIResponse } from '~/interfaces';

interface IRequestResponse {
  lines?: IStatusAPIResponse[];
}

export function useAPI() {
  async function getStatus(): Promise<IStatusAPIResponse[]> {
    const { data } = await axios.get<IRequestResponse>(`${process.env.NEXT_PUBLIC_API_URL}/lines/status`);

    if(data.lines.length > 0) {
      return data.lines;
    }

    return null;
  }

  return { getStatus };
}
