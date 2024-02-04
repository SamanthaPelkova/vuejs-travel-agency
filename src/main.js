import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/components/HomePage/HomePage.vue";
import NotesWishlist from "@/components/NotesWishlist/NotesWishlist.vue";
import TravelProducts from "@/components/TravelProducts/TravelProducts.vue";
import ContactInfo from "@/components/ContactInfo/ContactInfo.vue";
import TravelServices from "@/components/Services/TravelServices.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/homePage'},
        {path: '/homePage/about', component: HomePage},
        {path: '/hoservices', component: TravelServices},
        {path: '/notesWishlist', component: NotesWishlist},
        {path: '/travelProducts', component: TravelProducts},
        {path: '/contactInfo', component: ContactInfo},

    ]
});


const app = createApp(App)
app.use(router)
app.mount('#app')
