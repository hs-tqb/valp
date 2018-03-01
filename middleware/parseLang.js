import lang from '~/assets/lang'

export default function ({ query, store }) {
  if ( query.lang ) {
    store.commit('setLanguage', query.lang.trim());
  }
}