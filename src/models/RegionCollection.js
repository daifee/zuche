/**
 * RegionCollection 地区集合
 */
import ModelCollection from './ModelCollection';
import Region from './Region';
import { type DOC_ARRAY } from './flow.type';


export default class RegionCollection extends ModelCollection {
  constructor(docArr: DOC_ARRAY) {
    super(Region, docArr);
  }
}
