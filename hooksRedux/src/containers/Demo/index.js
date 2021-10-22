import React, { useState } from 'react';
import { CompA, CompB, CompC, CompD } from '../Com';

const Demo = () => {
  const [isShow , setShow] = useState(true)
  return (
    <div>
      <CompA />
      <CompB />
      <CompC />
      {isShow &&  <CompD />}
      <button onClick={() => setShow(!isShow)}>点击</button>
    </div>
  )
}

export default Demo;