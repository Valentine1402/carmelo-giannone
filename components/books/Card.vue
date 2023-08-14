<template>
    <div class="m-10 border rounded-t bg-white rounded">
      <div class="max-w-sm w-full lg:max-w-full lg:flex relative " >
        <div class="absolute top-0 right-0"> <img
              v-if="id === 0"
        class="w-20"
        src="~/assets/img/novita.png"
        alt=""
      /></div>
     
        <div class="h-23 md:48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img :src="require(`~/assets/img/books/${image}`)" class="md:h-full md:object-cover md:w-full" alt="img">
        </div>
        <div class=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-sm text-secondary flex items-center">
              {{ editor }}
            </p>
            <div class="text-primary font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-sm text-gray-600 flex items-center">
              {{ year }}
            </p>
            <p class="text-gray-700 text-base">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'description', 'year', 'editor']
}
</script>