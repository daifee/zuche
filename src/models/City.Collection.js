/**
 * @flow
 * CityCollection
 */
import BaseCollection from './Base.Collection';
import CityModel from './City.Model';
import { type DOC_ARRAY } from './flow.type';

export default class CityCollection extends BaseCollection {
  constructor(docArray: DOC_ARRAY) {
    super(CityModel, docArray);
  }
}

