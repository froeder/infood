import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Buscar from '@/components/Buscar'
import Detalhe from '@/components/_Detalhe'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/buscar', name: 'Buscar', component: Buscar },
    { path: '/alimentos/:id', name: 'Detalhe', component: Detalhe
    }
  ]
})
