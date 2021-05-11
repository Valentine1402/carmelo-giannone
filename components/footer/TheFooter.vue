<template>
  <div>
    <div class="p-3 border">
      <ul class="flex justify-center text-3xs md:text-sm lg:text-base">
      <li class="mx-3">{{ item.date }}</li><span class="hidden md:block">|</span>
      <li class="mx-3">{{ item.name }}</li><span class="hidden md:block">|</span>
      <li class="mx-3">{{ item.creator }} <a :href="item.link">Valentine</a></li><span class="hidden md:block">|</span>
      <li class="mx-3">{{ item.rights }}</li><span class="hidden md:block">|</span>
      <li class="mx-3">{{ item.privacy }}</li>
    </ul>
    </div>
    <div class="p-3 border">
      <ul class="flex justify-center">
        <li>Seguimi sui social</li>
        <li class="mx-2"><i class="fab fa-facebook"></i></li>
        <li class=""><i class="fab fa-instagram"></i></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'the-footer',
  data () {
    return {
      item: {
        id: 1,
        date: '©2021',
        name: 'Carmelo Giannone',
        creator: 'Powered by',
        link:'',
        rights:'All rights reserved',
        privacy: 'Privacy & Cookie Policy'
      }
    }
  }
}
</script>