<template>
  <div>
    <the-carousel></the-carousel>
    <shop></shop>
    <description></description>
    <contacts></contacts>
    <memories></memories>
  </div>
</template>
<script>
import TheCarousel from '~/components/carousel/TheCarousel'
import Shop from '~/components/books/Shop.vue'
import Description from '~/components/description/Description.vue'
import Contacts from '~/components/contacts/Contacts.vue'
import Memories from '~/components/memories/Memories.vue'
export default {
  components: {
    Shop,
    TheCarousel,
    Description,
    Contacts,
    Memories
  }
}
</script>