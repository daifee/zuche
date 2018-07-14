/**
 * @flow
 * CarKindModel 选车分组
 */
import BaseModel from './Base.Model';

export default class CarKindModel extends BaseModel {
  name: string;
  kind_code: number;
  intro: string;
  disable: boolean;
}

