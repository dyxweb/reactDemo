import React, { Component } from 'react';

export default class Tab extends Component {
  constructor(props){
      super(props)
      this.state={
          visible:false
      }
  }

  componentDidMount(){
      window.onscroll = () =>{
          let top= document.body.scrollTop || document.documentElement.scrollTop
          if(top>this.props.top){
              this.setState({
                  visible:true
              })
          }else{
            this.setState({
                visible:false
            }) 
          }
      }
  }

  gotop =() =>{
    // let timer = setInterval(function(){
    //     let top= document.body.scrollTop || document.documentElement.scrollTop
    //     if (top > 0){
    //         window.scrollTo(0,top-50)
    //     } else{
    //     clearInterval(timer)
    //     }
    // })
    
    cancelAnimationFrame(timer)
    var timer =requestAnimationFrame(function fn(){
        let top= document.body.scrollTop || document.documentElement.scrollTop
        if (top > 0){
            window.scrollTo(0,top-50)
            timer=requestAnimationFrame(fn)
        } else{
            cancelAnimationFrame(timer)
        }
    })
  }
  render() {
    const {visible} = this.state
    return (
        <div>
            {visible && <button onClick={this.gotop} style={this.props.style}>gotoTop</button>}
        </div> 
    );
  }
}