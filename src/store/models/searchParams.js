import SearchParamsModel from '../../models/SearchParams.Model';
import CityModel from '../../models/City.Model';


const pickupDate = new Date();
pickupDate.setDate(pickupDate.getDate() + 1);
const dropoffDate = new Date();
dropoffDate.setDate(dropoffDate.getDate() + 7);

export const searchParams = {
  state: new SearchParamsModel({
    pickupDate: pickupDate,
    dropoffDate: dropoffDate
  }),

  reducers: {
    setPickupDate(state, date: Date) {
      const newState = state.clone();
      newState.pickupDate = date;
      return newState;
    },

    setDropoffDate(state, date: Date) {
      const newState = state.clone();
      newState.dropoffDate = date;
      return newState;
    },

    setPickupCity(state, city: CityModel) {
      const newState = state.clone();
      newState.pickupCity = city;
      newState.pickupLandmark = city.landmark;
      return newState;
    },

    setDropoffCity(state, city: CityModel) {
      const newState = state.clone();
      newState.DropoffCity = city;
      newState.dropoffLandmark = city.landmark;
      return newState;
    }
  }
};
