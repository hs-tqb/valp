<style lang="less">
  @import url('~assets/css/variable.less');
  #page-confirm { 
    height:100%; display:flex; flex-direction:column;
    background-color:#ddd;
    .bold { font-weight:600; color:@color-primary; }
    #wallet { 
      padding:20px 0; background-color:#fff; text-align:center; 
      h1 { margin-bottom:10px; font-size:18px; }
      input[type=button] { height:auto; }
      #vpp-wallet {
        display:flex;
        margin:10px 20px;
        input[type=text] { 
          flex:1; padding-right:15px; line-height:35px; text-align:left; 
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .btn.primary { margin-top:10px; width:120px; .radius(4px); }
    }
    #tips { 
      padding:25px;
      background-color:#ddd;
      p { margin-bottom:10px; line-height:1.6; }
    }

    // 弹窗
    @import url(~assets/css/icons/failure.less);
    #dialog-result {
      // background:transparent;
      .outer-wrapper { padding:20px; height:100%; display:flex; align-items:center; }
      .inner-wrapper { 
        .relative; display:flex; flex-direction:column; word-wrap:break-word; word-break:break-all;
        margin-top:-50px; padding:15px; 
        background:#fff; 
        .radius(10px); 
        img { .block; margin:0 auto; }
        h2 { margin:20px 0; font-size:16px; line-height:1.4; text-align:center; color:@color-primary; }
        // p { line-height:1.4; font-size:12px; }
        // p + a { .block; margin:25px 0; }
        // .placeholder { .flex(1); }
        h2 + a { margin:10px; line-height:35px; .radius(4px); }
        .website a { padding:5px 0; }

        &.failure { 
          h2 {color:@color-warning; }
          p { text-align:center; }
        }
      }
      @btnSize:60px;
      .close { 
        position:absolute; left:50%; bottom:@btnSize * -1; 
        margin-left:@btnSize / -2; width:@btnSize; height:@btnSize; 
        background:url(@icon-failure) no-repeat center;
        background-size:@btnSize / 2 auto;
      }
    }
  }
</style>

<template>
  <div id="page-confirm">
    <div id="wallet" class="panel2">
      <h1>充值地址</h1>
      <img :src="qrcode" width="120" height="120" />
      <div id="vpp-wallet">
        <!-- <p ref="vpp-wallet-address">sdksdjhskskdjflskdjflsdksdjhskskdjflskdjflsdksdjhskskdjflskdjflsdksdjhskskdjflskdjfl.sl</p> -->
        <input readonly id="vpp-wallet-address" type="text" :value="wallet">
        <input type="button" class="btn" data-clipboard-target="#vpp-wallet-address" value="复制"/>
      </div>
      <input type="button" class="btn primary" value="我已转账" @click="confirm" />
    </div>
    <div id="tips" class="panel2">
      <p class="bold">1.  充值提现过程中一切转账手续费由平台承担，平台七日年化收益率为5%。</p>
      <p class="bold">2. 利息自充值后第二个自然日开始计算。提交提现申请后可于当天完成提现操作。</p>
      <p>3. 请勿向该地址充值除ETH之外的资产，任何充入ETH地址的非ETH资产将不可找回。</p>
      <p>4. ETH充值需要网络确认才能到账。具体到账时间将以网络繁忙度而定，一般在30min以内。</p>
      <p>5. 最小充值金额为0.1 ETH</p>
    </div>

    <!-- 弹窗 -->
    <div id="dialog-result" class="dialog-container" :class="dialogResult.show?'show':''">
      <div class="outer-wrapper">
        <div class="inner-wrapper" :class="dialogResult.state" v-if="dialogResult.state">
          <a href="javascript:void(0)" class="close" @click="dialogResult.show=false"></a>
          <img src="~/assets/img/funds/icons/success.png" width="60" height="60" v-if="dialogResult.state==='success'">
          <img src="~/assets/img/funds/icons/failure.png" width="60" height="60" v-else>
          <h2>{{dialogResult[dialogResult.state].title}}</h2>
          <!-- <p>{{dialogResult[dialogResult.state].text}}</p> -->
          <!-- <a href="http://valp.io?lang=zh-tw">
            <img src="~/assets/img/funds/activity.png">
          </a> -->
          <a href="javascript:void(0)" class="btn primary" @click="$router.push('/funds/account')">进入账户</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  // head() {
  //   return {
  //     script:[{src:'/js/clipboard.min.js'}],
  //   }
  // },
  layout:'funds',
  data () {
    return {
      qrcode:'',
      wallet:'',
      dialogResult: {
        show:false,
        state:'success',
        success: {
          title:'提交成功！我们会在1个工作日内完成审核。',
          // text :'xxxxxxxxxx'
        },
        failure: {
          title:'title.....',
          // text :'xxxxxxxxxx'
        }
      }
    }
  },
  methods: {
    initCopy() {
      var clipboard = new ClipboardJS('.btn');
      var vm = this;
      clipboard.on('success', function(e) {
        e.clearSelection();
        vm.$store.commit('showMessageDialog', {type:'success', text:'复制成功'});
      });
      clipboard.on('error', function(e) {
        document.querySelector('#vpp-wallet-address').removeAttribute('readonly');
        vm.$store.commit('showMessageDialog', {type:'failure', text:'复制失败, 请手动选择复制'});
      });

    },
    confirm() {
      this.dialogResult.show  = true;
    },
    documentReady() {
      document.addEventListener('DOMContentLoaded',()=>{
        //注销时间，避免重复触发
        document.removeEventListener('DOMContentLoaded',this.documentReady,false);
        this.initCopy();
      },false);
    }
  },
  mounted() {
    if ( !localStorage.getItem('token') ) {
      setTimeout(()=>{
        this.$router.replace('/funds/login');
      }, 1000);

      return this.$store.commit('showMessageDialog', {
        type:'failure', 
        html:"无效token<br>即将跳转至登录页面"
      });
    }
    // console.log( console.log( localStorage.getItem('token') ) )
    
    this.$http.post('/customer/getDepositAccount', { token:localStorage.getItem('token') })
    .then(resp=>{
      resp = resp.data;
      if ( resp.state !== 1 ) {
        let text = resp.message;
        if ( resp.errorCode==='1001' ) {
          text += '<br>即将跳转至登录页面';
          setTimeout(()=>{
            this.$router.replace('/funds/login');
          }, 1000);
        }
        return this.$store.commit('showMessageDialog', {
          type:'failure', 
          html:text
        });
      }
      this.qrcode = resp.data.depositAccountCode;
      this.wallet = resp.data.depositAccount;
    });

    // 载入点击复制的插件
    var script = document.createElement('script');
    script.src = '/js/clipboard.min.js';
    script.onload = this.initCopy;
    document.body.appendChild(script);
  }
}
</script>
