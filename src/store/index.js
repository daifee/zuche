/**
 * store redux/rematch
 * 多store方案：
 * * 以页面为范围（scope），每个页面定义独立的store。
 * * 使用`./scope.js`模块为“每个页面的store模块”创建以下接口：
 *   * `scopeModels`
 *   * `dispatch(action)`
 *   * `getState()`
 */
import { init } from '@rematch/core';
import { createModels, createDispatch, createGetState } from './scope';
import * as models from './models';
import { models as homepageModels } from '../screens/HomePage/store';

const SCOPE = 'GLOBAL';
const globalModels = createModels(models, SCOPE);

const store = init({
  models: {
    ...globalModels,
    ...homepageModels
  }
});

export default store;

export const dispatch = createDispatch(SCOPE);
export const getState = createGetState(SCOPE);
