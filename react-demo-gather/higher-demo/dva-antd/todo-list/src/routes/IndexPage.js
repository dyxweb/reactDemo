import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import  './IndexPage.css';
////使用className在roadhogrc中配置"disableCSSMoudle":tue,与styles.只能用其一
function IndexPage() {
  return (
    <div className="normal">
      <h1 className="title">Yay! Welcome to dva!</h1>
      <div className="welcome"/>
      <ul className="list">
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
