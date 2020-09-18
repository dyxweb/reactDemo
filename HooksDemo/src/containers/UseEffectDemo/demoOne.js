import React, { useState, useEffect } from 'react';

const DemoOne = (props) => {
  const { count, count1 } = props;
  const [info, setInfo] = useState({ name: 'dyx', age: 24 });
  const [num, setNum] = useState(2);
  // 不依赖任何值相当于DidMount生命周期
  useEffect(() => {
    console.log('didMount');
  }, []);

  // 监听props
  useEffect(() => {
    console.log(props);
  }, [props]);


  // 没有第二个参数表示只要render就会执行
  useEffect(() => {
    console.log('render');
  });

  useEffect(() => {
    console.log(info);
    console.log(num);
  }, [info, num]);

  const onScroll = () => {
    console.log('scroll');
  }

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Unmount');
    }
  }, [])

  // 全局事件绑定及卸载
  useEffect(() => {
    document.addEventListener('click', onScroll);
    return () => {
      document.removeEventListener('click', onScroll);
    };
  }, []);

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
      <div>
        props count1: {count1}  count: {count}
      </div>
    </div>
  )
}

export default DemoOne;