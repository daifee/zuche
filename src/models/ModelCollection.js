/**
 * Model的集合
 */
import Model from './Model';
import {
  type DOC_ARRAY,
  type COLLECTION_ITERATEE
} from './flow.type';

export default class ModelCollection {
  constructor(M = Model, docArr: DOC_ARRAY) {
    this.Model = M;
    this.list = docArr.map(doc => new M(doc));
  }

  map(callback: COLLECTION_ITERATEE): Array<any> {
    return this.list.map(callback);
  }

  each(callback: COLLECTION_ITERATEE): ModelCollection {
    this.list.forEach(callback);
    return this;
  }

  toJSON(): DOC_ARRAY {
    const result = this.list.map(model => model.toJSON());

    return result;
  }

  toArray(): Array<?Model> {
    return this.list.map(model => model);
  }
}
