import { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface IStorage {
  themeTitle: 'light'|'dark';
  token: string;
}

type Response<T extends keyof IStorage> = [IStorage[T], Dispatch<SetStateAction<IStorage[T]>>];

function usePersistedState<T extends keyof IStorage>(key: T, initialState: IStorage[T]): Response<T> {
  const keyBase = '@controlle';

  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(`${keyBase}/${key}`);

    return storageValue ? JSON.parse(storageValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(`${keyBase}/${key}`, JSON.stringify(state));
  }, [key, keyBase, state]);

  return [state, setState];
}

export default usePersistedState;
