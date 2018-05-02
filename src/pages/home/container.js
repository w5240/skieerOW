
import React, { Component } from 'react';
import Header from 'components/Header';
import Bottom from 'components/Bottom';
import './index.less';

export default class Container extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          {this.props.children}
        </div>
        <Bottom/>
      </div>
    );
  }
}
