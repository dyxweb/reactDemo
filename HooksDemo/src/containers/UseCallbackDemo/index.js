import React, { useState, useCallback } from 'react';
import DemoOne from './demoOne';

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  const clickCount= () => {
    setCount(count + 1);
  };

  const clickCount1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  return (
    <div>
      <div>count: {count}, count1: {count1}</div>
      <DemoOne clickCount={clickCount}>普通函数形式</DemoOne>
      <DemoOne clickCount={clickCount1}>useCallback函数形式</DemoOne>
    </div>
  );
}

export default UseMemoDemo;