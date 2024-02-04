import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import TravelServices from "@/components/Services/TravelServices.vue";
import NotesWishlist from "@/components/NotesWishlist/NotesWishlist.vue";
import AboutUs from "@/components/AboutUs/AboutUs.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
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
        }
    ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')
