import React, { useEffect } from 'react';
import './index.less';

const Button = ({ text }: { text: string }) => {
  useEffect(() => {
    console.log('Button');
  }, []);
  return (
    <button className='button'>{text}</button>
  );
};

export default Button;