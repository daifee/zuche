/**
 * @flow
 * CarModel 车
 */
import BaseModel from './Base.Model';
import { zuzuche } from '../utils/http';

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

  static search(
    cid: string,
    filter: {[filterType: string]: string},
    kind: number | string = 'all'
  ) {
    return zuzuche.get('/w/book/api/list_json.php', {
      params: {
        id: cid,
        group: kind,
        screenData: '',
        version: 2,
        sort: 0
      }
    });
  }
}

