
  export default class InputItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }
 
    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value
        })
    }
 
    _onChange(evt){
        this.setState({
            value: evt.target.value
        })
    }
 
    render(){
        return (
            <input type="text" 
                value={this.state.value} 
                onChange={this._onChange.bind(this)}/>
        );
    }
}