/**
 * 引用类型数据必须返回一个新的解构后的值
 */
import React, { useState } from 'react';

const DemoOne = () => {
  const [info, setInfo] = useState({
    name: 'dyx',
    age: 24,
  });

  const [num, setNum] = useState(2);

  const changeInfo = addAge => {
    setInfo((oldInfo) => {
      return {
        ...oldInfo,
        age: oldInfo.age + addAge,
      }
    });
  }

  const changeInfoCopy = addAge => {
    setInfo((oldInfo) => {
      oldInfo.age += addAge;
      // return oldInfo;  这样不会触发页面更新
      return {...oldInfo}; // 这样会更新
    });
  }

  // 简单类型数据可以触发更新
  const changeNum = addNum => {
    setNum((oldNum) => {
      oldNum += addNum;
      return oldNum;
    });
  }

  return (
    <div>
      <div>
        <div>name: {info.name}</div>
        <div>age: {info.age}</div>
      </div>
      <button onClick={() => changeInfo(2)}>changeInfo</button>

      <div>
        num: {num}
      </div>
      <button onClick={() => changeNum(2)}>changeNum</button>
    </div>
  );
};

export default DemoOne;