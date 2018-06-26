/**
 * @flow
 * CityCollection
 */
import BaseCollection from './Base.Collection';
import CityModel from './City.Model';
import { type DOC_ARRAY } from './flow.type';
import StructCollection from './Struct.Collection';

import categorizedCities from './mock-data/categorized-cities';

export default class CityCollection extends BaseCollection {
  constructor(docArray: DOC_ARRAY) {
    super(CityModel, docArray);
  }

  static getCategorizedCities(): Promise<StructCollection> {
    return new Promise((resolve) => {
      const categories = categorizedCities.map((item) => {
        const newItem = { ...item };
        if (newItem.hotCities) {
          newItem.hotCities = new CityCollection(newItem.hotCities);
        }

        if (newItem.allCities) {
          newItem.allCities = new CityCollection(newItem.allCities);
        }

        return newItem;
      });

      resolve(new StructCollection(categories));
    });
  }
}

