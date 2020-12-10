/**
 * 宽度不为100%的内容区域滚动
 */
import React, { Component } from 'react';
import './index.css';

export default class OwnCom extends Component {
    state = {
        fixStyle: {},
    }
    componentDidMount() {
        this.content.onscroll = this.comFixed;
    }

    componentWillUnmount() {
        this.content.onscroll = null;
    }

    comFixed = () => {
        const partOneHeight = this.partOne.getBoundingClientRect().height + 24;
        const partTwoHeight = this.partTwo.getBoundingClientRect().height + 24;
        const scrollTop = this.content.scrollTop;
        if (scrollTop > (partOneHeight + partTwoHeight + 24)) {
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
        const scrollTop = this.content && this.content.scrollTop;
        return (
        <div className="partContent-all">
            <div className="partContent-top"></div>
            <div className="partContent-content" ref = {ref => this.content = ref}>
            <div className="partContent-left"></div>
            <div className="partContent-right">
                <div className="partContent-right-part-one" ref = {ref => this.partOne = ref}></div>
                <div className="partContent-right-part-two" ref = {ref => this.partTwo = ref}></div>
                <div className="partContent-right-part-three" style={{ ...fixStyle, top: `${scrollTop}px` }}></div>
            </div>
            </div>
        </div> 
        );
    }
}
  