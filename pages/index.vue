<template>
  <div>
    <the-carousel></the-carousel>
    <shop></shop>
  </div>
</template>
<script>
import TheCarousel from '~/components/carousel/TheCarousel'
import Shop from '~/components/books/Shop.vue'

export default {
  components: {
    Shop,
    TheCarousel
  }
}
</script>