import { wrapFunctional } from './utils'

export { default as FooterTheFooter } from '../../components/footer/TheFooter.vue'
export { default as HeaderNavBar } from '../../components/header/NavBar.vue'
export { default as HeaderTheHeader } from '../../components/header/TheHeader.vue'

export const LazyFooterTheFooter = import('../../components/footer/TheFooter.vue' /* webpackChunkName: "components/footer-the-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeaderNavBar = import('../../components/header/NavBar.vue' /* webpackChunkName: "components/header-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyHeaderTheHeader = import('../../components/header/TheHeader.vue' /* webpackChunkName: "components/header-the-header" */).then(c => wrapFunctional(c.default || c))
