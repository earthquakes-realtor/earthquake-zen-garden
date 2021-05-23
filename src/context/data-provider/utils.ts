import { ApiData } from './api-data';

type EarthquakeData = {
  id: string;
  mag: number;
  status: string;
  time: number;
  title: string;
  tsunami: number;
  type: string;
};

export type Earthquakes = EarthquakeData[];
export type EarthquakeMap = Record<EarthquakeData['id'], EarthquakeData>;

interface IReduceFeatures {
  earthquakes: Earthquakes;
  earthquakeMap: EarthquakeMap;
}

export const parseGeoData = (data: ApiData['data']) => {
  // Creating a map indexed by ID for O(1) lookup when on earthquake details view
  const { earthquakes, earthquakeMap } = data.features.reduce(
    (acc: IReduceFeatures, { properties, id }) => {
      const earthquakeData = {
        id,
        mag: properties.mag,
        status: properties.status,
        time: properties.time,
        title: properties.title,
        tsunami: properties.tsunami,
        type: properties.type,
      };
      acc.earthquakeMap[id] = earthquakeData;
      acc.earthquakes.push(earthquakeData);
      return acc;
    },
    { earthquakeMap: {}, earthquakes: [] },
  );

  const { title } = data.metadata;

  return { geoEventTitle: title, earthquakes, earthquakeMap };
};
