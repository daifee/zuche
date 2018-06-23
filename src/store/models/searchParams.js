import SearchParams from '../../models/SearchParams.Model';

const pickupDate = new Date();
pickupDate.setDate(pickupDate.getDate() + 1);
const dropoffDate = new Date();
dropoffDate.setDate(dropoffDate.getDate() + 7);

export const searchParams = {
  state: new SearchParams({
    pickupDate: pickupDate,
    dropoffDate: dropoffDate
  }),

  reducers: {
    setPickupDate(state, date) {
      return new SearchParams({
        pickupDate: date,
        dropoffDate: state.dropoffDate
      });
    },
    setDropoffDate(state, date) {
      console.log(date);
    }
  }
};
