import { memo, useCallback, useRef, useState } from 'react';

// useCallback性能优化的点:
// 1. 当需要将一个函数传递给子组件时,最好使用useCallback进行优化,将优化之后的函数,传递给子组件

const Child = memo(function (props) {
  const { increment } = props;
  console.log('child render');

  return (
    <>
      <button onClick={increment}>increment+1</button>
    </>
  );
});

export default function UseCallBack() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('hello world');

  /*
  useCallback的闭包陷阱,如果我传[], 在组件更新时,虽然不会创建新函数了,但由于最开始函数捕获的外界counter是0,会导致不能累加
  如果传入[count], 其实和直接写下面的函数,没有什么区别,那么为什么还要使用useCallback呢？
  function increment2() {
    console.log('increment2');
    setCount(count + 1);
  }
  */
  // const increment = useCallback(() => {
  //   console.log('increment');
  //   setCount(count + 1);
  // }, [count]);

  //如果我想当count改变时,也使用同一个函数,改咋处理呢? 使用useRef

  const countRef = useRef();
  countRef.current = count;

  const increment = useCallback(() => {
    console.log('increment');
    setCount(countRef.current + 1);
  }, []);

  console.log('parent render');
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>

      <Child increment={increment} />

      <h2>message: {message}</h2>
      <button onClick={() => setMessage('你好 世界')}>修改message</button>
    </div>
  );
}
