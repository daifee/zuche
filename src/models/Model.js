/**
 * 基类
 */
import ModelCollection from './ModelCollection';

export default class Model {
  constructor(doc: {[key: string]: any} = {}) {
    Object.keys(doc).forEach((key) => {
      this[key] = doc[key];
    });
  }

  toJSON(): {[key: string]: any} {
    const result = {};
    Object.keys(this).forEach((key) => {
      let val = this[key];

      if (val instanceof Model || val instanceof ModelCollection) {
        val = val.toJSON();
      }
      result[key] = val;
    });

    return result;
  }
}
