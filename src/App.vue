<template>
  <img class="background-img-right" src="./pictures/planet.png" alt="">
  <NavBar class="body"></NavBar>
  <router-view></router-view>

</template>

<script>

import NavBar from "@/components/NavBar/NavBar.vue"
import { ref } from "vue"
import fourHotelStars from "../src/pictures/4-hotel-stars.png"
import threeHotelStsrs from "../src/pictures/3-hotel-stars.png"

export default {
  name: 'App',
  components: {
    NavBar
  },
  setup(){


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


    return{
      travelReviews
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

footer {
  width: 100%;
  background-color: #227c8d;
  color: white;
  padding: 7px;
  text-align: center;
}


.background-img-right {
  width: 60%;
  margin-right: -300px;
  margin-top: -400px;
  float: right;
  background: none;
}
.background-img-left {
  width: 50%;
  background: none;
  margin-top: -90px;
  margin-left: -150px;
}

.background-img-left { animation: bounce 2s infinite}
@keyframes bounce {
  0% {transform: translateY(0)}
  50% {transform: translateY(-20px)}
}

.title {
  color: white;
  margin-top: -600px;
  position: absolute;
  background: none;
  padding: 1px 30px 1px 30px;
  border-radius: 60px;
  text-align: center;
  margin-left: 805px;
  font-size: 45px;
}

.subtitle {
  color: white;
  width: 35%;
  text-align: center;
  margin-left: 885px;
  margin-top: -530px;
  position: absolute;
  background: none;
  font-size: 17px;
}

.offer-title {
  color: white;
  margin-top: -220px;
  position: absolute;
  background: none;
  padding: 0px 30px 0px 30px;
  border-radius: 60px;
  text-align: center;
  margin-left: 1105px;
  font-size: 45px;
  transform: rotate(-0.960turn);
}


</style>
