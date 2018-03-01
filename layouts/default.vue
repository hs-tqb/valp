<style lang="less">

</style>

<template>
  <div id="page-root" :data-page="$route.name" :class="[platform, lang]">
    <topbar />
    <nuxt class="page-container" />
  </div>
</template>

<script>
import topbar from '~/components/layout/topbar.vue'

export default {
  components: {
    topbar
  },
  computed: {
    lang() {
      return this.$store.state.lang.lang;
    },
    platform() {
      return this.$store.state.platform;
    }
  }
}
</script>



