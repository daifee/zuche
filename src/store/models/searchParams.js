import SearchParamsModel from '../../models/SearchParams.Model';

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
    setPickupDate(state, date) {
      const newState = state.clone();
      newState.pickupDate = date;
      return newState;
    },
    setDropoffDate(state, date) {
      const newState = state.clone();
      newState.dropoffDate = date;
      return newState;
    }
  }
};
