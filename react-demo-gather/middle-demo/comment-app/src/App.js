import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
    }
  }
  handleSubmit = (comment) => {
    //扩展运算符，在原数组的基础上新增内容
    this.setState({ comments: [...this.state.comments, comment] }, () => {
      console.log(this.state.comments)
    });
  }
  render() {
    return (
      <div className="App">
        <CommentInput 
          onSubmit={this.handleSubmit}
        />
        <CommentList 
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default App;
