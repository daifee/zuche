# ZUCHE

zuzuche.com 客户端（React Native）

---

## APIs

- 登录
- 获取所有城市（关联：地标、国家/地区、大洲）
- 根据取/还车城市&日期创建`cid`
- 根据`cid`查询车
- 获取车详情

## components

共用的 UI 组件

## models

数据模型

### 数据模型有什么用？

- 定义了数据对象的结构
- 定义了数据对象每个属性值的类型
- 表达了数据关系
- 内聚了业务逻辑操作
  -  操作数据对象：
    - 读取属性值
    - 读取格式化的属性值（根据 UI 格式化）
    - 设置属性值
    - 删除属性值
    - 向数组属性添加其他值
    - 验证数据
    - ...
  - 与数据源同步：
    - http get
    - http post
    - http patch
    - http delete

### 哪些数据需要抽象成`Model`？

最简单做法，数据库中每个“表”都对应定义一个`Model`。

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

- 模型的属性名尽量与数据表的字段名相同，属性数据类型必须与数据表对应
- 每个`Model`都必须继承`BaseModel`
- 大部分`Model`有对应的`Collection`
- 每个`Collection`都必须继承`BaseCollection`
- `BaseCollection`必须实现迭代器
