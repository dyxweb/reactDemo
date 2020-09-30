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
      <hr />
      <button onClick={() => setShowDemo('one')}>demoOne</button>
      <button onClick={() => setShowDemo('two')}>demoTwo</button>
      <button onClick={() => setShowDemo('three')}>demoThree</button>
      <button onClick={() => setShowDemo('four')}>demoFour</button>
      <button onClick={() => setShowDemo('five')}>demoFive</button>
    </div>
  );
}

export default UseEffectDemo;