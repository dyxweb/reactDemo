import React, { Component } from 'react';
import './index.css'

export default class Tab extends Component {
  constructor(props){
      super(props)
      this.state={
          visible:false,
          left:0,
          top:0,
      }
  }

  componentDidMount(){
  }

 open = (e) => {
     e.persist() // 异步回调后事件对象的继续使用
     this.setState({ visible: !this.state.visible},
        () => this.setState({
            left:e.target.offsetLeft-(this.refs.dyx_balloon.offsetWidth/2 - e.target.offsetWidth/2),
            top: e.target.offsetTop-(this.refs.dyx_balloon.offsetHeight+8)
        })
     )
 } 

render() {
    const {visible,top,left} = this.state
    const {trigger,triggerType,children} = this.props
    return (
        <div>
            <div style={{height:"500px"}}></div>
            {triggerType === 'hover' ? 
            <div onMouseEnter={this.open} onMouseLeave={this.open} style={{display:'inline-block'}}>{trigger}</div> :
            <div onClick={this.open}>{trigger}</div>}
            <div style={{ display: visible ? 'block' : 'none'}}>
               <div style={{ top, left }} className="dyx_balloon" ref="dyx_balloon" onClick={this.open}>{children}</div>
            </div>
        </div> 
    );
  }
}