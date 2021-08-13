import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import Post from "./components/Post.vue"
import Articulo from './components/Articulo'
import NotFound from './components/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "*",
            component: NotFound,
          },
        {
            path: '/',
            component: Inicio,
            name: 'inicio'
        },
        {
            path: '/sobremi',
            component: SobreMi,
            name: 'sobremi'
        },
        {
            path: '/contacto',
            component: Contacto,
            name: 'contacto'
        },
        {
            path: '/post/:entrada',
            component: Post,
            children: [
                {
                    path: '/',
                    component: Articulo,
                    name: 'articulo'
                }
            ]
        }
    ]
})