import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';

const App = () => {
  return (
    <div>
      <Header text="标题1" />
      <Header text="标题2" />
      <Button text="按钮1" />
      <Button text="按钮1" />
    </div>
  );
};

export default App;