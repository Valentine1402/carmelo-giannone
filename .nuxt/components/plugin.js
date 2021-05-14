import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  FooterTheFooter: () => import('../../components/footer/TheFooter.vue' /* webpackChunkName: "components/footer-the-footer" */).then(c => wrapFunctional(c.default || c)),
  HeaderNavBar: () => import('../../components/header/NavBar.vue' /* webpackChunkName: "components/header-nav-bar" */).then(c => wrapFunctional(c.default || c)),
  HeaderTheHeader: () => import('../../components/header/TheHeader.vue' /* webpackChunkName: "components/header-the-header" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
