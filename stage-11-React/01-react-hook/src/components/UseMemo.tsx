import { memo, useMemo, useState } from 'react';

// function calcNumTotal(num: number) {
//   console.log('calcNumTotal的计算过程被调用!');
//   let total = 0;
//   for (let i = 0; i < num; i++) {
//     total += i;
//   }
//   return total;
// }

const Child = memo(function (props) {
  console.log('child render');
  return (
    <>
      <div>child</div>
    </>
  );
});

export default function UseMemo() {
  const [count, setCount] = useState(0);

  // const result = useMemo(() => {
  //   return calcNumTotal(50);
  // }, []);

  // const result = useMemo(() => {
  //   return calcNumTotal(count * 2);
  // }, [count]);

  // useMemo是对函数的返回值进行优化,而useCallback是对函数本身进行优化,这是最主要的区别
  // const increment = useCallback(fn, [])
  // const increment2 = useMemo(() => finally, [])

  // 使用useMemo对子组件的渲染进行优化
  // const info = {
  //   name: '张三',
  //   age: 18,
  // };

  const info = useMemo(() => ({
    name: '张三',
    age: 18,
  }), []);

  console.log('parent render');
  return (
    <div>
      <div>{count}</div>
      {/* <h2>计算结果:{result}</h2> */}
      <button onClick={() => setCount(count + 1)}>+</button>

      <Child info={info}> /</Child>
    </div>
  );
}

