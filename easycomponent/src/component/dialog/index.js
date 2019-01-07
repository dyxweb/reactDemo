import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'

export default class Dialog extends Component {
    static propTypes = {
        style: propTypes.object,
        className: propTypes.string,
    }
    static defaultProps = {
        style: {},
        className: "",
    }
  constructor(props){
      super(props)
      this.state={
          visible:this.props.visible,
      }
  }

 close = (e) => {
     this.props.close()
     this.setState({visible: false})
 } 

render() {
    const {visible} = this.state
    const {title,children,className} = this.props
    return (
        <div>
            {visible && <div className="dialog_container">
               <div className="dyx_dialog">
                 <div className="title">
                   <span>{title}</span>
                   <span onClick={this.close}>*</span>
                 </div>
                 <div className="content">{children}</div>
               </div>
            </div>}
        </div> 
    );
  }
}