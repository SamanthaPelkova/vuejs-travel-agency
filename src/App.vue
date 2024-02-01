<template>
  <img class="background-img-right" src="./pictures/icons/planet-earth.png" alt="">
  <NavBar class="body"></NavBar>
  <HomePage></HomePage>
  <TravelServicesSection :services="services"/>
</template>

<script>

import NavBar from "@/components/NavBar/NavBar.vue"
import HomePage from "@/components/HomePage/HomePage.vue"
import { ref } from "vue"
import image1 from "../src/pictures/sauna.jpg"
import image2 from "../src/pictures/massage.jpg"
import image3 from "../src/pictures/yoga.jpg"
import image4 from "../src/pictures/work-out.jpg"
import image5 from "../src/pictures/swimming-pool.jpg"
import TravelServicesSection from "@/components/Services/TravelServicesSection.vue"
import fourHotelStars from "../src/pictures/4-hotel-stars.png"
import threeHotelStsrs from "../src/pictures/3-hotel-stars.png"


export default {
  name: 'App',
  components: {
    TravelServicesSection,
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

    const hotelReviews = ref([
      {
        id: 1,
        name: 'Jana Nováková',
        description: 'fjoiejf joiej ijeij  uehuhu  uhiuehnejoi en ih euhfeb ouehufi enuheuh ui he on oeiuhfmeuf ijfee',
        image: fourHotelStars
      },
      {
        id: 1,
        name: 'Emil Hvězda',
        description: 'fjoiejf joiej ijeij  uehuhu  uhiuehnejoi en ih euhfeb ouehufi enuheuh ui he on oeiuhfmeuf ijfee',
        image: fourHotelStars
      },
      {
        id: 1,
        name: 'Petra Janáčková',
        description: 'fjoiejf joiej ijeij  uehuhu  uhiuehnejoi en ih euhfeb ouehufi enuheuh ui he on oeiuhfmeuf ijfee',
        image: fourHotelStars
      },
      {
        id: 1,
        name: 'Pepa Novák',
        description: 'fjoiejf joiej ijeij  uehuhu  uhiuehnejoi en ih euhfeb ouehufi enuheuh ui he on oeiuhfmeuf ijfee',
        image: threeHotelStsrs
      }
    ])
    return{
      services,
      hotelReviews
    }
  }
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #3ACBE8;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.background-img-right {
  width: 60%;
  margin-right: -300px;
  margin-top: -400px;
  float: right
}


</style>
