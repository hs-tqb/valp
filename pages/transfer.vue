<style lang="less">

  #__nuxt, #__layout, #page-root { min-width:auto;  height:100%; }
  #page-transfer {
    background:url(~/assets/img/banner.jpg) no-repeat center / cover;
    height:100%;
    overflow:auto;
    -webkit-overflow-scrolling:touch;
    .d1 { 
      height:90vh; 
      display:flex; flex-direction:column; justify-content:center; align-items:center;
    }
    .d2 {
      // display:flex; flex-direction:column; justify-items:center; justify-content:center;
      padding:10px 0;
      img { display:block; margin:10px auto; }
    }
    h1 { margin:-2em 0 2em 0; font-size:30px; color:#fff; }
    .center { 
      width:36em; color:#fff; 
      img { display:block; margin:0 auto; }
      p { margin-top:20px; font-size:1em; line-height:1.3; }
      a { word-break:break-all; word-wrap:wrap; transition-duration:200ms; }
      .address { color:#1ba5fd; }
    }
  }
  .mobile #page-transfer {
    padding:60px 0;
    h1 {  margin:-2em 0 1.5em 0; }
    .center {
      width:70%;
    }
    .d2 { padding:10px; }
  }
</style>


<template>
  <div id="page-transfer">
    <div class="d1">
      <h1>兑换 VPP</h1>
      <div class="center">
        <img src="~/assets/img/transfer/qrcode.png" alt="">
        <p>用以太坊钱包扫码转账或将ETH转向地址：<a class="address" target="_blank" href="https://etherscan.io/address/0x6f89544bc460f15315086f411b9c1fe5c8cfb1f1">0x6f89544bc460f15315086f411b9c1fe5c8cfb1f1</a>，智能合约将自动按1:52000兑换率将VPP转到您钱包，请稍后登录钱包查看VPP余额。转账前务必看下图中的说明，否则交易可能失败。如对交易有疑问请联系: <a href="tel:0755-33530815">0755-33530815</a></p>
      </div>
    </div>
    <div class="d2">
      <img src="~/assets/img/transfer/e1.jpg" alt="">
      <img src="~/assets/img/transfer/e2.jpg" alt="">
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
