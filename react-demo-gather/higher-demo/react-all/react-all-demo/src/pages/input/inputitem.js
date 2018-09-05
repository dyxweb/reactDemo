 import React from 'react';
 import InputItem from './input.js'
export default class demo extends React.Component{
	constructor(){
		super();
		this.state={
			userName:"dyx"
		}
	}
	a=()=>{
        this.setState({
            userName:" 1233"
        })
        console.log("change")
	}
  render(){
  	return(
  		<div>
  	<InputItem value="123" />
  	  <div onClick={this.a}>456</div>
  	</div>
  	
  	)
  	}
 }
 
