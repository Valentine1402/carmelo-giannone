<template>
  <div>
    <nav 
      :class="{ 'scrolled': !view.atTopOfPage }"

      class="groupNavDesktop flex justify-between p-5 fixed inset-1 h-16 bg-backgroundBlue md:bg-transparent">
      <ul class="text-xs md:text-base">
        <li>Carmelo Giannone</li>
        <!-- <li>
          <i class="fas fa-feather-alt"></i>
          <img class"h-14 rounded-lg" src="~assets/img/logo.png" alt="">
        </li> -->
      </ul>
      <ul class="flex">
        <li class="mx-5 nav-menu-desktop">
          {{ item.who }}
        </li>
        <li class="mx-5 nav-menu-desktop">
          {{ item.products }}
        </li>
        <li class="mx-5 nav-menu-desktop">
          {{ item.articles }}
        </li>
        <li class="mx-5 nav-menu-desktop">
          {{ item.contact }}
        </li>
        <li @click="toggleNavMenu" class="nav-icon"><i class="fas fa-bars"></i></li>
      </ul>
    </nav>
    <nav class="nav-menu-mobile w-full  px-6 bg-backgroundBlue fixed top-12">
      <!-- <div class="">
          <p class="text-right"><i class="fas fa-times"></i></p>
      </div> -->
    <transition name="fade"> 
      <div v-if="isActive">
        <ul class="flex-col">
          <li class="py-2">
            {{ item.who }}
          </li>
          <li class="py-2">
            {{ item.products }}
          </li>
          <li class="py-2">
            {{ item.articles }}
          </li>
          <li class="py-2">
            {{ item.contact }}
          </li>
        </ul>
      </div>
    </transition>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'nav-bar',
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
      },
      isActive: false
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
  },
  toggleNavMenu () {
    this.isActive = !this.isActive
  }
 }
}
</script>
<style scoped>

nav {
  z-index: 10;
}

.groupNavDesktop{
  top: 0;
  left: 0;
  right: 0;
}

nav.scrolled {
  @apply shadow-2xl;
  top: 0;
  left: 0;
  right: 0;
  background-color: #d5e1eb;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* for smartphone */
@media screen and (max-width: 1000px){
  .nav-menu-desktop {
    display: none;
  }
  .nav-icon {
    display: block;
  }
}

/* for desktop */
@media screen and (min-width: 1000px){
   .nav-menu-mobile{
    display: none;
  } 
  .nav-icon {
    display: none;
  }
}
</style>