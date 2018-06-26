
import CityCollection from '../../../models/City.Collection';
import StructCollection from '../../../models/Struct.Collection';
import { dispatch } from './apis';


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
      dispatch({ type: 'categorizedCities/setLoading' });

      return CityCollection.getCategorizedCities()
        .then((categorizedCities) => {
          const category = categorizedCities.at(0);
          if (category) {
            dispatch({
              type: 'selectedCategoryId/set',
              payload: category.id
            });
          }

          dispatch({
            type: 'categorizedCities/set',
            payload: categorizedCities
          });
        })
        .catch((err) => {
          dispatch({
            type: 'categorizedCities/setLoading',
            payload: err.message
          });

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
