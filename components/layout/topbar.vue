<style lang="less">
  #topbar { 
    position:fixed; top:0; left:0; z-index:100;
    width:100%; height:80px; 
    font-size:20px; line-height:80px; color:#fff;
    transition:all 300ms;
    overflow:hidden;
    /* background-color:rgba(0,0,0,0.3); */
    &.dark { background:rgba(0,0,0,0.7) }

    .menuSwitch { display:none;  }
    #logo { width:215px; height:100%; background:url(http://otydyl8j5.bkt.clouddn.com/valp/logo/logo-h-b.png?imageslim) no-repeat 20px center/152.6px auto; }
    #nav { height:100%; font-size:15px; }
    #nav li a { display:block; padding:0 24px; transition:300ms; }
    #nav li a:hover,
    #nav li a.focus { color:#00a0e9; }
    #func { float:right; }
  }
  .mobile #topbar #nav { height:100vh; }
</style>

<template>
  <div id="topbar" class="collapsed" style="">
    <a class="fl" href="javascript:void(0)" data-anchor="banner" id="logo" @click="jumpToAnchor('/')"></a>
    <ul id="nav" class="fr flex-dir-row">
      <!-- 
      <li><a href="javascript:void(0)" data-anchor="technical">Highligts</a></li>
      <li><a href="javascript:void(0)" data-anchor="insurance">Weather Insurance</a></li>
      <li><a href="javascript:void(0)" data-anchor="roadmap">Roadmap</a></li>
      <li><a href="javascript:void(0)" data-anchor="team">Team</a></li>
      <li><a id="showRaising" href="javascript:void(0)">KYC</a></li>
       -->
       <li v-for="(n,i) in lang.navs.items" :key="`nav${i}`">
          <a 
            :href="n.link||'javascript:void(0)'" 
            :target="n.external?'_blank':''"
            :data-anchor="n.anchor" 
            @click="jumpToAnchor(n)"
            >{{n.name}}</a>
       </li>

      <!-- <li><a href="/zh">中文</a></li> -->
      <li v-for="(l,i) in lang.langs" :key="`lang${i}`">
        <!-- <nuxt-link class="btn-lang" :to="`?lang=${l.type}`">{{l.name}}</nuxt-link> -->
        <a class="btn-lang" href="javascript:void(0);" @click="setLang(l.type)">{{l.name}}</a>
      </li>
    </ul>
    <a class="menuSwitch" href="javascript:void(0);"></a>
  </div>
</template>

<script>
import initializer from '~/assets/js/init'
export default {
  computed: {
    lang() {
      return this.$store.state.lang
    }
  },
  methods: {
    setLang(t) {
      this.$store.commit('setLanguage', t);
      // this.$router.replace(this.$router.path'?lang='+t);
      this.$router.replace( this.$route.path + '?lang='+t );
    },
    jumpToAnchor(n) {
      if ( this.$route.path==='/' ) return;
      if ( n === '/' ) return location.href = '/?lang='+this.lang.lang;
      if ( !n.anchor ) return;
      // this.$router.push('/?lang='+this.lang.lang+'#'+n.name)
      location.href = '/?lang='+this.lang.lang+'#'+n.anchor;
    }
  },
  mounted() {
    initializer($);
  }
}
</script>


