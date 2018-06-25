import * as originModels from './models';
import { createModels } from '../../../store/scope';

import { SCOPE, dispatch, getState } from './apis';

export const models = createModels(originModels, SCOPE);
export {
  dispatch,
  getState
};
