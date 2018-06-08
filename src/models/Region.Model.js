/**
 * Region 地区
 */
import BaseModel from './Base.Model';

export type REGION_ID = string;

export default class RegionModel extends BaseModel {
  id: REGION_ID;
  cnName: string;
  enName: ?string;
  lat: ?number;
  lng: ?number;
}
