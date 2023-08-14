<template>
  <div>
    <the-carousel></the-carousel>
     <new></new>
    <presentation></presentation>
    <shop></shop>
    <description></description>
    <contacts></contacts>
    <memories></memories>
  </div>
</template>
<script>
import TheCarousel from "~/components/carousel/TheCarousel";
import Shop from "~/components/books/Shop.vue";
import Description from "~/components/description/Description.vue";
import Contacts from "~/components/contacts/Contacts.vue";
import Memories from "~/components/memories/Memories.vue";
import New from "~/components/new/New.vue";
import Presentation from "~/components/bookPresentation/Presentation.vue";
export default {
  components: {
    Shop,
    TheCarousel,
    Description,
    Contacts,
    Memories,
    Presentation,
  },
};
</script>
