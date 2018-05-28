<style lang="less">

  #__nuxt, #__layout, #page-root { min-width:auto;  height:100%; }
  #page-exchange {
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
      a:last-child { margin-left:10px; color:#1ba5fd; }
      .address { color:#1ba5fd; }
    }
  }
  .mobile #page-exchange {
    padding:60px 0;
    h1 {  margin:-2em 0 1.5em 0; }
    .center {
      width:70%;
    }
    .d2 { padding:10px; }
  }
</style>


<template>
  <div id="page-exchange">
    <div class="d1">
      <h1>{{exchange.title}}</h1>
      <div class="center">
        <img :src="exchange.img" alt="">
        <p v-html="exchange.desc"></p>
      </div>
    </div>
    <div class="d2">
      <img :src="exchange.guide[0]" alt="">
      <img :src="exchange.guide[1]" alt="">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import path from 'path'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      exchange  :state=>state.lang.exchange
    }),
  },
}
</script>
