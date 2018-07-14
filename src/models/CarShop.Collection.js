/**
 * CarShopCollection
 */
import BaseCollection from './Base.Collection';
import CarShopModel from './CarShop.Model';
import { type DOC_ARRAY } from './flow.type';


export default class CarShopCollection extends BaseCollection {
  constructor(docArray: DOC_ARRAY) {
    super(CarShopModel, docArray);
  }
}
