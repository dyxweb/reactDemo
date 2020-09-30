/**
 * didMount
 */
import React, { useEffect } from 'react';

const DemoOne = () => {
  // 不依赖任何值相当于DidMount生命周期
  useEffect(() => {
    console.log('didMount');
  }, []);

  return (
    <div>
      didMount
    </div>
  )
}

export default DemoOne;