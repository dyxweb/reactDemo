/**
 * 父组件调用子组件方法的 子组件
 */
import React, { useState, useImperativeHandle, forwardRef } from 'react';

// props子组件中需要接受ref
const Child = (props, ref) => {
  const [val, setVal] = useState(1);

  const changeVal = val => {
    setVal(val);
  }
  
  // useImperativeHandle方法的的第一个参数是目标元素的ref引用
  useImperativeHandle(ref, () => ({
    // childFunc 就是暴露给父组件的方法
    childFunc: (newVal) => {
      changeVal(val + newVal);
    }
  }));

  return (
    <div>{val}</div>
  );
}

export default forwardRef(Child);