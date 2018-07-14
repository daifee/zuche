/**
 * @flow
 * CarModel 车
 */
import BaseModel from './Base.Model';

export default class CarModel extends BaseModel {
  book: string;
  car_name: string;
  car_door: number;
  car_image: string;
  description: string;
  feed: {
    type: string;
    content: string;
  };
  kind: string;
  kind_code: number;
  fixed: boolean; // 是否指定车型
  reference: string; // 参考车型文案
}

