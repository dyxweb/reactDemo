import React, { Component } from 'react';
import Gotop from "../../component/gotop"
import './index.css';

export default class Gotoptest extends Component {
  render() {
    return (
        <div>
          <div style={{height:"3000px",width:"100%"}}></div>
          <Gotop  top={300} style={{position:fixed,right:"50px",bottom:"50px"}}/>
        </div> 
    );
  }
}
