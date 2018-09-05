import React from 'react';
import style from '../styles/home-page.less';
import a from '../banner.jpg'
class Home extends React.Component {
  render () {
    return (
      <div className={style.welcome}>
        Welcome
        {/*<img src="http://ww2.sinaimg.cn/large/56d258bdjw1eugeubg8ujj21kw16odn6.jpg" />
        <img src={a} />*/}
      </div>
    );
  }
}

export default Home;
