import React from 'react';
import './header.less';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="wrap">
          <a href="/" className="logo">
          </a>
          <div className='nav'>
            <Link to="/about" activeClassName="active">
              <span>关于我们</span>
            </Link>
            <Link to="/project" activeClassName="active">
              <span>解决方案</span>
            </Link>
            <Link to="/" activeClassName="act" className={this.props.location.pathname === '/' ?'active':''}>
              <span>首页</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
