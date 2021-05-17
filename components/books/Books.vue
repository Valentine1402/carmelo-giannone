<template>
   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 bg-blueList">
    <card
      v-for="card in cards"
      :key="card.id"
      :image="card.image"
      :title="card.title"
      :description="card.description"
      :editor="card.editor"
      :year="card.year"
    ></card>
  </div>
</template>
<script>
import Card from './Card.vue';

export default {
  name:'books',
  props: ['cards'],
  components: {
    Card
  }
}
</script>