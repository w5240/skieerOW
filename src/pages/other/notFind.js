import React, { Component } from 'react';
import './notFind.less';
import {browserHistory} from 'react-router'

export default class notFind extends Component {
  back(){
    browserHistory.push('/')
  }
  render() {
    return (
      <div className='notFind'>
        <div className='img'></div>
        <p>未找到该页面</p>
        <button onClick = {this.back}> ←  返回首页</button>
      </div>
    );
  }
}
