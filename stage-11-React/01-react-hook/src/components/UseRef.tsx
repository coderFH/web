import React from 'react';

export default function UseRef() {
  const titleRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const showTitleDom = () => {
    console.log(titleRef.current);
  };

  const showInputDom = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <h2 ref={titleRef}>hello world</h2>
      <button onClick={showTitleDom}>查看title的dom</button>
      <input ref={inputRef} type="text" />
      <button onClick={showInputDom}>聚焦</button>
    </div>
  );
}