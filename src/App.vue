<template>
  <img class="background-img-right" src="./pictures/icons/planet-earth.png" alt="">
  <NavBar class="body"></NavBar>
  <HomePage></HomePage>
  <h2 class="offer">{{ offerTitle }}</h2>
  <TravelServices
      v-for="service in services"
      :key="service.id"
      :services="service"
      class="travel-services"
  />
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
import fourHotelStars from "../src/pictures/4-hotel-stars.png"
import threeHotelStsrs from "../src/pictures/3-hotel-stars.png"
import TravelServices from "@/components/Services/TravelServices.vue";


export default {
  name: 'App',
  components: {
    TravelServices,
    HomePage,
    NavBar
  },
  setup(){
    const services = ref([
      {
        id: 1,
        title: 'Sauna',
        description: 'fioejfojfj eojf ioejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        label: 'Nedávno přidané',
        image: image1
      },
      {
        id: 2,
        title: 'Masáže',
        description: 'fioejfojfj eojf ioejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        label: 'Nedávno přidané',
        image: image2
      },
      {
        id: 3,
        title: 'Yoga',
        description: 'fioejfojfj eojf ioejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        label: 'Nedávno přidané',
        image: image3
      },
      {
        id: 4,
        title: 'Cvičení',
        description: 'fioejfojfj eojf ioejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        label: 'Nedávno přidané',
        image: image4
      },
      {
        id: 5,
        title: 'Plavecký bazén',
        description: 'fioejfojfj eojf ioejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        label: 'Výhodné pro Vás',
        image: image5
      }
    ])

    const travelReviews = ref([
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

    const offerTitle = ref('Our Services')

    return{
      services,
      travelReviews,
      offerTitle
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

.offer {
  background-color: white;
  padding: 50px;
  text-align: center;
  font-size: 60px;
  color: #3ACBE8;
  border-radius: 70px 0px 70px 0px;
}
.travel-services{
  width: 60%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px;
}


</style>
