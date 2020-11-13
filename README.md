[![Build Status](https://travis-ci.org/Enrise/useFetchCache.svg?branch=master)](https://travis-ci.org/Enrise/useFetchCache)

# useFetchCache

This is just a wrapper around the [useSWR](https://swr.vercel.app/) hook that adds the initial data to the cache and fetches the data when there is no initial data available.

## Why

When you use Server Side Rendering to render you page and provide initial data this data is not stored in the cache. That means that for the cache to work you need an extra client-side fetch, which will only add unnecessary load to the backend.

## How to use

The signature is exactly the same as the current signature of `useSWR`.

## Notes

If you don't provide initial data this hook will fetch the data for you on mount.
