import React, { useEffect } from 'react';
import './index.less';

const Header = ({ text }) => {
  useEffect(() => {
    console.log('Header');
  }, []);
  return (
    <div className='header'>{text}</div>
  );
};

export default Header;