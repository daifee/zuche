# Model

数据模型

---

## User 用户

* id
* name
* email
* phone
* password

## Region 国家/地区

* id
* name_cn
* name_en
* lat
* lng

## City 城市

* id
* name_cn
* name_en
* lat
* lng

## Site 位置（标志性）

* id
* name_cn
* name_en
* lat
* lng

## Supplier 供应商

* id
* name_cn
* name_en

## Store 租车门店

* id
* name_cn
* name_en
* lat
* lng

## Car

* id
* supplier_id
* store_id
* services

## CarService 服务（Car 附加服务）

* id
* car_id
* name_cn
* name_en

## EasyParking(CarService) 机场取还车

* id
* car_id
* name_cn
* name_en

## DriverInstruct(CarService) 驾驶指导

* id
* car_id
* name_cn
* name_en

## Insurance(CarService) 保险

* id
* car_id
* name_cn
* name_en

## ChildSeat(CarService) 儿童座椅

* id
* car_id
* name_cn
* name_en

## Fastrak(CarService) 高速缴费盒

* id
* name_cn
* name_en

## Oil(CarService) 送一箱油

* id
* name_cn
* name_en

## Mileage(CarService) 里程限制

* id
* name_cn
* name_en

## Driver 驾驶员

* id
* name_cn
* name_en
* age
* gender

## Order 订单

* id
* user_id
* car_id

## SearchParams 搜车参数

* pickup_city
* pickup_site
* pickup_time
* dropoff_city
* dropoff_site
* dropoff_time
