//初体验
function getInfo<T>(info: T): T {
  return info;
}

console.log(getInfo(10));
console.log(getInfo('abc'));
console.log(getInfo(true));
console.log(getInfo(null));

interface User {
  id: number;
  name: string;
  age: number;
}

// Pick 选取
type AgeType = Pick<User, 'age'>;


// Omit 剔除
type UserOmit = Omit<User, 'id'>;

const tmp: UserOmit = {
  name: '张三',
  age: 18,
};

export {};
