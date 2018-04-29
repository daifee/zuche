/**
 * @flow
 * CityGroup 城市组
 */
import Model from './Model';
import CityCollection from './CityCollection';

export default class CityGroup extends Model {
  title: string;
  list: CityCollection;
}

