import React from 'react';
import './bottom.less';
export default class Bottom extends React.Component {

  constructor(){
    super()
    this.state = {
      menu:[{name:'公司',list:[{name:'企业介绍',link:'/'},{name:'关于我们',link:'/about'}]},
        {name:'产品',list:[{name:'八爪鱼',link:'http://www.bazhuayu.com/'},{name:'Octoparse',link:'http://www.octoparse.com/'},{name:'云听CEM',link:'http://yunting.ai/'}]},
        {name:'解决方案',list:[{name:'税务行业',link:'http://www.bazhuayu.com/solution/tax'},{name:'品牌舆情',link:'http://www.bazhuayu.com/solution/brand'},{name:'教育行业',link:'http://www.bazhuayu.com/solution/education'},{name:'电商行业',link:'http://www.bazhuayu.com/solution/eco'}]},
        {name:'联系我们',list:[{name:'电话：0755-26646350',link:/Android|webOS|iPhone|iPod|iPad|BlackBerry|Windows Phone/i.test(navigator.userAgent) ? 'tel://0755-26646350':''},
            {name:'邮箱：sales@skieer.com',link:/Android|webOS|iPhone|iPod|iPad|BlackBerry|Windows Phone/i.test(navigator.userAgent) ?'mailto:sales@skieer.com':'' },
            // {name:'客服QQ：148686415</br><span style="margin-left:37px;">61570666</span>',link:''}
          ]},
      ],
      year:new Date().getFullYear(),
    }
  }
  render() {
    {/*< a href=””>号码< /a>*/}
    return (
      <div className='bottom'>
        <div className="wrap">
          <div className='company'>
            <div className='logo'></div>
            <p>{`Copyright © ${this.state.year} Skieer.`} </p>
            <p>All Rights Reserved. 粤ICP备14092314号-3</p>
          </div>
          <div className="moreInfor">
            <ul>
              { this.state.menu.map((e,i)=>
                <li key={i}>
                  <p>{e.name}</p>
                  {e.list.map((el,index)=> el.link?
                    <span key={index} ><a href={el.link} target={el.link.indexOf('http')!==-1?'_blank':''} dangerouslySetInnerHTML={{__html:el.name}}></a></span>:
                    <span className="noHref" key={index} dangerouslySetInnerHTML={{__html:el.name}}></span>)}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
