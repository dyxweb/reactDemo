import React, { Component } from 'react';
import TabsContainer from "../../component/tab"
import './index.css';

export default class Tabtset extends Component {
  render() {
    return (
        <div className="container">
            <TabsContainer>
                <div name = "first">
                    第一帧
                </div>
                <div name = "second">
                    第二帧
                </div>
                <div name = "third">
                    第三帧
                </div>
            </TabsContainer>
        </div>   
    );
  }
}
