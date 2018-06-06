/**
 * BaseCollection
 */
import BaseModel from './Base.Model';
import { type DOC_ARRAY } from './flow.type';

export default class BaseCollection {
  position = 0;
  list = [];

  constructor(Model = BaseModel, docArray: DOC_ARRAY) {
    this.Model = Model;
    this.list = docArray.map(doc => new this.Model(doc));
  }
  // iterator接口
  [Symbol.iterator](): BaseCollection {
    return this;
  }
  // iterator接口
  next() {
    const model = this.list[this.position];
    const result = model ? { done: false, value: model } : { done: true };

    if (result.done) {
      this.position = 0;
    } else {
      this.position = this.position + 1;
    }

    return result;
  }

  map<U>(callback: (value: BaseModel, index: number) => U): Array<U> {
    return this.list.map(callback);
  }

  each(callback: (value: BaseModel, index: number) => void): void {
    this.list.forEach(callback);
  }

  // 将Collection转化为Array。递归所有Model.toObject()
  toArray(): DOC_ARRAY {
    return this.list.map(model => model.toObject());
  }

  // 与toArray()逻辑相同
  toJSON(): DOC_ARRAY {
    return this.toObject();
  }
}
