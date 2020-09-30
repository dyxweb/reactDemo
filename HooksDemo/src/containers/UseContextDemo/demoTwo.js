/**
 * 最内层的组件
 */
import React, { useContext } from 'react';
import ColorContext from './colorContext'

const DemoTwo = () => {
  const color = useContext(ColorContext);
  return (
    <div style={{ color }}>
      {color}
    </div>
  );
}

export default DemoTwo;