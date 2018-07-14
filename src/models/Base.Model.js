/**
 * BaseModel
 */
import Base from './Base';
import BaseCollection from './Base.Collection';
import { type DOC } from './flow.type';

export default class BaseModel extends Base {
  constructor(doc: DOC = {}) {
    super();
    // 实现 getter, setter 属性的存放位置
    this.doc = {};

    Object.keys(doc).forEach((key) => {
      this[key] = doc[key];
    });
  }

  // 将Model转化为{}。递归所有Model.toObject()和Collection.toArray()
  toObject(): DOC {
    const result = {};
    // TODO 优化 doc 这个属性逻辑
    const map = {
      doc: true
    };
    let keys = Object.keys(this).concat(Object.keys(this.doc));
    keys = keys.filter((key) => {
      if (map[key]) {
        return false;
      }

      map[key] = true;
      return true;
    });

    keys.forEach((key) => {
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

  clone(): BaseModel {
    const doc = this.toObject();
    return new this.constructor(doc);
  }
}
