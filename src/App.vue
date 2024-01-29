<template>
  <NavBar class="body" ></NavBar>
  <HomePage></HomePage>
  <HotelServices
    v-for="service in services"
    :key="service.id"
    :services="services"
  />
</template>

<script>

import NavBar from "@/components/NavBar/NavBar.vue";
import HomePage from "@/components/HomePage/HomePage.vue";
import {ref} from "vue";
import image1 from "../src/pictures/sauna.jpg"
import image2 from "../src/pictures/massage.jpg"
import image3 from "../src/pictures/yoga.jpg"
import image4 from "../src/pictures/work-out.jpg"
import image5 from "../src/pictures/swimming-pool.jpg"
import HotelServices from "@/components/Services/HotelServices.vue";


export default {
  name: 'App',
  components: {
    HotelServices,
    HomePage,
    NavBar
  },
  setup(){
    const services = ref([
      {
        id: 1,
        title: 'Sauna',
        description: 'fioejfojfj eojf ioejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        image: image1
      },
      {
        id: 2,
        title: 'Masáže',
        description: 'fioejfojfj eojf ioejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        image: image2
      },
      {
        id: 3,
        title: 'Yoga',
        description: 'fioejfojfj eojf ioejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        image: image3
      },
      {
        id: 4,
        title: 'Cvičení',
        description: 'fioejfojfj eojf ioejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        image: image4
      },
      {
        id: 5,
        title: 'Plavecký bazén',
        description: 'fioejfojfj eojf ioejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        image: image5
      }
    ])
    return{
      services
    }
  }
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #5A454B;
}

.body{
  background-color: black;
}

</style>
