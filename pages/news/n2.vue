<style>
  [data-page|=news] #topbar { background:#0f1421; }
  #page-news #topbar .panel { padding:0; height:100%; background-color:; }
  #page-news #footer { background-color:#0f1421; }
  .mobile #footer { display:none; }
  .mobile #page-news { padding:0 24px; }
</style>

<template>
  <div id="page-news">
    <div id="article">
      <h1>{{title}}</h1>
      <template v-for="(e,i) in paras">
        <template v-if="e.type==='p'">
          <p :key="`e${i}`" v-if="e.renderAsHTML" v-html="e.content"></p>
          <p :key="`e${i}`" v-else>{{e.content}}</p>
        </template>
        <img v-else-if="e.type==='img'" :src="e.src" :key="`e${i}`">
      </template>
    </div>
    <a href="javascript:$('html, body').animate({'scrollTop':0})" id="backToTop"></a>
    <footer1 />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import footer1 from '~/components/layout/footer'
export default {
  computed:mapState({
    title:(state)=>state.lang.article.a2.title,
    paras:(state)=>state.lang.article.a2.paras,
    lang :(state)=>state.lang.lang
  }),
  components: {
    footer1
  }
}
</script>

