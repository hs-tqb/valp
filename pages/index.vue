<style lang="less">
@color-primary:#1ba5fd;
#page-home {
  color:#fff;
  h2 { color:@color-primary; }
  .card {
    display:block;
    width:320px;
    img.avatar { display:block; margin:0 auto; }
    h3 { margin:21px 0; text-align:center; }
  }
  .panel { position:relative; margin:0 auto; }
  .addition img { display:block; margin:0 auto; }

  #news  {
    // .panel { width:100%; padding-left:10px; padding-right:10px; }

    // position:relative;
    // .panel { overflow:hidden; }
    overflow:hidden;
    .sliderWrapper { overflow:hidden; }
    .icon {
      position:absolute; top:0; width:40px; height:100%; display:none;
      background:no-repeat center; cursor:pointer; opacity:0.7; transition-duration:400ms;
      &:hover { opacity:1; }
      &.prev { left:-70px; background-image:url(~/assets/img/icons/prev.png) }
      &.next { right:-70px; background-image:url(~/assets/img/icons/next.png) }
      &[disabled] { opacity:0.3!important; }
    }
    ul {
      transition-duration:300ms;
      li { flex:1; }
    }

    .panel[data-slide-enable] {
      ul { flex-wrap:nowrap; }
      .icon { display:block; }
      .card { width:200px; }
    }

    .card { margin:0; padding:0 5px; width:100%; height:auto; }
  }
  #about {
    p { margin:20px auto; width:900px; text-align:center; }
  }
  #highlights {
    .card { width:370px; }
  }
  #team {
    .card {
      margin-bottom:30px; width:33.33%; padding:18px 24px;
      .avatar { margin:0 auto; width:160px; height:160px; border-radius:90px; background:no-repeat center/cover; }
    }
  }
  #investor {
    .card { padding:18px 0; }
  }
  #partners {
    position:relative;
    &:after {
      position:absolute; left:0; top:0; z-index:1; width:100%; height:100%; background:rgba(0,0,0,0.3);
      content:'\200B';
    }
    .panel { z-index:10; }
    height:670px; background:url(http://otydyl8j5.bkt.clouddn.com/valp/partners/bg.jpg?imageslim) no-repeat center/cover;
    h3 { margin:40px 0; }
    img+h3 { margin-top:60px; }
  }
  #contact {
    height:530px;
    .panel > div {
      padding-top:30px;
      // padding:30px 0;
      // float:left;
      h3 { margin-bottom:30px; font-size:30px; color:@color-primary; }
      .join {
        h3 + p { margin:33px 0; }
        div {
          position:relative;
          span {
            position:absolute; top:60px; left:5px;
            &.invalid,
            &.failed { color:#f56c6c; }
            &.successful { color:#67c23a; }
          }
        }
        input {
          height:50px; line-height:1; font-size:24px; border:0 none; outline:0 none; border-radius:18px;
          &[type=email] { margin-right:20px; padding:0 25px; color:#333; }
          &[type=button] { padding:0 50px; color:#fff; background:@color-primary; cursor:pointer; }
        }
      }
      .social {
        h3 { margin-top:100px; }
        a { position:relative; float:left; width:90px; height:90px; }
        a:before,
        a:after { position: absolute; top:0; left:0; width:100%; height:100%; background:no-repeat center; opacity:0; transition:300ms; content:'\200B'; }
        a:before { opacity:1; }
        a:hover:before { opacity:0; }
        a:hover:after { opacity:1; }
        a.wc:before { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/wc.png?imageslim); }
        a.qq:before { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/qq.png?imageslim); }
        a.em:before { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/em.png?imageslim); }
        a.sn:before { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/sn.png?imageslim); }
        a.tg:before { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/tg.png?imageslim); }
        a.fb:before { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/fb.png); }
        a.tt:before { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/tt.png?imageslim); }

        a.wc:after  { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/wc-focus.png?imageslim); }
        a.qq:after  { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/qq-focus.png?imageslim); }
        a.em:after  { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/em-focus.png?imageslim); }
        a.sn:after  { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/sn-focus.png?imageslim); }
        a.tg:after  { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/tg-focus.png?imageslim); }
        a.fb:after  { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/fb-focus.png); }
        a.tt:after  { background-image:url(http://otydyl8j5.bkt.clouddn.com/valp/icons/tt-focus.png?imageslim); }

        a.wc i {
          position:absolute; left:-130px; bottom:90px; padding:25px; width:250px; height:250px;
          background:#eaeaea;
          /* background:#eaeaea url(http://otydyl8j5.bkt.clouddn.com/valp/icons/wc-qrcode.png?imageslim) no-repeat center /200px auto;  */
          border:1px solid #ccc; border-radius:10px;
          // pointer-events:none;
          visibility:hidden;
          opacity:0; transform:translate3d(0,-10px,0);
          transition-duration:300ms;
        }
        a.wc i img { display:block; width:200px; height:200px; }
        a.wc i:hover,
        a.wc:hover i {
          // pointer-events:all;
          visibility:visible;
          opacity:1; transform:translate3d(0,0,0) }
      }
      &.right {
        .timeline-Widget { background:#000; }
      }
    }
  }
}
#page-root.pc.en,
#page-root.pc.zh-tw {
  #team .card { width:33.33%; }
}
// 移动端
.mobile #page-home {
  h3 { padding:0 18px; }
  .card  { width:100%; padding:18px 10px; }
  .panel { width:100%; }
  #news {
    // padding:0;
    .card { margin-top:10px; padding:0; width:100%!important; }
  }
  #white-paper h1 { font-size:30px; }
  #about p { padding:0 15px; width:auto; }
  #team .card { width:100%; padding:18px 10px; }
  #partners { height:470px; }
  #contact {
    height:auto;
    .panel {
      text-align:center;
      > div {
        h3 { margin-bottom:10px;  padding:0 18px; }
        .join {
          p { margin:25px; line-height:1.2; }
          input[type=email] { width:90%; margin:0; }
          input[type=button] { margin-top:25px; }
          span { left:6%; top:58px; }
        }
        .social {
          h3 {margin-top:40px; }
          div { display:flex; flex-direction:row; justify-content:space-around; }
          a { float:none; }
        }
      }
    }
  }
  #footer { display:none; }

}
// 弹窗组件
.alertify-notifier.ajs-bottom ajs-right,
.ajs-message.ajs-visible { box-sizing:content-box; color:#212529; font-family:TitilliumWeb; }
#alertify-fixed-para {
  font:inherit;
  text-align:inherit;
  color:inherit;
}
#alertify-fixed-btn {
  display:block;
  margin:15px 10px 0 10px;
  line-height:48px;
  text-align:center; color:@color-primary; border:1px solid @color-primary;
  font-size: 1.125rem;
  // padding: 0.5rem 2.9rem;
  border-radius:30px;
}
.tr#page-root {
  #investor .card p { text-align:center; }
}
</style>

<template>
  <div id="page-home">
    <!-- 首图 -->
    <div id="slideshow">
      <canvas id="canvas"></canvas>
      <!-- 占位 -->
      <div id="banner" class="anchor">
      </div>
      <div id="white-paper">
        <a id="logo" href="javascript:void(0);"></a>
        <h1>{{slogan}}</h1>
        <div class="btn-group">
          <a id="white-paper-download" :href="whitePaper.link" target="_blank">{{whitePaper.button}}</a>
          <a :class="presaleItem.clsn" :href="presaleItem.link" target="_blank">{{presaleItem.name}}</a>
          <!-- <nuxt-link :to="candyHandingOut.link" v-if="candyHandingOut">{{candyHandingOut.text}}</nuxt-link> -->
          <a :href="candyHandingOut.link" v-if="candyHandingOut">{{candyHandingOut.text}}</a>
        </div>
        <p>
          <a id="join-btn" href="https://t.me/ValPromise" target="_blank">{{community.button}}</a>
        </p>
      </div>
    </div>
    <!-- 新闻 -->
    <div id="news" class="gray">
      <div class="panel" :data-slide-enable="newsItems.length>6">
        <span class="icon prev" @click="newsSlide(newsSlider.page===0?'':'prev')" :disabled="newsSlider.page===0"></span>
        <span class="icon next" @click="newsSlide(newsItems.length<(6*(newsSlider.page+1))?'':'next')" :disabled="newsItems.length<(6*(newsSlider.page+1))"></span>
        <div class="sliderWrapper">
          <ul class="flex-dir-row" ref="slideElem">
            <li v-for="(n,i) in newsItems" :key="`news${i}`" v-if="n.paras.every(n=>!!n)">
              <a
                :href="n.link+(lang?'?lang='+lang:'')"
                class="card"
                target="_blank"
              ><img :src="n.img" ></a>
              <!-- <nuxt-link v-else
                :to="`${n.link}?lang=${lang}`"
                class="card"
                target="_blank"
              ><img :src="n.img" ></nuxt-link> -->
            </li>
            <li>
              <a class="card" :href="news.fixedItem.link" target="_blank"><img :src="news.fixedItem.img" alt=""></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 关于 -->
    <div id="about" style="background:#0d0a19;">
      <div class="panel">
        <h2>{{about.title}}</h2>
        <p>{{about.desc}}
          <br>
          <br>
        </p>
        <img src="http://otydyl8j5.bkt.clouddn.com/valp/chain.jpg?imageslim" style="display:block; margin:0 auto;">
      </div>
    </div>
    <!-- 技术与平台 -->
    <div id="highlights" class="anchor">
      <div class="panel">
        <h2>{{highlights.title}}</h2>
        <div class="flex-dir-row justify-space-between">
          <div class="card" v-for="(h,i) in highlights.items" :key="`hl${i}`">
            <div class="icon" :style="`background-image:url(${h.img})`"></div>
            <div class="desc">
              <h3>{{h.title}}</h3>
              <p>{{h.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 应用场景 -->
    <div id="realization" class="addition">
      <div class="panel">
        <h2>{{realization.title}}</h2>
        <img :src="realization.img" alt="">
      </div>
    </div>
    <!-- 天气产品 -->
    <div id="production">
      <div class="panel">
        <h2>{{production.title}}</h2>
        <p style="margin:-20px 0 40px 0; font-size:20px;">
          {{production.desc}}
        </p>
        <ul class="flex-dir-row justify-space-between">
          <li v-for="(p,i) in production.items" :key="`prod${i}`">
            <h3>{{p.title}}</h3>
            <div class="border"></div>
            <p>{{p.desc}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 团队 -->
    <div id="team" class="anchor">
      <div class="panel">
        <h2>{{team.title}}</h2>
        <div class="flex-dir-row">
          <div class="card" v-for="(m,i) in team.items" :key="`m${i}`">
            <div class="avatar" :style="`background-image:url(${m.avatar})`"></div>
            <h3>{{m.name}}</h3>
            <p>{{m.desc}}</p>
          </div>
          <!-- <div class="avatar flex-dir-row justify-space-between flex-1">
            <div class="item" :class="i===0?'focus':''" v-for="(m,i) in team.items" :key="`member-${i}`">
              <div :style="`background:url(${m.avatar}) no-repeat center`"></div>
              <h3>{{m.name}}</h3>
            </div>
          </div>
          <div class="intro flex-dir-row flex-1">
            <p :class="i===0?'show':''" v-for="(m,i) in team.items" :key="`member-intro-${i}`">
              <b v-html="m.title"></b>
              <br>{{m.desc}}
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <!-- 团队背景 -->
    <div id="team-background" class="addition">
      <div class="panel">
        <h2>{{team.background.title}}</h2>
        <img :src="team.background.institutions" alt="">
      </div>
    </div>
    <!-- 投资者 & 顾问 -->
    <div id="investor" class="anchor">
      <div class="panel">
        <h2>{{investors.title}}</h2>
        <div class="flex-dir-row justify-space-around">
          <div class="card" v-for="(a,i) in investors.items" :key="`adv${i}`">
            <div class="avatar" :style="`background-image:url(${a.avatar});`"></div>
            <img class="avatar" :src="a.avatar" alt="">
            <h3>{{a.name}}</h3>
            <p>{{a.desc}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 投资机构 -->
    <div id="investor-agency" class="addition">
      <div class="panel">
        <h2>{{investors.agency.title}}</h2>
        <img :src="investors.agency.institutions" alt="">
      </div>
    </div>
    <!-- 合作伙伴 -->
    <div id="partners">
      <div class="panel">
        <h2>{{partners.title}}</h2>
        <h3>{{partners.institutions.title}}</h3>
        <img :src="partners.institutions.trademark" alt="">
        <h3>{{partners.enterprise.title}}</h3>
        <img :src="partners.enterprise.trademark" alt="">
      </div>
    </div>
    <!-- 路线图 -->
    <div id="roadmap">
      <div class="panel">
        <h2>{{roadmap.title}}</h2>
        <img :class="roadmap.img[platform].clsn" :src="roadmap.img[platform].src" alt="">
      </div>
    </div>
    <!-- 联系我们/注册 -->
    <div id="contact" class="anchor">
      <div class="panel flex-dir-row">
        <div class="left flex-3">
          <!-- {{join}} -->
          <div class="join" v-if="true">
            <h3>{{join.title}}</h3>
            <p>{{join.desc}}</p>
            <div>
              <input type="email" :placeholder="join.placeholder" v-model.trim="email.value" @input="emailInput"/>
              <input type="button" :value="join.button" @click="register"/>
              <span :class="email.note">{{join.prompt[email.note]}}</span>
            </div>
          </div>
          <div class="social">
            <h3>{{contact.title}}</h3>
            <div>
              <a href="https://www.facebook.com/hiValPromise/" target="_blank" class="icon fb"></a>
              <a href="https://twitter.com/ValPromise" target="_blank" class="icon tt"></a>
              <a href="https://t.me/ValPromise" target="_blank" class="icon tg"></a>
              <a href="javascript:void(0)" class="icon wc"><i><img src="http://otydyl8j5.bkt.clouddn.com/valp/icons/wc-qrcode.png?imageslim?imageslim" alt=""></i></a>
              <a href="mailto:hi@valp.io" class="icon em"></a>
            </div>
          </div>
        </div>
        <div class="right twitter flex-2">
          <template v-if="docMounted">
          <a class="twitter-timeline" href="https://twitter.com/Valpromise?ref_src=twsrc%5Etfw"
            data-theme="dark"
            data-height="440"
            data-chrome="noheader nofooter noborders transparent"
          >Tweets by Valpromise</a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </template>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <footer1 />
  </div>
</template>

<script>
// import initializer from '~/assets/js/init'
import { mapState } from 'vuex'
import contact from '~/components/layout/contact'
import footer1 from '~/components/layout/footer'
export default {
  data() {
    return {
      docMounted:false,
      email:{
        value:'',
        note :'',
        hasChange:false,
        // invalid:'无效邮箱',
        // failed:'发送失败',
        // successful:'注册成功',
      },
      hasReverse:false,
      newsSlider: {
        page:0,
        width:200,
        limit:6,
      }
    }
  },
  computed: {
    // ...mapState(['lang'])
    platform () {
      return typeof window === 'object'? window._platform: 'pc'
    },
    ...mapState({
      platform  :state=>state.platform,
      lang      :state=>state.lang.lang,
      langs     :state=>state.lang.langs,
      navs      :state=>state.lang.navs,
      slogan    :state=>state.lang.slogan,
      whitePaper:state=>state.lang.whitePaper,
      candyHandingOut:state=>state.lang.candyHandingOut,
      community :state=>{
        if (typeof window === 'object') {
          window._community = state.lang.community;
        }
        return state.lang.community;
      },
      news      :state=>state.lang.news,
      about     :state=>state.lang.about,
      highlights:state=>state.lang.highlights,
      realization:state=>state.lang.realization,
      production:state=>state.lang.production,
      roadmap   :state=>state.lang.roadmap,
      team      :state=>state.lang.team,
      investors :state=>state.lang.investors,
      partners  :state=>state.lang.partners,
      join  :state=>state.lang.join,
      contact   :state=>state.lang.contact,
      presale   :state=>state.lang.presale,
    }),
    newsItems() {
      return ([].concat(this.news.items)).reverse();
    },
    presaleItem() {
      return this.navs? (this.navs.items.filter(t=>{
        return t.name==='Presale'||t.sign==='presale'
      })[0]||{}):{}
    }
  },
  methods: {
    emailInput() {
      // if ( this.email.value )
      this.email.note = '';
      this.email.hasChange = true;
    },
    register() {
      if ( !this.email.value || !this.email.hasChange ) return;
      this.email.hasChange = false;
      if ( !/[a-zA-Z0-9][a-zA-Z0-9-_.]*@[a-zA-Z0-9]+\.[a-zA-Z]+/.test(this.email.value) ) {
        return this.email.note = 'invalid';
      }
      $.ajax({
        type:'post',
        url :'http://bot.valp.io/botMail/insertBotMail',
        data:{ email:this.email.value },
        success:(resp)=> {
          if ( resp.state === 1 ) {
            this.email.note = 'successful';
            alertify.message('<span style="color:#67c23a">'+this.join.note.successful+'</span>');
          } else {
            this.email.note = 'failed';
          }
        },
        error:()=>{
          this.email.note = 'failed';
        }
      })
    },
    newsSlide(direction) {
      if ( !direction ) return;
      let s = 0,
          c = this.$refs['slideElem'];
      let { width, page, limit } = this.newsSlider;
      let len  = this.newsItems.length
      let elem = this.$refs['slideElem']


      let temp = 0
      if ( direction === 'prev' ) {
        page = this.newsSlider.page += -1
      }
      else if ( direction === 'next' ) {
        page = this.newsSlider.page += 1
      }
      temp = -((len<(page+1)*limit?len:(page+1)*limit)-limit) * width


      elem.style.transform =
      elem.style.webkitTransform =
      `translate3d(${ temp }px,0,0)`

    }
  },
  beforeCreatez() {
    if ( this.$route.query.lang ) {
      this.$store.commit('setLanguage', this.$route.query.lang.trim());
    }
    try {
      this.$store.commit(
        'setPlatform',
        navigator.userAgent.match(/iPhone|iPad|Android|iPod|iOS/i)?'mobile':'pc'
      );
    } catch(e) {
    }
  },
  mounted() {
    // initializer($);
    this.docMounted = true;
    // if ( typeof window ==='object' ) {
    //   alertify.dismissAll();
    //   alertify.message(
    //     `<p id="alertify-fixed-para" >Make new friends! </p>
    //     <a id="alertify-fixed-btn" href="https://t.me/ValPromise" target="_blank">${this.joinGroup}</a>`
    //   , 0)
    // }

    if ( location.hash ) {
      let hash   = location.hash.replace('#','').trim();
      let anchor = null;
      $(`#nav a`).each((i,a)=>{
        anchor = $(a);
        // if ( anchor.text() === hash ) {
        if ( anchor.data('anchor') === hash ) {
          $('html, body').animate({scrollTop:$( '#'+anchor.data('anchor') ).position().top-80}, 500);
          location.hash = ''
        }
      });
    }

  },
  components: {
    contact, footer1
  }
}
</script>


