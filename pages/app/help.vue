<style lang="less">
  #page-help {
    padding:10px 20px;
    // h1 {
    //   display: block;
    //   font-size: 2em;
    //   -webkit-margin-before: 1em;
    //   -webkit-margin-after: 1.25em;
    //   -webkit-margin-start: 0px;
    //   -webkit-margin-end: 0px;
    //   font-weight: bold;
    // }
    h3 {
      display: block;
      font-size: 14px;
      font-weight:normal;
      -webkit-margin-before: .7em;
      -webkit-margin-after: .7em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
      line-height:1;
    }
    p {
      display: block;
      -webkit-margin-before: .7em;
      -webkit-margin-after: .7em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
      font-size:12px;
      line-height:1;
    }
    li {
      margin-top:20px;
    }
    #footbar { 
      position:fixed; left:0; bottom:10px; width:100%; 
      a { color:skyblue; text-decoration:underline; }
    }
  }
</style>

<template>
  <div id="page-help">
    <!-- <h1>使用帮助</h1> -->
        <ul class="qa">
            <!-- <li>
                <h3>Q:如何充值VPP？</h3>
                <p>A: 首页——账户——充值，获取钱包地址，再进行转入操作。</p>
            </li>
            <li>
                <h3>Q: 如何提现VPP？</h3>
                <p>A: 首页——账户——提现，根据指引操作。</p>
            </li>
            <li>
                <h3>Q: 转出VPP要多久到账？</h3>
                <p>A: 正常情况下1个工作日到账，最多不超过3个工作日。</p>
            </li>
            <li>
                <h3>Q: 忘记登录密码，如何找回？</h3>
                <p>A:  打开 App——登录——忘记密码，根据提示找回。</p>
            </li> -->
            <li v-for="(item,i) in lang.qa" :key="`item-${i}`">
              <h3>Q: {{item.q}}</h3>
              <p>A: {{item.a}}</p>
            </li>
        </ul>
        <div id="footbar">
            <p style="line-height:1.5; text-align:center;">
              {{lang.footer.propmt}}
              <br><span v-html="lang.footer.contact"></span>
              </p>
        </div>
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
        'en': {
          qa:[
            { q:'How to recharge VPP?', a:'Home - Account - Recharge, get the wallet address, and then transfer.' },
            { q:'How to withdraw VPP?', a:'Home - Account - Withdrawal, follow the instructions.' },
            { q:'How long does it take to transfer VPP?', a:'Under normal circumstances, 1 working day will arrive, up to 3 working days.' },
          ],
          footer: {
            propmt:'If you have any questions, please contact the official assistant.',
            contact:'telegram: <a target="_blank" href="https://t.me/vpp_offical3">https://t.me/vpp_offical3</a>'
          }
        },
        'cn': {
          qa:[
            { q:'如何充值VPP？', a:'首页——账户——充值，获取钱包地址，再进行转入操作。' },
            { q:'如何提现VPP？', a:'首页——账户——提现，根据指引操作。' },
            { q:'转出VPP要多久到账？', a:'正常情况下1个工作日到账，最多不超过3个工作日。' },
          ],
          footer: {
            propmt:'如有任何疑问请联系官方小助理',
            contact:'微信号: valpromise-vpp'
          }
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
