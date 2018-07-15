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
import CarMealCollection from './CarMeal.Collection';
import CarShopModel from './CarShop.Model';


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

      const mapShop = data.shop || {};

      const resultModel = new StructModel({});
      resultModel.complete = data.info.complete;
      resultModel.carKindList = new CarKindCollection(kindList);
      resultModel.carFilterList = new CarFilterCollection(filterList);

      carList = carList.map((car) => {
        const mealList = (car.meal_list || []).map((meal) => {
          let pickupShop = mapShop[meal.pickup_shop];
          pickupShop = pickupShop ? new CarShopModel(pickupShop) : null;
          let dropoffShop = mapShop[meal.dropoff_shop];
          dropoffShop = dropoffShop ? new CarShopModel(dropoffShop) : null;

          return {
            ...meal,
            pickupShop,
            dropoffShop
          };
        });

        return {
          ...car,
          meal_list: new CarMealCollection(mealList)
        };
      });
      resultModel.carList = new CarCollection(carList);

      return resultModel;
    });
  }
}

