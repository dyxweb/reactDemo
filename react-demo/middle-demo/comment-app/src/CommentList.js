import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  //设置默认props，严谨的写法
  static defaultProps = {
    comments: []
  }
  
  render() {
    return (
      <div className='comment'>
        {this.props.comments.map((comment, i) =>
          <Comment comment={comment} key={i} />
        )}
      </div>
    )
  }
}

export default CommentList