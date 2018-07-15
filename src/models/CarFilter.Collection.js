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

  add(carFilter: CarFilterModel) {
    this.list.push(carFilter);
  }

  remove(carFilter: CarFilterModel) {
    this.list = this.list.filter((item) => {
      return item.id !== carFilter.id;
    });
  }

  has(carFilter: CarFilterModel) {
    let result = false;
    this.each((item) => {
      if (item.id === carFilter.id) {
        result = true;
      }
    });

    return result;
  }
}
