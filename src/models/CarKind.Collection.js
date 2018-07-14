/**
 * CarKindCollection
 */
import BaseCollection from './Base.Collection';
import CarKindModel from './CarKind.Model';
import { type DOC_ARRAY } from './flow.type';


export default class CarKindCollection extends BaseCollection {
  constructor(docArray: DOC_ARRAY) {
    super(CarKindModel, docArray);
  }
}
