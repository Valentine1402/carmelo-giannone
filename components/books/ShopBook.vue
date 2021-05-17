<template>
   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
    <card-book
      v-for="card in cards"
      :key="card.id"
      :image="card.image"
      :title="card.title"
      :description="card.description"
      :editor="card.editor"
      :year="card.year"
    ></card-book>
  </div>
</template>
<script>
import CardBook from './CardBook.vue';

export default {
  name:'ShopBook',
  props: ['cards'],
  components: {
    CardBook
  }
}
</script>