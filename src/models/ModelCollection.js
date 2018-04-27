/**
 * Model的集合
 */
import Model from './Model';

export default class ModelCollection {
  constructor(arr: Array<?Model>) {
    this.list = arr;
  }

  toJSON(): Array<?{[key: string]: any}> {
    const result = this.list.map(model => model.toJSON());

    return result;
  }
}
