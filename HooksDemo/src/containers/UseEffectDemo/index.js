import React, { useState } from 'react';
import DemoOne from './demoOne';
import DemoTwo from './demoTwo';
import DemoThree from './demoThree';
import DemoFour from './demoFour';
import DemoFive from './demoFive';

const UseEffectDemo = (props) => {
  const [count1, setCount1] = useState(1);
  const [count, setCount] = useState(2);
  const [showDemo, setShowDemo] = useState('one');
  const COMS = {
    one: DemoOne,
    two: DemoTwo,
    three: DemoThree,
    four: DemoFour,
    five: DemoFive,
  };
  const MatchCom = COMS[showDemo];
  return (
    <div>
      <MatchCom {...props} count={count} count1={count1} />
      <hr />
      <button onClick={() => setCount1(count1 + 1)}>count1</button>
      <button onClick={() => setCount(count + 1)}>count</button>
      <span>count: {count}</span>
      <span>count1: {count1}</span>
      <hr />
      <button onClick={() => setShowDemo('one')}>第二个参数为空数组</button>
      <button onClick={() => setShowDemo('two')}>没有第二个参数</button>
      <button onClick={() => setShowDemo('three')}>return函数实现willUnmount</button>
      <button onClick={() => setShowDemo('four')}>监听props的改变</button>
      <button onClick={() => setShowDemo('five')}>监听内部的状态变化</button>
    </div>
  );
}

export default UseEffectDemo;