/**
 * 宽度为100%的页面整体滚动
 */
import React, { Component } from 'react';
import './index.css';

export default class OwnCom extends Component {
	state = {
		navTop: 0,
		fixStyle: {},
	}
	componentDidMount() {
		window.onscroll = this.comFixed;
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
		const scrollTop = window.scrollY;
		if (scrollTop > navTop) {
			this.setState({
				fixStyle: { position: 'fixed' },
			});
		} else {
			this.setState({
				fixStyle: {},
			});
		}
	}

	render() {
		const { fixStyle } = this.state;
		return (
			<div>
				<div className="allPage-top"></div>
				<div className="allPage-top-content"></div>
				<div className="allPage-nav" ref = {ref => this.nav = ref} style={{ ...fixStyle, top: 0 }}></div>
				<div className="allPage-content"></div>
			</div> 
		);
	}
}
  