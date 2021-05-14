<template>
  <div class="h-96 background-nav">
    <nav-bar></nav-bar>
    <the-carousel></the-carousel>
  </div>
</template>
<script>
import navBar from '~/components/header/NavBar'
import TheCarousel from '~/components/carousel/TheCarousel'
export default {
  components: {
    navBar,
    TheCarousel
  }
}
</script>
<style scoped>
.background-nav {
  height: 500px;
  background-size: cover;
  background-position: 80% 43%;
  background-repeat: no-repeat;
  background-image: url("~assets/img/balata.jpeg");
}
</style>