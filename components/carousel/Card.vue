<template>
  <div class='card'>
    <div class='p-5 mt-10'>
      <p>{{text}}</p>
      <h3 class='text-semibold'>{{headline}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    headline: String,
    imgName: String,
    text: String
  }
};
</script>

<style scoped>
.card {
  width: 400px;
  height: 200px;
  padding: 10px;
}
</style>