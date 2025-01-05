//1.定义一个接口
/*
好处:
1.对某些属性进行预定义
2.捕获错误
*/
interface Person {
  pName: string;
  pAge: number;
  pJob: string;
}

let person: Person = {
  pAge: 18,
  pJob: '上学',
  pName: '小明',
};

function printPerson(person: Person) {
  console.log(`我的名字加:${person.pName}`);
}
printPerson(person);

// 如果其他属性不知道,可以使用索引签名,用于定义对象可以拥有任意数量的额外属性
// key: string 表示属性名的类型是字符串
// any 表示属性值的类型是任意类型
interface Person1 {
  pName: string;
  pAge: number;
  [key: string]: number | string;
}
let person1: Person1 = {
  pAge: 18,
  pName: '小明',
  pJob: '上学',
  pSex: '男',
  // pFriends: ["小红","小花"]
};

export {};
