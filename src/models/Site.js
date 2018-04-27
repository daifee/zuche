// @flow

import Model from './Model';

export default class Site extends Model {
  id:string;
  cnName: string;
  enName: ?string;
  lat: ?number;
  lng: ?number;
}

