/**
 * 宽度不为100%的页面整体滚动
 */
import React, { Component } from 'react';
import './index.css';

export default class OwnCom extends Component {
    state = {
        fixStyle: {},
    }
    componentDidMount() {
        window.onscroll = this.comFixed;
    }

    componentWillUnmount() {
        window.onscroll = null;
    }

    comFixed = () => {
        const partOneHeight = this.partOne.getBoundingClientRect().height + 24;
        const partTwoHeight = this.partTwo.getBoundingClientRect().height + 24;
        const scrollTop = window.scrollY;
        if (scrollTop > (partOneHeight + partTwoHeight + 84)) {
        this.setState({
            fixStyle: { position: 'absolute' },
        });
        } else {
        this.setState({
            fixStyle: {},
        });
        }
    }

    render() {
        const { fixStyle } = this.state;
        const scrollTop = window.scrollY - 60;
        return (
        <div>
            <div className="partPage-top"></div>
            <div className="partPage-content">
            <div className="partPage-left"></div>
            <div className="partPage-right">
                <div className="partPage-right-part-one" ref = {ref => this.partOne = ref}></div>
                <div className="partPage-right-part-two" ref = {ref => this.partTwo = ref}></div>
                <div className="partPage-right-part-three" style={{ ...fixStyle, top: `${scrollTop}px` }}></div>
            </div>
            </div>
        </div> 
        );
    }
}
