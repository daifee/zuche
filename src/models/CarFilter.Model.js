/**
 * @flow
 * CarFilterModel 选车过滤器
 */
import BaseModel from './Base.Model';

export default class CarFilterModel extends BaseModel {
  name: string;
  value: string;
  disable: boolean;
  identity: string; // seat, terminal, payment, feature, dealer

  get id() {
    return this.type + this.value;
  }

  set value(value: string | number) {
    this.doc.value = `${value}`;
  }

  get value(): string {
    return this.doc.value;
  }
}

