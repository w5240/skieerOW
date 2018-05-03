import React , {Component} from 'react';
import './project.less'

export default class Project extends Component{
  render(){
    return(
      <div className="project">
        <div className="banner">
          <p>解决方案</p>
          <div className="content">
            依托八爪鱼、微图、数多多等大数据及人工智能产品，为各行业打造大数据场景整体解决方案，使企业能高效、便捷地进行数据运用和价值实现。
          </div>
        </div>
        <ul className="pro">
          <li>
            <div className="icon"><span></span></div>
            <div className='right'><p>微图CEM客户体验价值管理</p><div className="content">聚合全景反馈，挖掘行动指引，提升客户体验。</div></div>
            <a href="">查看 <span> → </span> </a>
          </li>
          <li>
            <div className="icon"><span></span></div>
            <div className='right'><p>企业大数据风控解决方案</p><div className="content">通过八爪鱼快速获取数据，提升产学研效果，理论与实践相结合，提高教学质量。</div></div>
            <a href="">查看 <span> → </span> </a>
          </li>
          <li>
            <div className="icon"><span></span></div>
            <div className='right'><p>教育行业</p><div className="content">通过八爪鱼快速获取数据，提升产学研效果，理论与实践相结合，提高教学质量。</div></div>
            <a href="">查看 <span> → </span> </a>
          </li>
          <li>
            <div className="icon"><span></span></div>
            <div className='right'><p>移动应用市场告监控效果监测</p><div className="content">通过移动端大数据采集分析，获取有效数据，掌握广告投放的效果，及时调整优化投放策略。</div></div>
            <a href="">查看 <span> → </span> </a>
          </li>
          <li>
            <div className="icon"><span></span></div>
            <div className='right'><p>税务行业</p><div className="content">深度挖掘互联网公开数据，助力税务大数据。</div></div>
            <a href="">查看 <span> → </span> </a>
          </li>
        </ul>
      </div>
    )
  }
}
