/**
 * 基类
 */
import BaseCollection from './Base.Collection';
import { type DOC } from './flow.type';

export default class BaseModel {
  constructor(doc: DOC = {}) {
    Object.keys(doc).forEach((key) => {
      this[key] = doc[key];
    });
  }

  toObject(): DOC {
    const result = {};
    Object.keys(this).forEach((key) => {
      let val = this[key];

      if (val instanceof BaseModel || val instanceof BaseCollection) {
        val = val.toObject();
      }

      result[key] = val;
    });

    return result;
  }

  toJSON(): DOC {
    return this.toObject();
  }
}
