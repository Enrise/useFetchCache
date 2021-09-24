/* eslint-disable @typescript-eslint/no-explicit-any */

import useSwr, {
  cache,
  ConfigInterface,
  keyInterface,
  mutate,
  responseInterface,
} from "swr";
import { useEffect } from "react";

const useFetchCache = <Data = any, Error = any>(
  key: keyInterface,
  fetchFunction?: FetcherFunctionType<Data>,
  config?: ConfigInterface<Data, Error>
): responseInterface<Data, Error> => {
  const response = useSwr(key, fetchFunction, config);
  const initialData = config?.initialData;

  useEffect(() => {
    if (!initialData) {
      mutate(key);
      return;
    }

    cache.set(key, initialData);
  }, [initialData]);

  return response;
};

export default useFetchCache;

type FetcherFunctionType<Data> =
  | ((...args: any) => Data | Promise<Data>)
  | null;
