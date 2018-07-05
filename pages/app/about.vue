<style lang="less">
  #page-help {
    padding:10px 20px;
    p {
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
                <p>{{lang.intro}}</p>
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
          intro:'We are positioned in a decentralized specific financial asset, the Value Promise Protocol (VPP), which allows all public chains (which can support smart contracts and tokens) to have the ability to issue-transactions of specific financial assets, making people can create and trade financial contracts without a threshold. Specifically, everyone here can conduct risk management financial asset issuance-transactions such as commodities\foreign exchange futures, option derivatives, and index insurance. We refer to such a market as a system of “linked to objective open indicators, financial assets issued – traded”. The project has been applied to the site, with nearly 100,000 registered users and a monthly living rate of over 80%.'
        },
        cn:{
          intro:'我们定位于一个去中心化的特定金融资产发行-交易协议(Value Promise Protocol，简称VPP），让所有公链（能支持智能合约和代币发行）拥有特定金融资产发行-交易的能力，使得人人都可以无门槛创造和交易金融合约。具体来说，在这里人人可以进行商品\外汇期货，期权衍生品、指数化保险等风险管理金融资产发行-交易。我们把这样的市场，称为“挂钩客观公开指标的，金融资产发布-交易”体系 。项目已落地应用，注册用户近10万人，月活比例超80%。'
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
