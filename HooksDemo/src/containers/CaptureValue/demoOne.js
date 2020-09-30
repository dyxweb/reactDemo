/**
 * useState定义的常量以及定义的方法具有capture value特性
 */
import React, { useState } from 'react';

const DemoOne = () => {
  const [num, setNum] = useState(0);

  const log = () => {
    setTimeout(() => {
      // 每一次console的值都是执行setNum之前的值
      // 在log函数执行的那个render中，num的值还是执行setNum之前的值
      // 执行setNum()之后会交由一个全新的render中，新的render中不会执行log函数。
      // 而三秒后执行的内容是由setNum前的那个render执行的，所以console的num自然也是setNum前的那个render中的num值
      // num、log都拥有 Capture Value 特性
      console.log(num);
    }, 3000);
  };

  return (
    <div>
      {num}
      <button
        onClick={() => {
          setNum(num + 1);
          log();
        }}
      >
        click
      </button>
    </div>
  );
};

export default DemoOne;