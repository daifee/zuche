/**
 * @flow
 * CarModel 车
 */
import BaseModel from './Base.Model';
import { zuzuche } from '../utils/http';
import StructModel from './Struct.Model';
import CarKindCollection from './CarKind.Collection';
import CarFilterCollection from './CarFilter.Collection';
import CarCollection from './Car.Collection';
import CarShopCollection from './CarShop.Collection';


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
    }).then((res) => {
      const body = res.data;

      if (!body || body.code) {
        throw new Error(`API Error: ${body.msg}`);
      }

      const data = body.data || {};

      let carList = data.list || [];

      const group = data.group || {};
      const kindList = group.data || [];

      const filter = data.filter || {};
      const filterList = filter.min || [];

      const result = new StructModel({});
      result.carKindList = new CarKindCollection(kindList);
      result.carFilterList = new CarFilterCollection(filterList);

      carList = carList.map((car) => {
        return {
          ...car,
          shopList: new CarShopCollection(car.meal_list || []),
          meal_list: undefined
        };
      });
      result.carList = new CarCollection(carList);

      return result;
    });
  }
}

