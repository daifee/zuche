
// import { dispatch } from '@rematch/core';
import store from './store';
import { createScopeModelName } from './createScopeModels';
import { type ACTION } from './flow.type';

// const { dispatch } = store;

function createScopeDispatch(scope: string): (action: ACTION | string, payload?: any) => any {
  return function scopeDispatch(action: ACTION | string, payload?: any) {
    let actionObj;
    if (typeof action === 'string') {
      actionObj = { type: action, payload: payload };
    } else {
      actionObj = action;
    }

    const newAction = {
      type: createScopeModelName(actionObj.type, scope),
      payload: actionObj.payload
    };
    return store.dispatch(newAction);
  };
}

export default createScopeDispatch;
