/**
 * 宽度为100%的内容区域滚动
 */
import React, { Component } from 'react';
import './index.css';

export default class OwnCom extends Component {
	state = {
		navTop: 0,
		fixStyle: {},
	}

	componentDidMount() {
		this.allContent.onscroll = this.comFixed;
		const navTop = this.nav.offsetTop;
		this.setState({
			navTop,
		});
	}

	componentWillUnmount() {
		window.onscroll = null;
	}

	comFixed = () => {
		const { navTop } = this.state;
		const scrollTop = this.allContent.scrollTop;
		if (scrollTop > navTop) {
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
		const scrollTop = this.allContent && this.allContent.scrollTop;
		return (
			<div className="allContent-all">
				<div className="allContent-top"></div>
				<div className="allContent-all-content" ref = {ref => this.allContent = ref}>
					<div className="allContent-top-content"></div>
					<div className="allContent-nav" ref = {ref => this.nav = ref} style={{ ...fixStyle, top: `${scrollTop}px` }}></div>
					<div className="allContent-content"></div>
				</div>
			</div> 
		);
	}
}
  