# ZUCHE

zuzuche.com 客户端（React Native）

---

## components

共用的 UI 组件

## models

数据模型

### 数据模型有什么用？

* 定义了数据对象的结构
* 定义了数据对象每个属性值的类型
* 表达了数据关系
* 内聚了业务逻辑操作
  *  操作数据对象：
    * 读取属性值
    * 读取格式化的属性值（根据 UI 格式化）
    * 设置属性值
    * 删除属性值
    * 向数组属性添加其他值
    * 验证数据
    * ...
  * 与数据源同步：
    * http get
    * http post
    * http patch
    * http delete

### 哪些数据需要抽象成`Model`？

最简单做法，数据库中每个“表”都对应定义一个`Model`。

假如一个“付费阅读文章项目”有下列数据表：

* `User` 用户
* `Order` 订单
* `City` 城市
* `EditedCity` 编辑过的城市
* `Region` 国家/地区
* `Article` 文章
* `ArticleContent` 文章内容
* `ArticleLabel` 文章标签

然后根据“项目业务”思考，哪些表不需要单独查询（依赖其他表的数据查询），这种表不需要定义`Model`。结果：

* `User` 定义`UserModel`
* `Order` 定义`OrderModel`
* `City` 定义`CityModel`
* `Region` 定义`RegionModel`
* `Article` 定义`ArticleModel`
* `EditedCity` 不定义：总是依赖`City`表的数据查询，本表的数据都属于`CityModel`的“属性”
* `ArticleContent` 不定义：总是依赖`Article`表的数据查询，本表的数据都属于`Article`的“属性”
* `ArticleLabel` 定义`ArticleLabel`：需要查询“热门标签”

### 数据模型尽量扁平定义结构

推荐：

```js
// City模型
class City {
  id: number;
  lat: number;
  lng: number;
}
```

反对：

```js
// City模型
class City {
  id: number;
  location: {
    // 不建议
    lat: number,
    lng: number
  };
}
```

### 关联其它模型对象，应该用对应模型名称的属性引用

```js
// Region模型（City关联Region）
class Region {
  id: number;
  name: string;
  lat: number;
  lng: number;
}
```

推荐：

```js
// City
class City {
  id: number;
  region_id: number;
  region: Region;
}
```

反对

```js
// City
class City {
  id: number;
  region_id: number;
  region_name: string;
  region_lat: number;
  region_lng: number;
}
```

### 其他约定

* 模型的属性名尽量与数据表的字段名相同，属性数据类型必须与数据表对应
* 每个`Model`都必须继承`BaseModel`
* 大部分`Model`有对应的`Collection`
* 每个`Collection`都必须继承`BaseCollection`
* `BaseCollection`必须实现迭代器
