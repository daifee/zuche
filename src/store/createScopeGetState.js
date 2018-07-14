
// import { getState } from '@rematch/core';
import store from './store';
import { extractModelName } from './createScopeModels';

function createScopeGetState(scope: string): Function {
  return function scopeGetState() {
    const state = store.getState() || {};

    const scopeState = {};
    Object.keys(state).forEach((key) => {
      const modelName = extractModelName(key, scope);
      if (modelName) {
        scopeState[modelName] = state[key];
      }
    });

    return scopeState;
  };
}

export default createScopeGetState;
