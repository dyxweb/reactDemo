/**
 * useEffect具有capture value特性
 */
import React, { useState, useEffect } from 'react';

const DemoTwo = () => {
  const [num, setNum] = useState(0);

  // useEffect(() => {
  //   // 由于seEffect的Capture Value的特性，拿到的num值永远是初始化的0。
  //   // setInterval永远在count为0基础上加一，setInterval在一直循环但是后续的setNum没有什么作用
  //   const intervalId = setInterval(() => {
  //     setNum(num + 1);
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

//   useEffect(() => {
//     // useEffect监听num的变化可以拿到了最新的num。
//     // 但是计时器不准了，因为每次count变化时都会销毁并重新计时。计时器频繁的挂载和销毁 定时器带来了一定性能负担。
//     const intervalId = setInterval(() => {
//       setNum(num + 1);
//     }, 1000);
//     return () => clearInterval(intervalId); 
//   }, [num]);

  // 不依赖外部变量(依赖useState的回调形式进行更新操作)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNum(oldNum => oldNum + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>{num}</div>
  );
}

export default DemoTwo;