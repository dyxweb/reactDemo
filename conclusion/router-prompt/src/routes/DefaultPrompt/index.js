/**
 * 使用Prompt的默认提示框阻止跳转
 */
import React, { Component } from 'react';
import { Prompt, Link } from 'react-router-dom';

export default class DefaultPrompt extends Component {
  render() {
    return (
      <div>
        <Link to="/function/message">跳转到function形式的message的页面</Link>
        {/* when为true时表示阻止默认的跳转行为 */}
        <Prompt when={true} message='确认离开此页面？' />
        <h1>
          使用Prompt的默认提示框阻止跳转
        </h1>
      </div>
    )
  }
}
