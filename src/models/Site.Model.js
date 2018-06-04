// @flow

import BaseModel from './Base.Model';

export default class SiteModel extends BaseModel {
  id:string;
  cnName: string;
  enName: ?string;
  lat: ?number;
  lng: ?number;
}

