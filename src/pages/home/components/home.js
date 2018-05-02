import React , {Component} from 'react';
import './home.less'

export default class Home extends Component{
  constructor() {
    super()
    this.state = {
      road: [
        {year: 2014, main: [{month: 4, content: "获得挚金资本・智金创始人杨溢种子投资"}]},
        {year: 2015, main: [{month: 1, content: "获得上市公司“拓尔思”天使投资"},
            {month: 10, content: "数据服务交易平台“数多多”上线"},
            {month: 11, content: "获得深圳市高新技术企业认证"},]
        },
        {year: 2016, main: [{month: 3, content: "八爪鱼海外版“Octoparse”在洛杉矶上线"},
            {month: 12, content: "获得国家高新技术企业认证"},]
        },
        {year: 2017, main: [{month: 1, content: "获得“中信资本”A轮投资"},
            {month: 12, content: "微图CEM客户体验管理平台上线"},]
        },
        {year: 2018, main: [{month: 5, content: "全球用户突破100万"}]
        },
      ],
    }
  }
  render(){
    return(
      <div className='homePage'>
        <div className='banner'>
          <p>赋能数据 聚变价值</p>
          <div className='content'>深圳视界信息技术有限公司是领先的大数据解决方案提供商，为客户提供全网数据收集能力、数据整合分析能力和场景化解决方案。帮助客户提升效率，降低成本，增强业务竞争力。</div>
        </div>
        <div className='groups'>
          <ul>
            <li>
              <div className="img"></div>
              <div className="right">
                <p>全网数据收集</p>
                <div className="content">支持全网数据收集，覆盖500万以上数据源，日均采集数据超过10亿条，是全球100万企业用户选择和信赖的数据收集平台。在《中国大数据企业评级白皮书》数据采集类连续3年第一。</div>
              </div>
            </li>
            <li>
              <div className="img"></div>
              <div className="right">
                <p>人工智能消费洞察</p>
                <div className="content">整合全渠道消费者反馈数据，利用人工智能（AI）和自然语言处理（NLP）技术洞察产品和业务存在的问题，已帮助众多上市公司和财富500强企业实现客户满意度的提升和市场竞争力的增强。</div>
              </div>
            </li>
            <li>
              <div className="img"></div>
              <div className="right">
                <p>一站式大数据解决方案</p>
                <div className="content">产品和服务覆盖从数据源获取、数据清洗、数据分析、文本挖掘、决策辅助等大数据业务流程，在教育、金融、市场咨询、消费者洞察、广告效果监测、税务、公安等领域拥有完整的场景化解决方案和众多成功案例。</div>
              </div>
            </li>
          </ul>
        </div>
        <div className='product'>
          <div className="head">
            <p>丰富可靠的大数据产品</p>
            <div className="content">高效稳定的数据产品服务，为您挖掘无限的商业价值</div>
          </div>
          <div className="warp">
            <div className='perProduct'>
              <div className="left">
                <div className="img"></div>
              </div>
              <div className="right">
                <p>八爪鱼采集器</p>
                <div className="content">
                  八爪鱼，全球领先的网页数据采集器，极简的采集体验，强大的采集功能，日均采集10亿数据无错漏。
                </div>
                <div className="look">查看 →</div>
              </div>
            </div>
            <div className='perProduct'>
              <div className="left"><div className="img"></div></div>
              <div className="right">
                <p>Octoparse</p>
                <div className="content">
                  2016年3月在美国洛杉矶上线，两年时间即取得英文市场领先的地位，深耕北美，欧州与日本等市场。
                </div>
                <div className="look">查看 →</div>
              </div>
            </div>
            <div className='perProduct'>
              <div className="left"><div className="img"></div></div>
              <div className="right">
                <p>微图CEM</p>
                <div className="content">
                  微图CEM，专注客户体验管理，聚合全网客户声音，深度情感意见分析，支持多个行业高准确度分析模型。
                </div>
                <div className="look">查看 →</div>
              </div>
            </div>
            <div className='perProduct'>
              <div className="left"><div className="img"></div></div>
              <div className="right">
                <p>数多多</p>
                <div className="content">
                  数多多， 领先的数据服务众包平台，一站式数据服务与交易，汇集数百家高质量数据服务商。
                </div>
                <div className="look">查看 →</div>
              </div>
            </div>
          </div>
        </div>
        <div className="process">
          <div className="head">
            <p>发展历程</p>
            <div className="content">DEVELOPMENT HISTORY</div>
          </div>
          <div className="road">
            <div className=''>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
