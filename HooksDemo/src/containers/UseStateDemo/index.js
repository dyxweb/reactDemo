import React, { useState } from 'react';
import DemoOne from './demoOne';
import DemoTwo from './demoTwo';

const UseStateDemo = () => {
  const [showOne, setShowOne] = useState(true);
  return (
    <div>
      {showOne ? <DemoOne /> : <DemoTwo />}
      <hr />
      <button onClick={ () => setShowOne(!showOne)}>
        {showOne ? '变量定义区分' : '基础使用'}
      </button>
    </div>
  );
};

export default UseStateDemo;