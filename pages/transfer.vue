<style lang="less">
  #__nuxt, #__layout, #page-root { min-width:auto;  height:100%; }
  #page-transfer {
    min-height:100%;
    background:url(~/assets/img/banner.jpg) no-repeat center / cover;
    display:flex; flex-direction:column; justify-content:center; align-items:center;
    h1 { margin:-2em 0 2em 0; font-size:30px; color:#fff; }
    .center { 
      width:36em; color:#fff; 
      img { display:block; margin:0 auto; }
      p { margin-top:20px; font-size:1em; line-height:1.3; }
      a { word-break:break-all; word-wrap:wrap; transition-duration:200ms; color:#1ba5fd; }
    }
  }
  .mobile #page-transfer {
    padding:60px 0;
    h1 {  margin:-2em 0 1.5em 0; }
    .center {
      width:70%;
    }
  }
</style>


<template>
  <div id="page-transfer">
    <h1>兑换 VPP</h1>
    <div class="center">
      <img src="~/assets/img/transfer/qrcode.png" alt="">
      <p>用以太坊钱包扫码转账或将ETH转向地址：<a href="https://etherscan.io/address/0x63ffad099717cc3fc0d83d001fb94740ae47ee46">0x63ffad099717cc3fc0d83d001fb94740ae47ee46</a>，智能合约将自动按1:50000兑换率将VPP转到您钱包，请稍后登录钱包查看VPP余额。如对交易有疑问请联系: 0755-33530815</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
