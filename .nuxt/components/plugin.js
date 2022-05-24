import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BookPresentation: () => import('../../components/bookPresentation/Presentation.vue' /* webpackChunkName: "components/book-presentation" */).then(c => wrapFunctional(c.default || c)),
  Books: () => import('../../components/books/Books.vue' /* webpackChunkName: "components/books" */).then(c => wrapFunctional(c.default || c)),
  BooksCard: () => import('../../components/books/Card.vue' /* webpackChunkName: "components/books-card" */).then(c => wrapFunctional(c.default || c)),
  BooksShop: () => import('../../components/books/Shop.vue' /* webpackChunkName: "components/books-shop" */).then(c => wrapFunctional(c.default || c)),
  CarouselArrowButton: () => import('../../components/carousel/ArrowButton.vue' /* webpackChunkName: "components/carousel-arrow-button" */).then(c => wrapFunctional(c.default || c)),
  Carousel: () => import('../../components/carousel/Carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c)),
  CarouselIndicators: () => import('../../components/carousel/Indicators.vue' /* webpackChunkName: "components/carousel-indicators" */).then(c => wrapFunctional(c.default || c)),
  CarouselSlider: () => import('../../components/carousel/Slider.vue' /* webpackChunkName: "components/carousel-slider" */).then(c => wrapFunctional(c.default || c)),
  CarouselTheCarousel: () => import('../../components/carousel/TheCarousel.vue' /* webpackChunkName: "components/carousel-the-carousel" */).then(c => wrapFunctional(c.default || c)),
  Contacts: () => import('../../components/contacts/Contacts.vue' /* webpackChunkName: "components/contacts" */).then(c => wrapFunctional(c.default || c)),
  Description: () => import('../../components/description/Description.vue' /* webpackChunkName: "components/description" */).then(c => wrapFunctional(c.default || c)),
  HeaderNavBar: () => import('../../components/header/NavBar.vue' /* webpackChunkName: "components/header-nav-bar" */).then(c => wrapFunctional(c.default || c)),
  HeaderTheHeader: () => import('../../components/header/TheHeader.vue' /* webpackChunkName: "components/header-the-header" */).then(c => wrapFunctional(c.default || c)),
  FooterTheFooter: () => import('../../components/footer/TheFooter.vue' /* webpackChunkName: "components/footer-the-footer" */).then(c => wrapFunctional(c.default || c)),
  New: () => import('../../components/new/New.vue' /* webpackChunkName: "components/new" */).then(c => wrapFunctional(c.default || c)),
  Memories: () => import('../../components/memories/Memories.vue' /* webpackChunkName: "components/memories" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
