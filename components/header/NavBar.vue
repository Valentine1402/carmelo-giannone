<template>
  <div>
    <nav 
      :class="{ 'scrolled': !view.atTopOfPage }"
      class="groupNavDesktop flex justify-between w-screen p-5 fixed inset-1 h-16 bg-backgroundBlue md:bg-transparent text-blueList">
      <ul class="text-xs md:text-base flex">
        <!---->
         <li>
          <img class="h-12 rounded-lg pb-4 pr-3" src="~assets/svg/logo.svg" alt="">
        </li> 
        <li class="pt-2"><a href="#">Carmelo Giannone</a></li>
      </ul>
      <ul class="flex">
        <li class="mx-5 nav-menu-desktop">
          <a href="#who">{{ item.who }}</a> 
        </li>
        <li class="mx-5 nav-menu-desktop">
          <a href="#products">{{ item.products }}</a> 
        </li>
        <li class="mx-5 nav-menu-desktop">
          <a href="#articles">{{ item.articles }}</a> 
        </li>
        <li class="mx-5 nav-menu-desktop">
          <a href="#contact">{{ item.contact }}</a> 
        </li>
        <li @click="toggleNavMenu" class="nav-icon"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isActive" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path
              v-if="isActive"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
              class="text-blueList"
            />
          </svg></li>
      </ul>
    </nav>
    <nav class="nav-menu-mobile w-full px-6 bg-blueList fixed top-16 text-white">
      <!-- <div class="">
          <p class="text-right"><i class="fas fa-times"></i></p>
      </div> -->
      <div v-if="isActive">
        <ul class="flex-col"  @click="toggleNavMenu">
          <li class="py-2">
            <a href="#who">{{ item.who }}</a> 
          </li>
          <li class="py-2">
            <a href="#products">{{ item.products }}</a> 
          </li>
          <li class="py-2">
            <a href="#articles">{{ item.articles }}</a> 
          </li>
          <li class="py-2">
            <a href="#contact">{{ item.contact }}</a> 
          </li>
        </ul>
      </div>
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
        articles: 'Ricordi',
        contact:'Contattami',
        print: 'In stampa'
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