<style lang="less">
  #page-help {
    padding:10px 20px;
    pre {
      display: block;
      -webkit-margin-before: .7em;
      -webkit-margin-after: .7em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
      font-size:14px;
      line-height:1.8;
    }
    li {
      margin-top:20px;
    }
  }  
</style>

<template>
  <div id="page-help">
    <!-- <h1>使用帮助</h1> -->
        <ul class="qa">
            <li>
                <p>{{lang.intro[0]}}<br />{{lang.intro[1]}}<br />{{lang.intro[2]}}<br />{{lang.intro[3]}}</p>
                <!-- <pre>{{lang.intro}}</pre> -->
            </li>
        </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  asyncData({query}) {
    return { query }
  },
  layout:'empty',
  data() {
    return {
      text:{
        en:{ 
            intro:['ValPromise aims to build decentralized financial and financial contract trading agreements that support a variety of public chain deployments. So that everyone can freely issue financial transactions contracts. At present, the project has been applied on the ground (weather contract, digital currency price option), leading many blockchain projects,accumulating more than 100,000 users, month active user more than 80%. All contracts in the application are led by the community, free submission and trading, more than 12 million VPP contract(about 200,000 USDT) was traded per-day.','Exchange: FCoin', 'Investment Institutions Participation: Distributed Capital Shenbo, PreAngel Fund Wang Lijie, Wenzhou Capital, Gravitational Capital, Crypto Venture, Shoulian Capital, Fission Capital,MDT Foundation, QKC Foundation, Themis Foundation, OKEX . The company (Weather Pal)of the project received two rounds of investment, including Angel Investor Wang Gang, TenCent founder Wu Xiaoguang, MoWeather, Mingshi Capital.', "The team derived from years of precipitation equity investment projects, and fully run-in, team members work under the same project for many years, complementary characteristics, and such as the Chinese University of Hong Kong, Paris Polytechnic's Ph.D. in mathematics, data scientists and other high-level technical personnel, community operations experts.Provide data weather actuarial technical services for Ping An Insurance and Sunshine Insurance."]
//           intro:`ValPromise aims to build decentralized financial and financial contract trading agreements that support a variety of public chain deployments. So that everyone can freely issue financial transactions contracts. At present, the project has been applied on the ground (weather contract, digital currency price option), leading many blockchain projects,accumulating more than 100,000 users, month active user more than 80%. All contracts in the application are led by the community, free submission and trading, more than 12 million VPP contract(about 200,000 USDT) was traded per-day.
// Exchange: FCoin
// Investment Institutions Participation: Distributed Capital Shenbo, PreAngel Fund Wang Lijie, Wenzhou Capital, Gravitational Capital, Crypto Venture, Shoulian Capital, Fission Capital,MDT Foundation, QKC Foundation, Themis Foundation, OKEX . The company (Weather Pal)of the project received two rounds of investment, including Angel Investor Wang Gang, TenCent founder Wu Xiaoguang, MoWeather, Mingshi Capital.
// The team derived from years of precipitation equity investment projects, and fully run-in, team members work under the same project for many years, complementary characteristics, and such as the Chinese University of Hong Kong, Paris Polytechnic's Ph.D. in mathematics, data scientists and other high-level technical personnel, community operations experts.Provide data weather actuarial technical services for Ping An Insurance and Sunshine Insurance.`
        },
        cn:{
          intro:['ValPromise旨在构建去中心化金融金融合约交易协议，支持各种公链部署。让人人都可以自由发行交易金融合约。目前项目已落地应用（天气合约、数字货币价格期权），领先诸多区块链项目，累计用户过10万人，月活比例超过80%，应用内所有合约均由社群主导,自由提交和交易，单合约日最高交易额超过1200万VPP(约20万USDT)。', '交易所：Fcoin',' 投资机构参与：分布式资本沈波，PreAngel Fund王利杰，温州资本，引力资本，裂变资本，Crypto Venture,首联资本，MDT基金会，QKC基金会，Themis基金会，OKEX超级节点帮实资本。项目的人民币业务公司，获得两轮投资，滴滴天使投资人王刚、腾讯创始人吴晓光、墨迹天气、明势资本。', '优秀团队且充分磨合，源自多年沉淀股权投资项目，团队成员在同一项目下共事多年，特性互补，且以如香港中文大学、巴黎综合理工之数学博士、数据科学家等高层次技术人员、社群运营专家为核心，实力雄厚，其业务为中国平安、阳光保险数据天气精算技术服务。']
//           intro: `ValPromise旨在构建去中心化金融金融合约交易协议，支持各种公链部署。让人人都可以自由发行交易金融合约。目前项目已落地应用（天气合约、数字货币价格期权），领先诸多区块链项目，累计用户过10万人，月活比例超过80%，应用内所有合约均由社群主导，自由提交和交易，单合约日最高交易额超过1200万VPP(约20万USDT）
// 交易所：Fcoin
// 投资机构参与：分布式资本沈波，PreAngel Fund王利杰，温州资本，引力资本，裂变资本，Crypto Venture,首联资本，MDT基金会，QKC基金会，Themis基金会，OKEX超级节点帮实资本。项目的人民币业务公司，获得两轮投资，滴滴天使投资人王刚、腾讯创始人吴晓光、墨迹天气、明势资本
// 优秀团队且充分磨合，源自多年沉淀股权投资项目，团队成员在同一项目下共事多年，特性互补，且以如香港中文大学、巴黎综合理工之数学博士、数据科学家等高层次技术人员、社群运营专家为核心，实力雄厚，其业务为中国平安、阳光保险数据天气精算技术服务。`
        }
      }
    }
  },
  computed: {
    lang() {
      return this.text[this.query.lang||'cn']
    }
  }
}
</script>
