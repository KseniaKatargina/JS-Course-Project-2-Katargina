// import  {createRouter} from 'vue-router'
import vCatalog from '../components/catalog/v-catalog'
// import {createRouter, createWebHistory} from "vue-router";
import vCart from '../components/cart/v-cart'
import Router from 'vue-router';
import Vue from 'vue';
import vLogin from '../components/userInfo/v-login'
import vOrders from '../components/userInfo/v-history-of-orders'
Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: vLogin
        },
        {
            path:'/orders',
            name:'orders',
            component: vOrders,
            props: true

        },
        {
            path: '/',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true

        }
    ]
})

// let router = createRouter({
//     routes: [
//         {
//             path: '/',
//             name: 'catalog',
//             component: vCatalog
//         },
//         {
//             path: '/cart',
//             name: 'cart',
//             component: vCart,
//             props:true
//
//         }
//
//     ],
//     history: createWebHistory(process.env.BASE_URL)
// })

export default router;

// const routes = [
//     {
//         path: '/',
//         component: vCatalog
//     },
//             {
//             path: '/cart',
//             name: 'cart',
//             component: vCart,
//             props:true
//
//         }
// ]
//
// const router = createRouter( {
//     routes,
//     history: createWebHistory(process.env.BASE_URL)
// })
//
// export default router;
