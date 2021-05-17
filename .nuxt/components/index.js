import { wrapFunctional } from './utils'

export { default as BooksCardBook } from '../../components/books/CardBook.vue'
export { default as BooksShop } from '../../components/books/Shop.vue'
export { default as BooksShopBook } from '../../components/books/ShopBook.vue'
export { default as FooterTheFooter } from '../../components/footer/TheFooter.vue'
export { default as HeaderNavBar } from '../../components/header/NavBar.vue'
export { default as HeaderTheHeader } from '../../components/header/TheHeader.vue'
export { default as CarouselArrowButton } from '../../components/carousel/ArrowButton.vue'
export { default as CarouselCard } from '../../components/carousel/Card.vue'
export { default as Carousel } from '../../components/carousel/Carousel.vue'
export { default as CarouselIndicators } from '../../components/carousel/Indicators.vue'
export { default as CarouselTheCarousel } from '../../components/carousel/TheCarousel.vue'

export const LazyBooksCardBook = import('../../components/books/CardBook.vue' /* webpackChunkName: "components/books-card-book" */).then(c => wrapFunctional(c.default || c))
export const LazyBooksShop = import('../../components/books/Shop.vue' /* webpackChunkName: "components/books-shop" */).then(c => wrapFunctional(c.default || c))
export const LazyBooksShopBook = import('../../components/books/ShopBook.vue' /* webpackChunkName: "components/books-shop-book" */).then(c => wrapFunctional(c.default || c))
export const LazyFooterTheFooter = import('../../components/footer/TheFooter.vue' /* webpackChunkName: "components/footer-the-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeaderNavBar = import('../../components/header/NavBar.vue' /* webpackChunkName: "components/header-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyHeaderTheHeader = import('../../components/header/TheHeader.vue' /* webpackChunkName: "components/header-the-header" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselArrowButton = import('../../components/carousel/ArrowButton.vue' /* webpackChunkName: "components/carousel-arrow-button" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselCard = import('../../components/carousel/Card.vue' /* webpackChunkName: "components/carousel-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCarousel = import('../../components/carousel/Carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselIndicators = import('../../components/carousel/Indicators.vue' /* webpackChunkName: "components/carousel-indicators" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselTheCarousel = import('../../components/carousel/TheCarousel.vue' /* webpackChunkName: "components/carousel-the-carousel" */).then(c => wrapFunctional(c.default || c))
