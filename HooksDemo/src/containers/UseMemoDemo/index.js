import React, { useState } from 'react';
import DemoOne from './demoOne';

const UseMemoDemo = (props) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  return (
    <div>
      <DemoOne {...props} count={count} count1={count1} />
      <button onClick={() => setCount(count + 1)}>count</button>
      <button onClick={() => setCount1(count1 + 1)}>count1</button>
    </div>
  );
}

export default UseMemoDemo;