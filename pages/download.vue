<style lang="less">
  #__nuxt, #__layout, #page-root { min-width:auto;  height:100%; }
  #page-download {
    padding:60px; min-height:100%; font-size:16px;
    background:url(~/assets/img/banner.jpg) no-repeat center / cover;
    display:flex; flex-direction:column; justify-content:center; align-items:center;
    h1 { margin:2em 0; font-size:30px; color:#fff; }
    .center { 
      width:280px; color:#fff; 
      img { display:block; margin:14px auto; }
      p { margin-top:20px; font-size:1em; line-height:1.3; }
      a:hover { transition-duration:200ms; color:#1ba5fd; }
    }
  }
  .mobile #page-download {
    padding:60px 0;
    h1 {  margin:0; text-align:center; }
    .center {
      width:80%;
    }
  }
</style>


<template>
  <div id="page-download">
    <h1>{{download.title}}</h1>
    <div class="center">
      <p>{{download.desc}}</p>
      <p>{{download.platform}}</p>
      <img :src="download.img" alt="">
      <a :href="download.link.url" target="_blank">{{download.link.text}}</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      download  :state=>state.lang.download
    })
  }
}
</script>
