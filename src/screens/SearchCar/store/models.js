

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
    get(payload: {
      cid: string,
      filter: {[filterType: string]: string},
      kind: number | string
    } = {}) {
      let times = 0;
      const pollGet = () => {
        times += 1;
        return CarModel.search(payload.cid, payload.filter, payload.kind)
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

      // return CarModel.search(payload.cid, payload.filter, payload.kind)
      //   .then((struct) => {
      //     scopeStore.dispatch('filterList/set', struct.carFilterList);
      //     scopeStore.dispatch('kindList/set', struct.carKindList);
      //     this.set(struct.carList);
      //   })
      //   .catch((err) => {
      //     this.setFailure(err.message);
      //     throw err;
      //   });
    }
  }
};
