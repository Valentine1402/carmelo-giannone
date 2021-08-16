import { wrapFunctional } from './utils'

export { default as Contacts } from '../../components/contacts/Contacts.vue'
export { default as Books } from '../../components/books/Books.vue'
export { default as BooksCard } from '../../components/books/Card.vue'
export { default as BooksShop } from '../../components/books/Shop.vue'
export { default as CarouselArrowButton } from '../../components/carousel/ArrowButton.vue'
export { default as Carousel } from '../../components/carousel/Carousel.vue'
export { default as CarouselIndicators } from '../../components/carousel/Indicators.vue'
export { default as CarouselSlider } from '../../components/carousel/Slider.vue'
export { default as CarouselTheCarousel } from '../../components/carousel/TheCarousel.vue'
export { default as Description } from '../../components/description/Description.vue'
export { default as Memories } from '../../components/memories/Memories.vue'
export { default as HeaderNavBar } from '../../components/header/NavBar.vue'
export { default as HeaderTheHeader } from '../../components/header/TheHeader.vue'
export { default as FooterTheFooter } from '../../components/footer/TheFooter.vue'

export const LazyContacts = import('../../components/contacts/Contacts.vue' /* webpackChunkName: "components/contacts" */).then(c => wrapFunctional(c.default || c))
export const LazyBooks = import('../../components/books/Books.vue' /* webpackChunkName: "components/books" */).then(c => wrapFunctional(c.default || c))
export const LazyBooksCard = import('../../components/books/Card.vue' /* webpackChunkName: "components/books-card" */).then(c => wrapFunctional(c.default || c))
export const LazyBooksShop = import('../../components/books/Shop.vue' /* webpackChunkName: "components/books-shop" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselArrowButton = import('../../components/carousel/ArrowButton.vue' /* webpackChunkName: "components/carousel-arrow-button" */).then(c => wrapFunctional(c.default || c))
export const LazyCarousel = import('../../components/carousel/Carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselIndicators = import('../../components/carousel/Indicators.vue' /* webpackChunkName: "components/carousel-indicators" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselSlider = import('../../components/carousel/Slider.vue' /* webpackChunkName: "components/carousel-slider" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselTheCarousel = import('../../components/carousel/TheCarousel.vue' /* webpackChunkName: "components/carousel-the-carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyDescription = import('../../components/description/Description.vue' /* webpackChunkName: "components/description" */).then(c => wrapFunctional(c.default || c))
export const LazyMemories = import('../../components/memories/Memories.vue' /* webpackChunkName: "components/memories" */).then(c => wrapFunctional(c.default || c))
export const LazyHeaderNavBar = import('../../components/header/NavBar.vue' /* webpackChunkName: "components/header-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyHeaderTheHeader = import('../../components/header/TheHeader.vue' /* webpackChunkName: "components/header-the-header" */).then(c => wrapFunctional(c.default || c))
export const LazyFooterTheFooter = import('../../components/footer/TheFooter.vue' /* webpackChunkName: "components/footer-the-footer" */).then(c => wrapFunctional(c.default || c))
