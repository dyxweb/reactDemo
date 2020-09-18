import React, { useState } from 'react';

let b = 1;
const UseStateDemo = () => {
  let a = 0;
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
    a += 1;
    b += 1;
    setNum((oldNum) => {
      oldNum += addNum;
      return oldNum;
    });
  }

  console.log(b);
  return (
    <div>
      <ul>
        <li>第一次渲染会读取设置的初始值，第二次渲染时则会忽略设置的初始值</li>
        <li>setState是非覆盖式更新状态，只会更新传入的值，而useState是覆盖式更新状态</li>
        <li>修改引用类型数据的变化,必须重新返回一个新的解构后的值,简单数据类型没有影响</li>
        <li>useState改变状态依然是异步的，修改后无法实时获取最新的改变之后的值</li>
      </ul>
      <div>
        <div>name: {info.name}</div>
        <div>age: {info.age}</div>
      </div>
      <button onClick={() => changeInfo(2)}>changeInfo</button>

      <div>
        num: {num}
      </div>
      <button onClick={() => changeNum(2)}>changeNum</button>


      <div>
        a: {a}
      </div>
      <div>
        b: {b}
      </div>
    </div>
  );
};

export default UseStateDemo;