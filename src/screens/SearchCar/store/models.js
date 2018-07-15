

import CarFilterCollection from '../../../models/CarFilter.Collection';
import CarKindCollection from '../../../models/CarKind.Collection';
import CarCollection from '../../../models/Car.Collection';
import CarModel from '../../../models/Car.Model';
import * as scopeStore from './index';


export const filterList = {
  state: new CarFilterCollection([]),
  reducers: {
    set(state, payload: CarFilterCollection) {
      return payload;
    }
  }
};

export const checkedFilter = {
  state: [],
  reducers: {
    add(state, payload: string) {
      const newState = [...state, payload];
      return newState;
    },
    remove(state, payload: string) {
      const newState = state.filter((item) => {
        return item !== payload;
      });
      return newState;
    },
    clear() {
      return [];
    }
  }
};

export const kindList = {
  state: new CarKindCollection([]),
  reducers: {
    set(state, payload: CarKindCollection) {
      return payload;
    }
  }
};

export const checkedKind = {
  state: 'all',
  reducers: {
    set(state, payload: number | string) {
      return payload;
    }
  }
};

export const carList = {
  state: new CarCollection([]),

  reducers: {
    set(state, payload: CarCollection) {
      return payload;
    },
    setLoading(state) {
      const newState = state.clone();
      newState.asyncStatus = 'PENDING';
      return newState;
    },
    setFailure(state, message: string) {
      const newState = state.clone();
      newState.asyncStatus = 'FAILURE';
      newState.asyncMessage = message;
      return newState;
    }
  },

  effects: {
    get(payload: {
      cid: string,
      filter: {[filterType: string]: string},
      kind: number | string
    } = {}) {
      this.setLoading();

      return CarModel.search(payload.cid, payload.filter, payload.kind)
        .then((struct) => {
          scopeStore.dispatch('filterList/set', struct.carFilterList);
          scopeStore.dispatch('kindList/set', struct.carKindList);
          this.set(struct.carList);
        })
        .catch((err) => {
          this.setFailure(err.message);
          throw err;
        });
    }
  }
};
