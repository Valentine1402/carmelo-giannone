<template>
  <div class="h-96 background-nav">
    <nav-bar></nav-bar>
  </div>
</template>
<script>
import navBar from '~/components/header/NavBar'
export default {
  components: {
    navBar
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