import React, { Component } from 'react';
import Balloon from "../../component/balloon"
import './index.css';

export default class Balloontest extends Component {
  render() {
    const target = <button style={{position:"relative", left:'300px'}}>button</button>
    return (
        <div>
          <Balloon trigger={target} triggerType="click">
            <a href="#" target="_blank">123</a>
          </Balloon>
        </div> 
    );
  }
}