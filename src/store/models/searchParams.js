import SearchParamsModel from '../../models/SearchParams.Model';
import CityModel from '../../models/City.Model';
import * as globalStore from '../index';


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


export default {
  state: initState,

  reducers: {
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
    },

    setCid(state, cid: string) {
      const newState = state.clone();
      newState.cid = cid;
      newState.asyncStatus = 'SUCCESS';
      newState.asyncMessage = '请求成功';
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
  },

  effects: {
    getCid() {
      const { searchParams } = globalStore.getState();
      this.setLoading();

      return SearchParamsModel.getCid(searchParams)
        .then((cid) => {
          this.setCid(cid);
          return cid;
        })
        .catch((err) => {
          this.setFailure(err.message);
          throw err;
        });
    }
  }
};
