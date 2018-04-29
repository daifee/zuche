/**
 * @flow
 * City 城市
 */
import Model from './Model';

export default class City extends Model {
  id: string;
  cnName: string;
  enName: ?string;
  letter: ?string;
  lat: ?number;
  lng: ?number;
  timezone: ?number
}

