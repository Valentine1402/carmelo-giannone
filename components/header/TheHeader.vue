<template>
  <div class="h-96 background-nav">
    <nav 
      :class="{ 'scrolled': !view.atTopOfPage }"
      class="flex justify-between p-5 fixed inset-1 h-16 container mx-auto">
      <ul class="">
        <li>Carmelo Giannone</li>
        <!-- <li>
          <i class="fas fa-feather-alt"></i>
          <img class"h-14 rounded-lg" src="~assets/img/logo.png" alt="">
        </li> -->
      </ul>
      <ul class="flex">
        <li class="mx-5">
          {{ item.who }}
        </li>
        <li class="mx-5">
          {{ item.products }}
        </li>
        <li class="mx-5">
          {{ item.articles }}
        </li>
        <li class="mx-5">
          {{ item.contact }}
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'the-header',
  data () {
    return {
      item: {
        who: 'Chi sono',
        products: 'Libri',
        articles: 'Articoli',
        contact:'Contattami'
      },
      view: {
        atTopOfPage: true
      }
    }
  },
  // a beforeMount call to add a listener to the window
  beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll(){
        // when the user scrolls, check the pageYOffset
        if(window.pageYOffset>1){
            // user is scrolled
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
        }else{
            // user is at top of page
            if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
    }
}
}
</script>
<style scoped>
.background-nav {
  height: 500px;
  background-size: cover;
  background-position: 80% 43%;
  background-repeat: no-repeat;
  background-image: url("~assets/img/balata.jpeg");
}

nav {
  z-index: 10;
}

nav.scrolled {
  @apply shadow-2xl;
  border-bottom: 0px;
  background-color: #d5e1eb;
}
</style>