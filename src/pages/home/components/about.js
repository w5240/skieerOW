import React , {Component} from 'react';
import './about.less'


export default class About extends Component{
  componentDidMount(){
    document.querySelector('title').innerText = '关于我们 | 深圳视界信息技术有限公司'
  }
  render(){
    return(
      <div className="about">
        <div className="photos">
          <div className="left">
            <p></p><p></p><p></p>
          </div>
          <div className="right">
            <p></p><p></p><p></p><p></p>
          </div>
          <div className="introduce">
            <p><span>团队介绍</span></p>
            <div className="content">
              深圳视界信息技术有限公司2013年成立于深圳，是一家以技术为驱动、市场为导向的国家高新企业。两位联合创始人来自于全球顶级金融数据分析公司Morningstar，核心团队毕业于国防科技大学、南开大学、吉林大学等知名院校，在大数据采集和分析领域具有深厚的技术积累和运营经验。
            </div>
            <div className="join"><a href="http://www.bazhuayu.com/joinus" target="_blank">加入我们 <span> → </span> </a></div>
          </div>
        </div>
        <div className="banner">
          <p>价值观</p>
          <div className="content">
            信任，务实，挑战自我，专注用户价值
          </div>
        </div>
        <div className="head">
          <span className="title">公司创始人</span>
          <div className="boss">
            <div className='left'></div>
            <div className='right'>
              <p>刘宝强 <span> Keven</span></p>
              <span>深圳视界信息技术有限公司创始人</span><span>八爪鱼 CEO</span>
              <div className="content">
                毕业于国防科技大学，曾在全球知名金融数据公司Morningstar（晨星资讯）工作5年，全权负责全球金融数据收集及分析平台团队管理。在海外有着长时间的工作经验，熟悉硅谷企业文化。
              </div>
            </div>
          </div>
        </div>
        <div className="contect">
          <div className="content">
            <div className="left">
              <p>联系我们</p>
              <div><span>电话：0755-26646350</span><span>客服QQ：148686415  470619317</span></div>
              <div>邮箱：sales@skieer.com</div>
              <div>地址：深圳市南山区科技园深南大道9966号威盛科技大厦318</div>
            </div>
            <div className="right">
              <div></div>
              <p>扫码关注产品动态</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
