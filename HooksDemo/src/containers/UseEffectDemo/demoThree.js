/**
 * componentWillUnmount
 */
import React, { useEffect } from 'react';

const DemoThree = () => {
  const clickFunc = () => {
    console.log('click');
  }

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount');
    }
  }, [])

  // 全局事件绑定及卸载
  useEffect(() => {
    document.addEventListener('click', clickFunc);
    return () => {
      document.removeEventListener('click', clickFunc);
    };
  }, []);

  return (
    <div>
      componentWillUnmount
    </div>
  )
}

export default DemoThree;