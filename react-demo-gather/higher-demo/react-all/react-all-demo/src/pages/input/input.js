import React from 'react';
export default class InputItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }
   componentWillMount(){
   	this.setState({
   		value:this.props.value
   	})
   }
    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value
        })
        console.log("nextprops")
    }
 
    _onChange=(evt)=>{
        this.setState({
            value: evt.target.value
        })
        console.log(1)
    }
 
    render(){
        return (
            <input type="text" 
                value={this.state.value} 
                onChange={this._onChange}/>
        );
    }
}