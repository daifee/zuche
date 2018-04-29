/**
 * @flow
 * CityGroupCollection 城市组集合
 */

import ModelCollection from './ModelCollection';
import CityGroup from './CityGroup';
import { type DOC_ARRAY } from './flow.type';

export default class CityCollection extends ModelCollection {
  constructor(docArr: DOC_ARRAY) {
    super(CityGroup, docArr);
  }
}

