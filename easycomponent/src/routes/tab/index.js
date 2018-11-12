import React, { Component } from 'react';
import TabsContainer from "../../component/tab"
import './index.css';

export default class Tabtset extends Component {
  render() {
    return (
        <div className="container">
            <TabsContainer>
                <div name = "first">
                    one
                </div>
                <div name = "second">
                    two
                </div>
                <div name = "third">
                    three
                </div>
            </TabsContainer>
        </div>   
    );
  }
}
