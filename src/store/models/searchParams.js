import SearchParamsModel from '../../models/SearchParams.Model';
import CityModel from '../../models/City.Model';


const pickupDate = new Date();
pickupDate.setDate(pickupDate.getDate() + 1);
const dropoffDate = new Date();
dropoffDate.setDate(dropoffDate.getDate() + 7);

const pickupCity = new CityModel({
  id: '3359',
  cnName: '洛杉矶',
  enName: 'Los Angeles',
  region: {
    id: '10158',
    cnName: 'United States',
    enName: '美国'
  },
  landmark: {
    id: '99277',
    cnName: '洛杉矶国际机场',
    enName: 'Los Angeles Airport'
  }
});

const initState = new SearchParamsModel({
  pickupDate: pickupDate,
  dropoffDate: dropoffDate,
  pickupCity: pickupCity,
  pickupLandmark: pickupCity.landmark
});
initState.sameCity = true;


export const searchParams = {
  state: initState,

  reducers: {
    setCid(state, cid: string) {
      const newState = state.clone();
      newState.cid = cid;
      return newState;
    },
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
      newState.dropoffCity = city;
      newState.dropoffLandmark = city.landmark;
      return newState;
    },
    setSameCity(state, val: boolean) {
      const newState = state.clone();
      newState.sameCity = val;
      return newState;
    }
  }
};
