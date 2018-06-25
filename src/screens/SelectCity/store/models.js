
import CityCollection from '../../../models/City.Collection';
import StructCollection from '../../../models/Struct.Collection';
import { dispatch } from './apis';

export const categorizeCities = {
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
      dispatch({ type: 'categorizeCities/setLoading' });

      return CityCollection.getCategorizedCities()
        .then((categorizeCities) => {
          dispatch({
            type: 'categorizeCities/set',
            payload: categorizeCities
          });
        })
        .catch((err) => {
          dispatch({
            type: 'categorizeCities/setLoading',
            payload: err.message
          });

          throw err;
        });
    }
  }
};
