import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/', 
        name: 'home',
        component: HomeView
    },
    {
        path: '/pedidos',//path define o caminho para acessar a rota
        name: 'Pedidos', //name define qual view será usada ao accessar a rota
        // component faz a importação da view
        component: () => import(/* webpackChunkName: "pedidos" */ '../views/Pedidos.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
