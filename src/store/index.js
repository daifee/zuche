/**
 * store redux/rematch 多store方案
 * * 以页面为范围（scope），每个页面定义独立的store。
 * * 使用`./scope.js`模块为“每个页面的store模块”创建以下接口：
 *   * `scopeModels`
 *   * `dispatch(action)`
 *   * `getState()`
 * * 将所有页面的`scopeModels`合并为一个`models`，创建一个`store`对象。
 * * 因为每个页面都有独立的`dispatch(action)`, `getState()`接口，
 * * 所以结果是用一个store模拟出多store的假象。
 * *
 * * 像多store那样解决了命名冲突，使用却与单store一样简单。
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
