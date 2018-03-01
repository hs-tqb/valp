import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import lang from '~/assets/lang'

const defaultLang = 'en'

const store = () => new Vuex.Store({
  state: {
    platform:'pc',
    lang:lang[defaultLang]
  },
  
  mutations: {
    setLanguage(state, t, temp) {
      // 如果t是空值, 或者是当前值， 或者是错值，则返回
      if ( !t || (t===state.lang.lang) || !(temp=lang[t.replace('-','')]) ) {
        return ;
      }
      state.lang = temp;
    },
    setPlatform(state, p) {
      state.platform = p;
    }
  },
})

export default store