import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'

export default class Dialog extends Component {
    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
    }
    static defaultProps = {
        style: {},
        className: "",
    }
  constructor(props){
      super(props)
      this.state={
      }
  }

    render() {
        const { title,children,className, onClose, cancel, ensure, visible} = this.props
        return (
            <div>
                {visible && <div className="dialog_container" />}
                {visible && <div className="dyx_dialog">
                    <div className="title">
                        <span>{title}</span>
                        <span onClick={onClose} className="close">×</span>
                    </div>
                    <div className="content">{children}</div>
                    <div className="footer">
                        <button onClick={ensure}>确定</button>
                        <button onClick={cancel}>取消</button>
                    </div>
                </div>}
            </div> 
        );
    }
}