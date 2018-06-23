
import BaseModel from './Base.Model';
import CityModel from './City.Model';
import LandmarkModel from './Landmark.Model';

// from_date_0: 2018-07-03
// from_date_1: 10:00
// to_date_0: 2018-07-10
// to_date_1: 10:00
// pickup_city: 3359
// dropoff_city: 3359
// pickup_landmark: 99277
// dropoff_landmark: 99277

export default class SearchParams extends BaseModel {
  pickupDate: Date;
  dropoffDate: Date;
  pickupCity: CityModel;
  pickupLandmark: LandmarkModel;
  dropoffCity: CityModel;
  dropoffLandmark: LandmarkModel;
}

