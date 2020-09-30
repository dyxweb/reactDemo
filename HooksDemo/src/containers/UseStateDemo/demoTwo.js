/**
 * 定义变量的区别
 * 在函数组件外部定义变量，修改变量值之后组件销毁然后重新挂载，变量的值会保持修改后的值，而不是初始值，但是在父组件中调用不到此变量。
 * 在函数组件内部定义变量，只要组件进行更新，此变量的值就会重新进行初始的赋值。
 */
import React, { useState } from 'react';

let b = 1;
const DemoTwo = () => {
  const [exerNum, setExerNum] = useState(1);
  let a = 10;

  const changeNum = () => {
    setExerNum(exerNum + 1);
    a += 1;
    b += 1;
  }

  return (
    <div>
      <div>
        a: {a}
      </div>
      <div>
        b: {b}
      </div>
      <button onClick={changeNum}>click</button>
    </div>
  );
};

export default DemoTwo;