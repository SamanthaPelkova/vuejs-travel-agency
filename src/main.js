import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import TravelServices from "@/components/Services/TravelServices.vue";
import NotesWishlist from "@/components/NotesWishlist/NotesWishlist.vue";
import AboutUs from "@/components/AboutUs/AboutUs.vue";
import TravelProducts from "@/components/Products/TravelProducts.vue";
import HomePage from "@/components/HomePage/HomePage.vue";
import ContactInfo from "@/components/ContactInfo/ContactInfo.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          component: HomePage,
          alias: '/home'
        },
        {
          path: '/aboutUs',
          component: AboutUs
        },
        {
            path: '/travelServices',
            component: TravelServices
        },
        {
            path: '/notesWishlist',
            component: NotesWishlist
        },
        {
            path: '/travelProducts',
            component: TravelProducts
        },
        {
            path: '/contactInfo',
            component: ContactInfo
        }
    ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')
