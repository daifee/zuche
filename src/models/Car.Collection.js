/**
 * CarCollection
 */
import BaseCollection from './Base.Collection';
import CarModel from './Car.Model';
import { type DOC_ARRAY } from './flow.type';


export default class CarCollection extends BaseCollection {
  constructor(docArray: DOC_ARRAY) {
    super(CarModel, docArray);
  }
}
