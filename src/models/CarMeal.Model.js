/**
 * 租车套餐
 */
import BaseModel from './Base.Model';


export default class CarMealModel extends BaseModel {
  book: string; // 下单URL
  can_up_easy: number;
  condition: string;
  coupon: [];
  deal_id: number;
  discounts: boolean;
  dropoff_shop: number;
  easy: boolean;
  feature: [];
  fixed: boolean;
  gift: [];
  important_device: any;
  isBarGain: boolean;
  lang_currency: string;
  luxury: boolean;
  no: string;
  notes: [];
  pickup_shop: number;
  promote_tip: string;
  self_well: boolean;
  seq: number;
  supplier_policy: string;
  unit_price: number;
  upper_class: boolean;
}
