<template>
  <div>
   <a name="products"></a>
    <h1 class="pt-8 md:pt-8 md:pb-0 text-center text-xl font-semibold text-white bg-blueList">I miei romanzi</h1>
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