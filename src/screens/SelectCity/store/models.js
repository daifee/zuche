
import CityCollection from '../../../models/City.Collection';
import StructCollection from '../../../models/Struct.Collection';
import * as selectCityStore from './index';


export const categorizedCities = {
  state: new StructCollection([]),

  reducers: {
    set(state, payload: StructCollection) {
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
    get() {
      this.setLoading();

      return CityCollection.getCategorizedCities()
        .then((categorizedCities) => {
          const category = categorizedCities.at(0);
          if (category) {
            selectCityStore.dispatch('selectedCategoryId/set', category.id);
          }

          this.set(categorizedCities);
        })
        .catch((err) => {
          this.setFailure(err.message);

          throw err;
        });
    }
  }
};


export const selectedCategoryId = {
  state: -1,
  reducers: {
    set(state, payload: number) {
      return payload;
    }
  }
};
