import React from 'react';
import DemoOne from './demoOne';
import ColorContext from './colorContext'

const UseContextDemo = () => {
  return (
    // 此处的value才是子孙组件读取到的值
    <ColorContext.Provider value="red">
      <DemoOne />
    </ColorContext.Provider>
  );
}

export default UseContextDemo;