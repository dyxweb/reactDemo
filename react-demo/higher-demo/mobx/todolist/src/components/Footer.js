import React, { Component } from 'react'

export default class Footer extends Component {
    state={current:'all'}

    handleClick = (current) => {
      console.log(1)
    }
    render() {
        const data =[
            {text:"所有",params:'all'},
            {text:"已完成",params:'completed'},
            {text:"未完成",params:'notcompleted'},
        ]
        const { status } = this.props
        return (
            <div>
                {data.map((item,index) => 
                  <div
                    key={index}
                    onClick={() => this.props.showstatus(item.params)} 
                    style={{color: status == item.params ? "red" : '#000'}}
                  >
                    {item.text}
                  </div> 
                )}
            </div>
        )
    }
}

