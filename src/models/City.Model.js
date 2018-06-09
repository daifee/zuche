/**
 * @flow
 * CityModel
 */
import BaseModel from './Base.Model';
import { type REGION_ID } from './Region.Model';
import { type LANDMARK_ID } from './Landmark.Model';
import { type CONTINENT_ID } from './Continent.Model';

export type CITY_ID = string;

export default class CityModel extends BaseModel {
  id: string;
  cnName: string;
  enName: string;

  continentId: CONTINENT_ID;
  regionId: REGION_ID;
  landmarkId: LANDMARK_ID;
}

