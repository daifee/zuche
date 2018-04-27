/**
 * Region 地区
 */
import Model from './Model';

export default class Region extends Model {
  id: string;
  cnName: string;
  enName: ?string;
  lat: ?number;
  lng: ?number;
}
