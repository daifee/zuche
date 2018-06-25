/**
 * @flow
 * CityModel
 */
import BaseModel from './Base.Model';
import RegionModel, { type REGION_ID } from './Region.Model';
import LandmarkModel, { type LANDMARK_ID } from './Landmark.Model';
import { type CONTINENT_ID } from './Continent.Model';
import { type DOC } from './flow.type';

export type CITY_ID = string;

export default class CityModel extends BaseModel {
  id: string;
  cnName: string;
  enName: string;

  continentId: CONTINENT_ID;
  regionId: REGION_ID;
  landmarkId: LANDMARK_ID;

  constructor(doc: DOC) {
    super({});
    Object.keys(doc).forEach((key) => {
      const value = doc[key];
      switch (key) {
        case 'region':
          this[key] = new RegionModel(value);
          break;
        case 'landmark':
          this[key] = new LandmarkModel(value);
          break;
        default:
          this[key] = value;
      }
    });
  }
}

