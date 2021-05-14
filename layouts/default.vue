<template>
  <div class="">
    <the-header></the-header>
    <Nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '~/components/header/TheHeader'
import TheFooter from '~/components/footer/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}

</script>
