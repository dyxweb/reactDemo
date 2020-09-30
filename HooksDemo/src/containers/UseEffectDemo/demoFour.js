/**
 * 监听props改变
 */
import React, { useEffect } from 'react';

const DemoFour = (props) => {
  const { count, count1 } = props;

  // 监听props
  useEffect(() => {
    console.log(props);
  }, [props]);


  return (
    <div>
      props count1: {count1}  count: {count}
    </div>
  )
}

export default DemoFour;