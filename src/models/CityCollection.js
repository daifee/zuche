/**
 * @flow
 * CityCollection 城市计划
 */
import ModelCollection from './ModelCollection';
import City from './City';
import { type DOC_ARRAY } from './flow.type';

export default class CityCollection extends ModelCollection {
  constructor(docArr: DOC_ARRAY) {
    super(City, docArr);
  }
}

