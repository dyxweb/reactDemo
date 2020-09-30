/**
 * 监听内部状态改变
 */
import React, { useState, useEffect } from 'react';

const DemoFive = () => {
  const [info, setInfo] = useState({ name: 'dyx', age: 24 });
  const [num, setNum] = useState(2);

  useEffect(() => {
    console.log(info);
    console.log(num);
  }, [info, num]);

  const changeAge = () => {
    setInfo({
      ...info,
      age: info.age + 2,
    })
  }

  return (
    <div>
      <div>age: {info.age}</div>
      <div>num: {num}</div>
      <button onClick={changeAge}>changeage</button>
      <button onClick={() => setNum(num + 2)}>changeNUM</button>
    </div>
  )
}

export default DemoFive;