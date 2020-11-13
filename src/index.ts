import useSwr, {
  cache,
  ConfigInterface,
  keyInterface,
  mutate,
  responseInterface,
} from "swr";
import { useEffect } from "react";

const useFetchCache: UseFetchCacheType = (key, fetchFunction, config) => {
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

/* eslint-disable @typescript-eslint/no-explicit-any */

type UseFetchCacheType<Data = any, Error = any> = (
  key: keyInterface,
  fetchFunction?: FetcherFunctionType<Data>,
  config?: ConfigInterface<Data, Error>
) => responseInterface<Data, Error>;

type FetcherFunctionType<Data> =
  | ((...args: any) => Data | Promise<Data>)
  | null;
