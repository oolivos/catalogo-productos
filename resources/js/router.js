import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: "hash",
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            name: 'Home',
            path: '/',
            redirect: '/pages/productos'
        },
        // Productos
        {
            name: 'Productos',
            path: '/pages/productos',
            component: () => import('./views/ProductosView'),
        },
        // Marcas
        {
            name: 'Marcas',
            path: '/pages/marcas',
            component: () => import('./views/MarcasView'),
        }
    ],
})

