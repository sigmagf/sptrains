import axios, { AxiosRequestConfig } from 'axios';
import useSWR from 'swr';

type IRequestMethods = 'GET'|'POST'|'PUT'|'DELETE';

type IRequestProps = Omit<AxiosRequestConfig, 'baseURL'|'url'>;

export function useAPI<T = any>(url: string, props: IRequestProps) {
  const { data, error } = useSWR<T>(url, async (path) => {
    const request: AxiosRequestConfig = {
      ...props,
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      url: path,
    };

    const response = await axios(request);
    return response.data;
  });

  return { data, error };
}
