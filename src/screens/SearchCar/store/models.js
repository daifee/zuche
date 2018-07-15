

import CarFilterCollection from '../../../models/CarFilter.Collection';
import CarKindCollection from '../../../models/CarKind.Collection';
import CarCollection from '../../../models/Car.Collection';
import CarModel from '../../../models/Car.Model';
import * as scopeStore from './index';
import * as globalStore from '../../../store';
import CarFilterModel from '../../../models/CarFilter.Model';


export const filterList = {
  state: new CarFilterCollection([]),
  reducers: {
    set(state, payload: CarFilterCollection) {
      return payload;
    }
  }
};

export const checkedFilter = {
  state: new CarFilterCollection([]),
  reducers: {
    add(state, carFilter: CarFilterModel) {
      if (state.has(carFilter)) {
        return state;
      }

      const newState = state.clone();
      newState.add(carFilter);
      return newState;
    },
    remove(state, carFilter: CarFilterModel) {
      if (!state.has(carFilter)) {
        return state;
      }
      const newState = state.clone();
      newState.remove(carFilter);
      return newState;
    },
    clear() {
      return new CarFilterCollection([]);
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
    set(state, payload: string) {
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
    get(payload, rootState) {
      const { searchParams } = globalStore.getState(rootState);
      const { checkedFilter, checkedKind } = scopeStore.getState(rootState);

      let times = 0;

      const pollGet = () => {
        times += 1;
        return CarModel.search(searchParams.cid, checkedFilter.formatToQuery(), checkedKind)
          .then((struct) => {
            const {
              carFilterList, carKindList, carList, complete
            } = struct;
            const finish = times >= 3 || complete;
            // const finish = true;

            scopeStore.dispatch('filterList/set', carFilterList);
            scopeStore.dispatch('kindList/set', carKindList);

            if (!finish) {
              carList.asyncStatus = 'PENDING';
            }

            this.set(carList);

            if (finish) {
              return struct;
            }
            return pollGet();
          });
      };


      this.setLoading();

      return pollGet()
        .catch((err) => {
          this.setFailure(err.message);
          throw err;
        });
    }
  }
};
