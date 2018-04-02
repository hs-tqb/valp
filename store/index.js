import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import lang from '~/assets/lang'

const defaultLang = 'en'

const store = () => new Vuex.Store({
  state: {
    platform:'pc',
    lang:lang[defaultLang],

    // 消息弹窗
    messageDialog: {
      show:false,
      text:'',
      delay:3000,
      timer:-1
    },
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
    },
    
    // 消息弹窗
    showMessageDialog(state, obj) {
      if ( !obj.text && !obj.html && !obj.type ) return;
      let dialog = state.messageDialog;

      dialog.show = false;
      dialog.type = 
      dialog.text = 
      dialog.html = '';

      clearTimeout(dialog.timer);
      dialog.timer = setTimeout(()=>{
        dialog.show = false;
      }, obj.delay||dialog.delay);

      dialog.type = obj.type;
      dialog.html = (obj.html||'').toString().trim();
      dialog.text = (obj.text||'').toString().trim();
      dialog.show = true;
    }
  },
})

export default store
