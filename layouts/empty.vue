<style lang="less">

</style>

<template>
  <div id="page-root" :data-page="$route.name" :class="[platform, lang]">
    <nuxt class="page-container" />
  </div>
</template>

<script>

export default {
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



