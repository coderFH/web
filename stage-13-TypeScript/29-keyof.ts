interface User {
  id: number;
  name: string;
  age: number;
}

// keyof User 生成了一个联合类型 "name" | "age" | "id"，表示 User 类型的所有属性名
type k1 = keyof User;

const tmp: k1 = 'id';
const tmp2: k1 = 'name';
const tmp3: k1 = 'age';
// const tmp4: k1 = 'sex'; //报错

const xiaoming = {
  id: 1,
  name: '小明',
  age: 18,
};

type k2 = typeof xiaoming;

type Keys = 'id' | 'name' | 'age';

type k3 = {
  [key in Keys]: any;
};
