<style lang="less">
  #footer { 
    position: relative;
    z-index:100;
    .panel > div {
      background:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/logo-gray.png) no-repeat center; 
    }
    ul {
      // &:nth-child(1) {float:left}
      // &:nth-child(2) {}
      a { display:block; padding:0 35px; line-height:130px; font-size:24px; color:#999; transition-duration:300ms; }
      a:hover { color:#00a0e9; }
    }
    p { margin-top:20px; font-size:16px; text-align:center; color:#e6e6e6;  }
  }
</style>

<template>
  <div id="footer">
    <div class="panel">
      <div class="flex-dir-row justify-space-between">
        <ul class="flex-dir-row">
          <li v-for="(n,i) in leftNavs" :key="`ln${i}`">
            <a href="javascript:void(0);" :data-anchor="n.anchor" @click="jumpToAnchor(n)">{{n.name}}</a>
          </li>
        </ul>
        <ul class="flex-dir-row">
          <li v-for="(n,i) in rightNavs" :key="`rn${i}`">
            <a href="javascript:void(0);" :data-anchor="n.anchor" @click="jumpToAnchor(n)">{{n.name}}</a>
          </li>
        </ul>
      </div>
      <p>Copyright © 2018 ValPromise. All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    navs() {
      return this.$store.state.lang.navs.items.filter(n=>n.inFooter);
    },
    leftNavs() {
      return this.navs.slice(0,Math.floor(this.navs.length/2));
    },
    rightNavs() {
      return this.navs.slice(Math.floor(this.navs.length/2),Math.floor(this.navs.length));
    },
    lang() {
      return this.$store.state.lang;
    }
  },
  methods: {
    backToHome() {
      this.$router.push('/?lang='+this.$store.state.lang.lang);
    },
    jumpToAnchor(n) {
      if ( this.$route.path==='/' ) return;
      if ( !n.anchor ) return;
      // this.$router.push('/?lang='+this.lang.lang+'#'+n.name);
      location.href = '/?lang='+this.lang.lang+'#'+n.anchor;
    }
  }
}
</script>
