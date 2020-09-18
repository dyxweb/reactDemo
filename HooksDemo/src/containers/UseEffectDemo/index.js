import React, { useState } from 'react';
import DemoOne from './demoOne';

const UseEffectDemo = (props) => {
  const [count1, setCount1] = useState(1);
  const [count, setCount] = useState(2);
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <DemoOne {...props} count={count} count1={count1} />}
      <button onClick={() => setCount1(count1 + 1)}>count1</button>
      <button onClick={() => setCount(count + 1)}>count</button>
      <button onClick={() => setShow(!show)}>changeShow</button>
    </div>
  );
}

export default UseEffectDemo;