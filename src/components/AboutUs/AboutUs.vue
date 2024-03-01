<template>
    <button class="scroll-to-top-arrow" @click="scrollTo('.logo-text')"><img src="../../pictures/icons/white-arrow.png" alt=""></button>
  <div class="content">
    <h2 class="about-us-title">Read here about us :)</h2>
    <h2 class="offer-subtitle"> {{aboutUsSubtitle}} </h2>
    <button @click="scrollTo('.jq--about-us')" class="btn-read-more">Show more</button>
    <div class="travel-offers" v-for="offer in offers" :key="offer.id">
      <h3 class="offers-title jq--about-us">{{ offer.title }}</h3>
      <img :src="offer.image" class="offer-image" alt="">
      <p class="offer-price">{{ offer.price }}</p>
      <p class="offer-description">{{ offer.description }}</p>
    </div>
  </div>
  <footer>
    © 2024 TravelAgency. All rights reserved.
  </footer>
</template>

<script>

import {onMounted, ref} from "vue";
import image1 from '../../pictures/icons/parking-spot.png'
import image2 from '../../pictures/icons/plane-around-earth.png'
import image3 from '../../pictures/icons/travelling.png'
import image4 from '../../pictures/icons/animal-plane.png'
import { useScroll } from "@/script";

export default {
  setup(){
    const aboutUsSubtitle = ref('Lorem Ipsumflar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be')
    const { scrollTo } = useScroll()

    onMounted(() => {

    })

    const offers = ref([
      {
        id: 1,
        title: 'Simply parking',
        description: 'Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be',
        price: '350CZK per night',
        image: image1
      },
      {
        id: 2,
        title: 'Cheap tickets',
        description: 'Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be',
        price: 2590,
        image: image2
      },
      {
        id: 3,
        title: 'Quality accommodation',
        description: 'Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be',
        price: '550CZK per night',
        image: image3
      },
      {
        id: 4,
        title: 'Pets welcome',
        description: 'Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be',
        price: '150CZK per night',
        image: image4
      }
    ])

    return {
      aboutUsSubtitle,
      offers,
      scrollTo
    }
  }
}
</script>

<style>
.travel-offers {
  display: flex;
  justify-content: center;
  margin-top: 70px;
  flex-wrap: wrap;
}
.about-us-title {
  background-color: white;
  padding: 50px;
  text-align: center;
  font-size: 60px;
  color: #3ACBE8;
  border-radius: 70px;
  margin-top: 30px;
}

.offer-image{
  width: 35%;
  margin-left: -950px;
  border-radius: 40px;
}
.offers-title {
  position: absolute;
  margin-left: 1200px;
  font-size: 50px;
  background-color: #33c1de;
  color: white;
  padding: 20px;
  border-radius: 60px;
  margin-top: 70px;
}
.offer-price {
  position: absolute;
  margin-left: 1200px;
  font-size: 20px;
  font-family: sans-serif;
  background-color: #33c1de;
  color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 60px;
  margin-top: 160px;
}
.offer-description {
  position: absolute;
  margin-right: -800px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.94);
  margin-top: 270px;
  color: #33c1de;
  font-size: 20px;
  padding: 30px;
  transform: rotate(-0.99turn);
  border-radius: 5px 20px 5px 20px;
  box-shadow: 5px 5px 90px #227c8d;
  width: 40%;
}

.offer-subtitle {
  color: white;
  margin-top: 40px;
  margin-left: 20px;
  width: 55%;
  text-align: center;
}

.btn-read-more {
  background-color: #227c8d;
  border: 2px solid white;
  border-radius: 20px;
  width: 30%;
  margin-left: 280px;
  margin-top: 20px;
  color: white;
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
}

.scroll-to-top-arrow {
  background: none;
  border: none;
}

.scroll-to-top-arrow img{
  position: absolute;
  background: #227c8d;
  width: 5%;
  border-radius: 70px;
  box-shadow: 2px 2px 40px #172c64;
  cursor: pointer;
  margin-top: 40px;
  transform: rotate(-0.75turn);
  margin-left: 1750px;
}


</style>