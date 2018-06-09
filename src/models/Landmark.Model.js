/**
 * LandmarkModel 地标
 */

import BaseModel from './Base.Model';

export type LANDMARK_ID = string;

export default class LandmarkModel extends BaseModel {
  id: LANDMARK_ID;
  cnName: string;
  enName: ?string;
  lat: ?number;
  lng: ?number;
}

