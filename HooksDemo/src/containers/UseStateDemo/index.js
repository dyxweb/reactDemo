import React, { useState } from 'react';
import DemoOne from './demoOne';
import DemoTwo from './demoTwo';

const UseStateDemo = () => {

  const [showOne, setShowOne] = useState(true);
  return (
    <div>
      {showOne ? <DemoOne /> : <DemoTwo />}
      <button onClick={ () => setShowOne(!showOne)}>changDemo</button>
    </div>
  );
};

export default UseStateDemo;