/**
 * StructCollection
 */
import BaseCollection from './Base.Collection';
import StructModel from './Struct.Model';
import { type DOC_ARRAY } from './flow.type';

export default class StructCollection extends BaseCollection {
  constructor(docArray: DOC_ARRAY) {
    super(StructModel, docArray);
  }
}
