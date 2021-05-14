import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  FooterTheFooter: () => import('../../components/footer/TheFooter.vue' /* webpackChunkName: "components/footer-the-footer" */).then(c => wrapFunctional(c.default || c)),
  CarouselArrowButton: () => import('../../components/carousel/ArrowButton.vue' /* webpackChunkName: "components/carousel-arrow-button" */).then(c => wrapFunctional(c.default || c)),
  CarouselCard: () => import('../../components/carousel/Card.vue' /* webpackChunkName: "components/carousel-card" */).then(c => wrapFunctional(c.default || c)),
  Carousel: () => import('../../components/carousel/Carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c)),
  CarouselIndicators: () => import('../../components/carousel/Indicators.vue' /* webpackChunkName: "components/carousel-indicators" */).then(c => wrapFunctional(c.default || c)),
  CarouselTheCarousel: () => import('../../components/carousel/TheCarousel.vue' /* webpackChunkName: "components/carousel-the-carousel" */).then(c => wrapFunctional(c.default || c)),
  HeaderNavBar: () => import('../../components/header/NavBar.vue' /* webpackChunkName: "components/header-nav-bar" */).then(c => wrapFunctional(c.default || c)),
  HeaderTheHeader: () => import('../../components/header/TheHeader.vue' /* webpackChunkName: "components/header-the-header" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
