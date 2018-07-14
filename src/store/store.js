
import { init } from '@rematch/core';
import { storeName, createModels } from './scope';
import { SCOPE } from './apis';
// 全局models
import * as models from './models';
// 页面models
import { models as homepageModels } from '../screens/HomePage/store';
import { models as selectCityModels } from '../screens/SelectCity/store';
import { models as searchCarModels } from '../screens/SearchCar/store';

const globalModels = createModels(models, SCOPE);

const store = init({
  name: storeName,
  models: {
    ...globalModels,
    ...homepageModels,
    ...selectCityModels,
    ...searchCarModels
  }
});

export default store;
