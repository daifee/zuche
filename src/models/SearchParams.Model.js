
import BaseModel from './Base.Model';
import CityModel from './City.Model';
import LandmarkModel from './Landmark.Model';
import { type DOC } from './flow.type';

// from_date_0: 2018-07-03
// from_date_1: 10:00
// to_date_0: 2018-07-10
// to_date_1: 10:00
// pickup_city: 3359
// dropoff_city: 3359
// pickup_landmark: 99277
// dropoff_landmark: 99277

export default class SearchParamsModel extends BaseModel {
  pickupCity: ?CityModel;
  pickupLandmark: ?LandmarkModel;
  dropoffCity: ?CityModel;
  dropoffLandmark: ?LandmarkModel;

  constructor(doc: DOC) {
    super({});
    Object.keys(doc).forEach((key) => {
      const value = doc[key];
      switch (key) {
        case 'pickupCity':
          this[key] = new CityModel(value);
          break;
        case 'pickupLandmark':
          this[key] = new LandmarkModel(value);
          break;
        case 'dropoffCity':
          this[key] = new CityModel(value);
          break;
        case 'dropoffLandmark':
          this[key] = new LandmarkModel(value);
          break;
        default:
          this[key] = value;
      }
    });
  }

  get sameCity(): boolean {
    return this.doc.sameCity;
  }
  set sameCity(val: boolean) {
    this.doc.sameCity = val;

    if (val) {
      if (this.pickupCity) {
        this.dropoffCity = this.pickupCity.clone();
      }
      if (this.pickupLandmark) {
        this.dropoffLandmark = this.pickupLandmark.clone();
      }
    }
  }

  get pickupDate(): Date {
    return this.doc.pickupDate || new Date();
  }
  set pickupDate(date: Date) {
    this.doc.pickupDate = date;

    // 如果取车时间大于还车时间，重置还车时间
    if (!this.dropoffDate) return;

    if (this.pickupDate.getTime() > this.dropoffDate.getTime()) {
      const dropoffDate = new Date(date.getTime());
      dropoffDate.setDate(dropoffDate.getDate() + 6);
      this.dropoffDate = date;
    }
  }

  get dropoffDate(): Date {
    return this.doc.dropoffDate || new Date();
  }
  set dropoffDate(date: Date) {
    this.doc.dropoffDate = date;

    // 如果还车时间小于取车时间，重置取车时间
    if (!this.pickupDate) return;

    if (this.dropoffDate.getTime() < this.pickupDate.getTime()) {
      const pickupDate = new Date(date.getTime());
      this.pickupDate = pickupDate;
    }
  }

  get totalDays(): number {
    const { pickupDate, dropoffDate } = this;
    const timeOffset = dropoffDate.getTime() - pickupDate.getTime();
    const totalDays = timeOffset / 1000 / 60 / 60 / 24;
    return Math.ceil(totalDays);
  }


  static monthDate(date: Date): string {
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  }

  static week(date: Date): string {
    const mapDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return mapDays[date.getDay()];
  }

  static hoursMinutes(date: Date): string {
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  static getId() {
    // api https://m.zuzuche.com/w/book/list.php?pickup_city=3243&dropoff_city=3243&from_date_0=2018-7-19&from_date_1=10:00&to_date_0=2018-7-27&to_date_1=10:00&pickup_landmark=99123&dropoff_landmark=99123&
    // regex /\bid=(\d+)/
    // todo
  }
}

