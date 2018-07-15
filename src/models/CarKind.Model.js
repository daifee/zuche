/**
 * @flow
 * CarKindModel 选车分组
 */
import BaseModel from './Base.Model';

export default class CarKindModel extends BaseModel {
  name: string;
  kind_code: string;
  intro: string;
  disable: boolean;

  set kind_code(value: string | number) {
    this.doc.kind_code = `${value}`;
  }

  get kind_code(): string {
    return this.doc.kind_code;
  }
}

