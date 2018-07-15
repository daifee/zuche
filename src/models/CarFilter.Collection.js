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

  formatToQuery() {
    const map = {};
    this.each((item) => {
      if (!map[item.identify]) {
        map[item.identify] = [];
      }

      if (map[item.identify].indexOf(item.value) === -1) {
        map[item.identify].push(item.value);
      }
    });

    const result = [];
    Object.keys(map).forEach((key) => {
      const value = map[key].join(',');
      result.push(`${key}=${value}`);
    });

    return result.join('&');
  }
}
