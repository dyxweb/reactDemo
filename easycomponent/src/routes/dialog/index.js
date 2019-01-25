import React, { Component } from 'react';
import Dialog from "../../component/dialog"

export default class Dialogtest extends Component {
  constructor(props){
    super(props)
    this.state= {
      visible: false
    }
  }

  toggleVisible = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
        <div>
          <button onClick={this.toggleVisible}>dialog</button>
          <Dialog title="exer" visible={this.state.visible} onClose={this.onClose} ensure={this.onClose} cancel={this.onClose} >
              <div>
                  <div>123</div>
                  <div>123</div>
              </div>
          </Dialog>
        </div> 
    );
  }
}