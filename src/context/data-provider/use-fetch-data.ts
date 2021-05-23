import { useEffect, useState } from 'react';

import { apiData } from './api-data';
import { IGeoData } from './types';
import { parseGeoData } from './utils';

const mockApiFetch = (): Promise<typeof apiData> =>
  new Promise((res) =>
    setTimeout(() => {
      res(apiData);
    }, 250),
  );

export const useFetchGeoData = () => {
  const [data, setData] = useState({} as IGeoData);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // This is mimicking a call to a restful endpoint call
    // If using GQL endpoint would alternatively use
    // graphql-codegen to auto generate apollo hooks
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: geoData, ...rest } = await mockApiFetch();
        const parsedGeoData = parseGeoData(geoData);
        setData({ ...rest, ...parsedGeoData });
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading };
};
