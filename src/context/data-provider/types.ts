import { ApiData } from './api-data';
import { EarthquakeMap, Earthquakes, parseGeoData } from './utils';

export interface IGeoData {
  earthquakes: Earthquakes;
  earthquakeMap: EarthquakeMap;
  geoEventTitle: ReturnType<typeof parseGeoData>['geoEventTitle'];
  profile: ApiData['profile'];
  site: ApiData['site'];
}

export interface ISiteData extends IGeoData {
  loading: boolean;
}
