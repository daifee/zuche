import { dispatch, getState } from '@rematch/core';
import { type ACTION } from './flow.type';

function createScopeModelName(modelName: string, scope: string): string {
  return `${scope}@${modelName}`;
}

function extractModelName(modelName: string, scope: string): string | void {
  const snippets = modelName.split('@');
  return snippets[0] === scope ? snippets[1] : undefined;
}

export const storeName = '@scope';

export function createModels(models: {}, scope: string): {} {
  const scopeModels = {};
  Object.keys(models).forEach((modelName) => {
    const newKey = createScopeModelName(modelName, scope);
    scopeModels[newKey] = models[modelName];
  });

  return scopeModels;
}


export function createDispatch(scope: string): (action: ACTION) => any {
  return function scopeDispatch(action: ACTION) {
    const newAction = {
      type: createScopeModelName(action.type, scope),
      payload: action.payload
    };
    return dispatch(newAction);
  };
}

export function createGetState(scope: string): Function {
  return function scopeGetState() {
    const state = getState()[storeName] || {};
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
