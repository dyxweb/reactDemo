/**
 * 父组件调用子组件方法的 父组件
 */
import React, { useRef } from 'react';
import DemoTwoChild from './demoTwoChild';

const DemoTwo = () => {
  const childRef = useRef();
  const getChild = () => {
    console.log(childRef.current); // 子组件实例
    childRef.current && childRef.current.childFunc(3);
  }
  
  return (
    <div>
      {/* ref和cRef都不可少 */}
      <DemoTwoChild ref={childRef} cRef={childRef} />
      <button onClick={getChild}>触发子组件方法</button>
    </div>
  );
}

export default DemoTwo;