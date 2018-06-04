/**
 * RegionCollection 地区集合
 */
import BaseCollection from './Base.Collection';
import RegionModel from './Region.Model';
import { type DOC_ARRAY } from './flow.type';


export default class RegionCollection extends BaseCollection {
  constructor(docArray: DOC_ARRAY) {
    super(RegionModel, docArray);
  }
}
