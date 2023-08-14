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
  background-position: 80% 0%;
  background-repeat: no-repeat;
  background-image: url("~assets/img/respira.png"); 
}

@media only screen and (max-width: 400px) {
 .background-nav {
   height: 500px;
  background-size: cover;
background-position: center center;
      background-image: url("~assets/img/mobileImg.png");
  } 
}

</style>