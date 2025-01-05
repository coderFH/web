import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react';

const HelloWorld = memo(
  forwardRef((props, ref) => {
    // 子组件对父组件传入的ref进行处理
    useImperativeHandle(ref, () => ({
      focus: () => {
        console.log('子组件调用了父组件传入的ref');
      },
    }));
    return <input type="text" ref={ref} />;
  })
);

export default function UseImperativeHandle() {
  const inputRef = useRef();

  function handleDom() {
    console.log(inputRef.current);
    inputRef.current?.focus();
  }

  return (
    <div>
      <h2>我是title</h2>
      <HelloWorld ref={inputRef} />
      <button onClick={handleDom}>获取dom</button>
    </div>
  );
}
