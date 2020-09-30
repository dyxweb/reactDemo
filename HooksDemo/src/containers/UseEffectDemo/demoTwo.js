/**
 * reRender
 */
import React, { useEffect } from 'react';

const DemoTwo = (props) => {

  // 没有第二个参数表示只要render就会执行
  useEffect(() => {
    console.log('render');
  });

  return (
    <div>
      reRender
    </div>
  )
}

export default DemoTwo;