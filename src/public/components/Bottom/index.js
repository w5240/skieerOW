import React from 'react';
import './bottom.less';
export default class Bottom extends React.Component {
  constructor(){
    super()
    this.state = {
      menu:[{name:'公司',list:[{name:'企业介绍',link:'dsa'},{name:'关于我们',link:'dsadsa'}]},
        {name:'产品',list:[{name:'八爪鱼',link:''},{name:'Octoparse',link:''},{name:'威图CEM',link:''},{name:'数多多',link:''}]},
        {name:'解决方案',list:[{name:'税务行业',link:''},{name:'品牌舆情',link:''},{name:'教育行业',link:''},{name:'电商行业',link:''}]},
        {name:'联系我们',list:[{name:'电话：0755-26646350',link:''},{name:'邮箱：sales@skieer.com',link:''},{name:'客服QQ：148686415</br><span style="margin-left:55px;">4706019317</span>',link:''}]},]
    }
  }
  render() {
    return (
      <div className='bottom'>
        <div className='company'>
          <div className='logo'></div>
          <p>Copyright © 2012  Skieer. </p>
          <p>All Rights Reserved. 粤ICP备14092314号</p>
        </div>
        <div className="moreInfor">
          <ul>
            { this.state.menu.map((e,i)=>
              <li key={i}>
                <p>{e.name}</p>
                {e.list.map((el,index)=> el.link?<a href={el.link} key={index} dangerouslySetInnerHTML={{__html:el.name}}></a>:
                                                  <span key={index} dangerouslySetInnerHTML={{__html:el.name}}></span>)}
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
