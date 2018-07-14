/**
 * @flow
 * CarShopModel 租车门店
 */
import BaseModel from './Base.Model';

export default class CarShopModel extends BaseModel {
  id: number;
  comment: string;
  comment_tag: [];
  dealer_id: number;
  dealer_type: number;
  logo: string;
  score: number;
  shopAddress: string;
  shopAddressDropoff: string;
  supplier_service: [];
  survey: string;
}

