import React, { Component } from 'react';
import Dialog from "../../component/dialog"

export default class Dialogtest extends Component {
  render() {
    return (
        <div>
          <Dialog title="exer" visible onClose={()=>console.log("close")}>
              <div>
                  <div>123</div>
                  <div>123</div>
              </div>
          </Dialog>
        </div> 
    );
  }
}