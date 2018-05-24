<style lang="less">
  #__nuxt, #__layout, #page-root { min-width:auto;  height:100%; }
  #page-download {
    min-height:100%; font-size:16px;
    background:url(~/assets/img/banner.jpg) no-repeat center / cover;
    display:flex; flex-direction:column; justify-content:center; align-items:center;
    h1 { margin:-2em 0 2em 0; font-size:30px; color:#fff; }
    .center { 
      width:280px; color:#fff; 
      img { display:block; margin:14px auto; }
      p { margin-top:20px; font-size:1em; line-height:1.3; }
      a:hover { transition-duration:200ms; color:#1ba5fd; }
    }
  }
  .mobile #page-download {
    padding:60px 0;
    h1 {  margin:-2em 0 0 0; }
    .center {
      width:70%;
    }
  }
</style>


<template>
  <div id="page-download">
    <h1>ValPromise应用下载</h1>
    <div class="center">
      <p>ValPromise (价值承诺协议）是人人都可创建和发行自己金融合约（衍生品）的平台。</p>
      <p>安卓版APP:</p>
      <img src="http://od3p9hvyr.bkt.clouddn.com/valpromise_app_v1.1.jpeg" alt="">
      <a href="http://download.valp.io/VarPromise_V1.1.0.apk" target="_blank">扫码或点此下载</a>
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
