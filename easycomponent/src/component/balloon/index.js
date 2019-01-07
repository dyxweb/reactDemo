import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'

export default class Balloon extends Component {
    static propTypes = {
        style: propTypes.object,
        className: propTypes.string,
        trigger: propTypes.element,
        triggerType: propTypes.string,
    }
    static defaultProps = {
        style: {},
        className: "",
        triggerType: "hover",
    }
  constructor(props){
      super(props)
      this.state={
          visible:false,
          left:0,
          top:0,
      }
  }

  componentDidMount(){
      // 点击外部区域balloon消失，必须使用window监听，react事件都是通过document来代理的
    this.props.triggerType !== "hover" ? window.addEventListener('click',() => this.setState({ visible: false })) : ''
  }

 open = (e) => {
     e.stopPropagation();
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
    const {trigger,triggerType,children,className} = this.props
    return (
        <div className={`dyx${className ? `${className}` : ''}`}>
            <div style={{height:"500px"}}></div>
            {triggerType === 'hover' ? 
            <div onMouseEnter={this.open} onMouseLeave={this.open} style={{display:'inline-block'}}>{trigger}</div> :
            <div onClick={this.open} style={{display:'inline-block'}} ref="dyx">{trigger}</div>}
            <div style={{ display: visible ? 'block' : 'none'}} className="balloon_container">
               <div style={{ top, left }} className="dyx_balloon" ref="dyx_balloon">{children}</div>
            </div>
        </div> 
    );
  }
}