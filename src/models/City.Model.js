/**
 * @flow
 * CityModel
 */
import BaseModel from './Base.Model';

export default class CityModel extends BaseModel {
  id: string;
  cnName: string;
  enName: ?string;
  letter: ?string;
  lat: ?number;
  lng: ?number;
  timezone: ?number
}

