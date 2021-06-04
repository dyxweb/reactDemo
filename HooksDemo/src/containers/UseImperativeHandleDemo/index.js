/**
 * 父组件调用子组件方法的 父组件
 */
import React from 'react';
import Child from './child';

const Demo = () => {
  let childRef = null
  const getChild = () => {
    console.log(childRef); // 子组件useImperativeHandle返回的值
    childRef && childRef.childFunc(3);
  }
  
  return (
    <div>
      <Child ref={ref => childRef = ref} />
      <button onClick={getChild}>触发子组件方法</button>
    </div>
  );
}

export default Demo;