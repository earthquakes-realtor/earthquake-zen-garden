import React, { FC, createContext, useContext } from 'react';

import { ISiteData } from './types';
import { useFetchGeoData } from './use-fetch-data';

const DataContext = createContext({} as ISiteData);

export const useDataContext = () => useContext(DataContext);

const DataProvider: FC = ({ children }) => {
  const { data, loading } = useFetchGeoData();

  return <DataContext.Provider value={{ ...data, loading }}>{children}</DataContext.Provider>;
};

export default DataProvider;
