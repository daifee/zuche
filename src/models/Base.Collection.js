/**
 * BaseCollection
 */
import BaseModel from './Base.Model';
import { type DOC_ARRAY } from './flow.type';

export default class BaseCollection {
  index = 0;
  list = [];

  constructor(Model = BaseModel, docArray: DOC_ARRAY) {
    this.Model = Model;
    this.list = docArray.map(doc => new this.Model(doc));
  }

  [Symbol.iterator](): BaseCollection {
    return this;
  }

  next() {
    const model = this.list[this.index];
    const result = model ? { done: false, value: model } : { done: true };

    this.index = this.index + 1;

    return result;
  }

  map<U>(callback: (value: BaseModel, index: number) => U): Array<U> {
    return this.list.map(callback);
  }

  each(callback: (value: BaseModel, index: number) => void): void {
    this.list.forEach(callback);
  }

  toObject(): DOC_ARRAY {
    return this.list.map(model => model.toObject());
  }

  toJSON(): DOC_ARRAY {
    return this.toObject();
  }
}
