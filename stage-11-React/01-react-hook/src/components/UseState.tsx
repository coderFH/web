import { useState } from 'react';
import { flushSync } from 'react-dom';

export default function CounterHook() {
  const [count, setCounter] = useState(0);
  const [user, setUser] = useState({
    name: 'lilei',
    age: 18,
  });
  const [list, setList] = useState([1, 2, 3]);

  function handleCount() {
    // setCounter(count + 1);
    // setCounter(count + 1);
    // setCounter(count + 1);

    // 在react18之后，setState是异步的，不会立即更新state,尽管放到了setTimeout中,但是会被合并批量更新
    setTimeout(() => {
      setCounter(count + 1);
      setCounter(count + 1);
      setCounter(count + 1);
    });

    // 解决方法：
    // setCounter((prev)=> prev + 1);
    // setCounter((prev)=> prev + 1);
    // setCounter((prev)=> prev + 1);

    // 如果想强制更新，可以使用flusSync方法, 内部还是批量更新,会合并
    flushSync(() => {
      setCounter(count + 1);
      setCounter(count + 1);
    })
  }

  console.log('render');
  
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCounter(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(count - 1);
        }}
      >
        -
      </button>
      <div>
        <span>{user.name}</span>
        <span>{user.age}</span>
        <button
          onClick={() => {
            setUser({
              ...user,
              name: 'hanmeimei',
            });
          }}
        >
          change
        </button>
      </div>

      <p>
        {list.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
        <button
          onClick={() => {
            setList([...list, 4]);
          }}
        >
          add
        </button>
      </p>

      <button onClick={handleCount}>修改count</button>
    </div>
  );
}
