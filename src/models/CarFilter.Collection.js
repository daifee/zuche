/**
 * CarFilterCollection
 */
import BaseCollection from './Base.Collection';
import CarFilterModel from './CarFilter.Model';
import { type DOC_ARRAY } from './flow.type';


export default class CarFilterCollection extends BaseCollection {
  constructor(docArray: DOC_ARRAY) {
    super(CarFilterModel, docArray);
  }
}
