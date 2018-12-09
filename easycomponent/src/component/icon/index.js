import React, { Component } from 'react';
import './index.css'

export default class Icon extends Component {
  constructor(props){
      super(props)
      this.state={

      }
  }

render() {
    const {src, style, className} = this.props
    return (
        <div>
            <img src={src} style={style} className={className} />
        </div> 
    );
  }
}