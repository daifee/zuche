/**
 * Region 地区
 */
import BaseModel from './Base.Model';

export type ID = string;

export default class RegionModel extends BaseModel {
  id: string;
  cnName: string;
  enName: ?string;
  lat: ?number;
  lng: ?number;
}
