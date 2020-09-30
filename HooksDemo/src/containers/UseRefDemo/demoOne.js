/**
 * ref绑定元素的使用
 */
import React, { useRef } from 'react';

const DemoOne = () => {
  const refEle = useRef();

  const clickToFocus = () => {
    refEle && refEle.current && refEle.current.focus();
  }

  return (
    <div>
      <input ref={refEle} type="text" />
      <button onClick={clickToFocus}>click</button>
    </div>
  );
}

export default DemoOne;