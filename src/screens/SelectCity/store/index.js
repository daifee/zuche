import * as models from './models';
import createScopeModels from '../../../store/createScopeModels';
import createScopeDispatch from '../../../store/createScopeDispatch';
import createScopeGetState from '../../../store/createScopeGetState';


const SCOPE = 'SELECT_CITY';

const scopeModels = createScopeModels(models, SCOPE);
const dispatch = createScopeDispatch(SCOPE);
const getState = createScopeGetState(SCOPE);


export {
  scopeModels,
  dispatch,
  getState
};
