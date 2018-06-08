<style>
  [data-page|=news] #topbar { background:#0f1421; }
  #page-news #topbar .panel { padding:0; height:100%; background-color:; }
  #page-news #footer { background-color:#0f1421; }
  .mobile #footer { display:none; }
  .mobile #page-news { padding:0 24px; }
  #page-news b { font-weight:bold; }
  /* #page-news #article p { text-indent:0; } */
  #page-news #article h3 { margin:50px 0 20px 0; font-weight:600; }
  #page-news #article h3 + p{ text-indent:0; }
</style>

<template>
  <div id="page-news">
      {{ article?'true':'false' }}
    <div id="article" v-if="!!article">
      <h1>{{article.title}}</h1>
      <template v-for="(e,i) in article.paras">
        <!-- <template v-if="e.type==='p'">
          <p :key="`e${i}`" v-if="e.renderAsHTML" v-html="e.content"></p>
          <p :key="`e${i}`" v-else>{{e.content}}</p>
        </template> -->
        <p v-if="e.type==='p'" v-html="e.content"></p>
        <img v-else-if="e.type==='img'" :src="e.src" :key="`e${i}`">
        <h3 v-else-if="e.type==='h3'" v-html="e.content"></h3>
        <p v-else-if="e.type==='osma'&&osma" v-html="osma"></p>
      </template>
      <!-- <p v-for="(t,i) in texts" :key="`p${i}`" v-html="t.content"></p> -->
      <!-- <p v-if="osma" v-html="osma"></p> -->
      <!-- <img v-for="(img,i) in imgs" :key="`i${i}`" :src="img.src"> -->
    </div>
    <a href="javascript:$('html, body').animate({'scrollTop':0})" id="backToTop"></a>
    <footer1 />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import footer1 from '~/components/layout/footer'
export default {
  asyncData({route,store, params}) {
    let path = route.path;
    return {
      path,
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang.lang;
    },
    osma() {
      return this.$store.state.lang.news.osma;
    },
    article(ps,idx) {
      return this.$store.state.lang.news.items.filter(n=>n.link===this.path)[0];
    },
    texts(ps) {
      return this.article.paras.filter(p=>p.type==='p');
    },
    imgs(ps) {
      return this.article.paras.filter(p=>p.type==='img');
    }
  },
  components: {
    footer1
  },
}
</script>

