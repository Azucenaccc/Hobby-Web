import { createRouter, createWebHistory } from "vue-router";
import principal from '../components/pincipal.vue';
import naturaleza from "../views/naturaleza.vue";
import arte from "../views/Arte.vue";
import musica from "../views/Musica.vue";
import galaxia from "../views/galaxia.vue";

const routes = [
    {
        path: '/',
        name: '/principal',
        component: principal,
    },
    {
        path:'/naturaleza',
        name: 'Naturaleza',
        component: naturaleza,
    },
    {
        path: '/arte',
        name: 'Arte',
        component: arte,
    },
    {
        path: '/musica',
        name: 'Musica',
        component: musica,
    },
    {
        path: '/galaxia',
        name: 'Galaxia',
        component: galaxia,
    }
]

//Creacion del router
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router