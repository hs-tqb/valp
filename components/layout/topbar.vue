<style lang="less">
  @bg:#0f1421;
  #topbar { 
    position:fixed; top:0; left:0; z-index:100;
    width:100%; height:80px; 
    font-size:20px; line-height:80px; color:#fff;
    transition:all 300ms;

    #logo { 
      width:215px; height:100%; background:url(http://otydyl8j5.bkt.clouddn.com/valp/logo/logo-h-b.png?imageslim) no-repeat 20px center/152.6px auto; }
    .list-container {
      height:100%;
      // overflow:hidden;
      &#nav  {
        .switch { display:none; }
        ul { justify-content:flex-end; }
      }
      &#lang {
        height:100%;
        &.collapsed {
          background:transparent;
          .list {
            opacity:0;
            pointer-events:none;
          }
        }
      }
      .switch { 
        display:block; padding:0 15px; font-size:15px; transition-duration:300ms;
        &:hover, &.focus { color:#00a0e9; }
      }
      // &#lang .switch,
      .list a { 
        display:block; padding:0 24px; font-size:15px; transition:300ms; 
        &:hover, &.focus { color:#00a0e9; }
      }
    }
  }
  // pc端的语言栏
  .pc #topbar #lang {
    .switch:hover + .list,
    .list:hover {
      height:auto!important; 
      opacity:1!important;
      pointer-events:auto!important;
    }
    .list {
      position:absolute; top:70px; right:10px; 
      padding:15px; height:auto; line-height:40px;
      background-color:@bg;
      transition-duration:300ms;
      overflow:hidden;
      pointer-events:auto;
    }
  }
  // 移动端的语言栏
  .mobile #topbar {
    @hei:60px;

    height:@hei; line-height:@hei;
    .switch {
      position:absolute; top:0; z-index:10;
      width:@hei; height:@hei;
    }
    #nav {
      ul {
        justify-content:flex-start;
      }
      .switch {
        display:block; 
        background:url(http://otydyl8j5.bkt.clouddn.com/valp/switch.png?imageslim) no-repeat center/30px;
      }
    }
    #lang .switch {
      right:0;
      width:auto;
      white-space:pre;
    }
    .list-container {
      position:absolute; top:0; left:0;
      width:@hei; height:@hei; 
      // background:@bg; 
      overflow:visible;
      
      .list { 
        background:@bg;
        //  url(http://otydyl8j5.bkt.clouddn.com/valp/icons/logo-gray.png) no-repeat center ((@hei - 16px) / 2) /auto 16px;
        position:absolute; top:0; left:0;
        padding-top:@hei; width:100vw; height:100vh;
        // height:calc(~'100vh' - @hei); 
        text-align:center; 
        opacity:1;
        transition-duration:300ms;
        overflow:hidden;
      }
      &#lang { 
        left:auto; right:0; 
        .list { left:auto; right:0; }
      } 
      &.collapsed {
        background:transparent;
        overflow:visible;
        .list {
          height:0;
          opacity:0;
        }
      }
    }
  }
</style>

<template>
  <div id="topbar" class="flex flex-dir-row">
    <a class="fl" href="javascript:void(0)" data-anchor="banner" id="logo" @click="jumpToAnchor('/')"></a>
    <div id="nav" class="flex-1 list-container" :class="navsCollapsed?'collapsed':''">
      <a class="switch" href="javascript:void(0);" @click="showNavList"></a>
      <ul class="list flex-dir-row">
        <li v-for="(n,i) in lang.navs.items" :key="`nav${i}`">
            <a 
              :href="n.link||'javascript:void(0)'" 
              :target="n.external?'_blank':''"
              :data-anchor="n.anchor" 
              @click="jumpToAnchor(n)"
              >{{n.name}}</a>
        </li>
      </ul>
    </div>
    <div id="lang" class="list-container" :class="langsCollapsed?'collapsed':''">
      <a class="switch" href="javascript:void(0);" @click="showLangList">{{currLangName}}</a>
      <ul class="list">
        <li v-for="(l,i) in lang.langs" :key="`lang${i}`">
          <a 
            :class="l.type===lang.lang?'focus':''" 
            href="javascript:void(0);" 
            @click="setLang(l.type)">{{l.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import initializer from '~/assets/js/init'
export default {
  data() {
    return {
      navsCollapsed:true,
      langsCollapsed:true
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    currLangName() {
      return this.lang.langs.filter(l=>l.type===this.lang.lang)[0].name;
    }
  },
  methods: {
    showNavList() {
      this.langsCollapsed = true;
      this.navsCollapsed  = !this.navsCollapsed;
    },
    showLangList() {
      this.navsCollapsed  = true;
      this.langsCollapsed = !this.langsCollapsed;
    },
    setLang(t) {
      this.$store.commit('setLanguage', t);
      // this.$router.replace(this.$router.path'?lang='+t);
      this.$router.replace( this.$route.path + '?lang='+t );
      this.langsCollapsed = true;
    },
    jumpToAnchor(n) {
      this.navsCollapsed = true;
      if ( this.$route.path==='/' ) return;
      if ( n === '/' ) return location.href = '/?lang='+this.lang.lang;
      if ( !n.anchor ) return;
      location.href = '/?lang='+this.lang.lang+'#'+n.anchor;
    }
  },
  mounted() {
    initializer($);
  }
}
</script>


