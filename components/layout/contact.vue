<template>
  <!-- 联系我们 -->
  <div id="contact" class="dark">
    <div class="panel">
      <h2>{{contact.title}}</h2>
      <div>
        <a href="https://t.me/vpp_offical3" target="_blank" class="icon fb"></a>
        <a href="javascript:void(0)" class="icon wc"><i><img src="~/assets/img/icons/wc-qrcode.png" alt=""></i></a>
        <a href="mailto:hi@valp.io" class="icon em"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contact() {
      return this.$store.state.lang.contact;
    }
  }
}
</script>
