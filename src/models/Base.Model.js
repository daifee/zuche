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

  // 将Model转化为{}。递归所有Model.toObject()和Collection.toArray()
  toObject(): DOC {
    const result = {};
    Object.keys(this).forEach((key) => {
      let val = this[key];

      if (val instanceof BaseModel) {
        val = val.toObject();
      } else if (val instanceof BaseCollection) {
        val = val.toArray();
      }

      result[key] = val;
    });

    return result;
  }

  // 与toArray()逻辑相同
  toJSON(): DOC {
    return this.toObject();
  }
}