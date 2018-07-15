/**
 * CarMealCollection
 */
import BaseCollection from './Base.Collection';
import CarMealModel from './CarMeal.Model';
import { type DOC_ARRAY } from './flow.type';


export default class CarMealCollection extends BaseCollection {
  constructor(docArray: DOC_ARRAY) {
    super(CarMealModel, docArray);
  }
}
