<template>
  <div class="container mx-auto">
    <TheHeader></TheHeader>
    <Nuxt />
    <TheFooter></TheFooter>
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
