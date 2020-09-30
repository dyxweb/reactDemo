/**
 * 避免在每次渲染时都进行高开销的计算
 */
import React, { useState, useMemo } from 'react';

const DemoOne = (props) => {
  const [num, setNum] = useState(100);
  const { count, count1 } = props;

  const operationProps = (props) => {
    console.log('propsChange')
    return {
      newcount: props.count + 10,
      newcount1: props.count1 + 10,
    }
  }

  const { newcount, newcount1 } = useMemo(() => operationProps(props), [props]);

  return (
    <div>
      <div>
        props count: {count}  count1: {count1}
      </div>
      <div>
        new count: {newcount}  count1: {newcount1}
      </div>
      {/* 改变组件内部状态重新渲染时不会重新调用operationProps方法 */}
      <div>
        num {num}
        <button onClick={() => setNum(num + 1)}>changeNum</button>
      </div>
    </div>
  );
}

export default DemoOne;