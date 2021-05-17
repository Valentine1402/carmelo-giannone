<template>
  <div class='card'>
    <div class='p-5'>
    <section class="flex flex-row justify-center">
      <span class="text-center text-6xl text-white">〝 </span>
      <p class="text-backgroundBlue text-xs md:text-base p-4 md:py-8 md:mx-1 mt-3 md:mt-0 text-center">{{ text }}</p>
      <span class="flex self-end text-6xl h-12 text-white"> 〞 </span>
    </section>
      <h3 class='text-semibold text-blueList text-center text-xs md:text-base'>{{headline}}</h3>
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
  width: 650px;
  height: 200px;
  padding: 10px;
}

/* for smartphone */
@media screen and (max-width: 1000px){
  .card{
    width: 320px;
    padding: 0;
  }
}
</style>