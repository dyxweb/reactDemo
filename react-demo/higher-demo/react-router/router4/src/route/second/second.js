import React from "react";
import { Input, Button, Form,Modal } from 'antd';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import SecondId from '../second/secondId'

const confirm = Modal.confirm;
class Second extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      option: '',
      visible: true,
    }
  }

  componentDidMount() {
    document.onkeydown = this.enterKeyDown;
  }

  componentWillUnmount() {
    document.onkeydown = null;
  }
  
  enterKeyDown = e => {
    if(e.keyCode === 13) {
      this.infoSubmit();
    }
  }

  infoSubmit = () => {
    this.props.form.validateFields((err,values) => {
      if(!err){
        this.setState({
          options: [...this.state.options, values.option]
        }, () => this.props.form.setFieldsValue({
          option: '',
        }))
      }
    })
  }

  chooseOption = () => {
    this.setState({
      visible: false,
    });
    const prevTime = new Date().getTime();
    const timer = setInterval(() => {
      const randomNumber = Math.floor(Math.random()*this.state.options.length);
      this.setState({
        option: this.state.options[randomNumber]
      })
      if (new Date().getTime() - prevTime > 5000) {
        clearInterval(timer);
        confirm({
          title: '确认结果',
          content: this.state.option,
        });
        this.setState({
          visible: true,
        })
      }
    }, 40)
  }

  clearOption = () => {
    this.setState({
      visible: true,
      options: [],
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { option, options, visible } = this.state;
    return(
      <div>
        {getFieldDecorator('option', {
          rules: [{
              required: true,
              message: '请输入选项',
          }],
        })(
          <Input placeholder="请输入选项" style={{ width: '200px' }} />
        )}
        <Button type="primary" onClick={this.infoSubmit}>确定</Button>
        {visible && <div>
          {options.map((item,index) => <div key={index}>{item}</div>)}
        </div>}
        {options.length > 1  && <Button type="primary" onClick={this.chooseOption}>选择</Button>}
        {options.length > 1 && <Button type="primary" onClick={this.clearOption}>清空选项</Button>}
        {!visible && <div style={{ background: '#eee', lineHeight: '100px', width: '100px', textAlign: 'center' }}>
          {option}
        </div>}
        <Switch>
          <Route path="/second/:id" component={SecondId} />
          <Redirect to="/second/a" />
        </Switch>
      </div>
    )
  }
}

const NewSecond = Form.create({ name: 'dyx' })(Second)
export default NewSecond;


// import React from "react";
// import { Input, Button, Form,Modal } from 'antd';
// import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
// import './index.css'
// import SecondId from '../second/secondId'

// const confirm = Modal.confirm;
// class Second extends React.component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       options: [],
//       activeKey: -1,
//       times: 0,
//     }
//   }

//   componentDidMount() {
//     document.onkeydown = this.enterKeyDown;
//   }

//   componentWillUnmount() {
//     document.onkeydown = null;
//   }
  
//   enterKeyDown = e => {
//     if(e.keyCode === 13) {
//       this.infoSubmit();
//     }
//   }

//   infoSubmit = () => {
//     this.props.form.validateFields((err,values) => {
//       if(!err){
//         this.setState({
//           options: [...this.state.options, values.option]
//         }, () => this.props.form.setFieldsValue({
//           option: '',
//         }))
//       }
//     })
//   }

//   chooseOption = () => {
//     // 顺序active的不能使用时间来判断是否停止，可能会出现多个重复结果
//     const timer = setInterval(() => {
//       const randomNumber = Math.floor(Math.random() * 10 + 20 );
//       const { activeKey, options } = this.state;
//       let newActiveKey = activeKey + 1;
//       if( newActiveKey === options.length) {
//         newActiveKey = 0;
//       }
//       if (this.state.times > randomNumber) {
//         clearInterval(timer);
//         confirm({
//           title: '确认结果',
//           content: options[activeKey],
//         });
//         return null;
//       }
//       this.setState({
//         activeKey: newActiveKey,
//         times: this.state.times +1,
//       })
//     }, 40)
//   }

//   clearOption = () => {
//     this.setState({
//       options: [],
//     })
//   }

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     const { options, activeKey } = this.state;
//     return(
//       <div>
//         {getFieldDecorator('option', {
//           rules: [{
//               required: true,
//               message: '请输入选项',
//           }],
//         })(
//           <Input placeholder="请输入选项" style={{ width: '200px' }} />
//         )}
//         <Button type="primary" onClick={this.infoSubmit}>确定</Button>
//         {options.length > 1 && <Button type="primary" onClick={this.clearOption}>清空选项</Button>}
//         <div className="price">
//           {options.map((item, index) => {
//             if (index === 4) {
//               return (
//                 <React.Fragment key={index}>
//                   <div className="priceItem" onClick={this.chooseOption}>选择</div>
//                   <div className="priceItem" className={`priceItem ${activeKey === index ? `activeItem` : ``}`}>{item}</div>
//                 </React.Fragment>
//               )
//             } else {
//               <div className="priceItem" className={`priceItem ${activeKey === index ? `activeItem` : ``}`}>{item}</div>
//             }
//           })}
//         </div>
//         {(options.length > 1 && options.length < 5) && <Button type="primary" onClick={this.chooseOption}>选择</Button>}
//         <Switch>
//           <Route path="/second/:id" component={SecondId} />
//           <Redirect to="/second/a" />
//         </Switch>
//       </div>
//     )
//   }
// }

// const NewSecond = Form.create({ name: 'dyx' })(Second)
// export default NewSecond;