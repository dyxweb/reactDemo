/**
 * 避免父组件重新渲染，导致传递的方法重新定义导致子组件重新渲染
 */
import React from 'react';

const DemoOne = (props) => {
  console.log(props.children)
  return (
    <div>
      <div>
        {props.children}
      </div>
      <button onClick={props.clickCount}>调用父组件方法</button>
    </div>
  );
}

export default React.memo(DemoOne);