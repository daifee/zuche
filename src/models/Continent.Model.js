/**
 * ContinentModel 大洲
 */

import BaseModel from './Base.Model';

export type CONTINENT_ID = string;

export default class ContinentModel extends BaseModel {
  id: CONTINENT_ID;
  cnName: string;
  enName: ?string;
}
