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
}

