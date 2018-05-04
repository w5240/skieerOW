import React from 'react';
import './header.less';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="wrap">
          <div className="logo">
          </div>
          <div className='nav'>
            <Link to="/about" activeClassName="active">
              <span>关于我们</span>
            </Link>
            <Link to="/project" activeClassName="active">
              <span>解决方案</span>
            </Link>
            <Link to="/home" activeClassName="active">
              <span>首页</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
