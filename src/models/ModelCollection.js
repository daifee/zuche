/**
 * Model的集合
 */
import Model from './Model';
import { type DOC_ARRAY } from './flow.type';

export default class ModelCollection {
  constructor(M = Model, docArr: DOC_ARRAY) {
    this.Model = M;
    this.list = docArr.map(doc => new M(doc));
  }

  toJSON(): DOC_ARRAY {
    const result = this.list.map(model => model.toJSON());

    return result;
  }

  toArray(): Array<?Model> {
    return this.list.map(model => model);
  }
}
