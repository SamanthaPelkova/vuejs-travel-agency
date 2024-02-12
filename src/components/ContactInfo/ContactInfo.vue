<template>
  <section>
    <div class="contact-info">
      <h2 class="title-contact">{{ contactInfoTitle }}</h2>
      <p class="subtitle-contact">{{ contactInfoSubtitle }}</p>
    </div>
    <div class="google-maps">
      <h4>your position</h4>
      latitude : {{ currPos.lat.toFixed(2) }}, longitude: {{ currPos.lng.toFixed(2) }}
    </div>
    <div ref="mapDiv" style="width: 100%; height: 80vh"/>
  </section>
  <footer>
    © 2024 TravelAgency. All rights reserved.
  </footer>
</template>

<script>

/* eslint-disable no-undef */
import {computed, onMounted, ref} from "vue";
import { useGeolocation } from "@/useGeolocation";
import { Loader } from '@googlemaps/js-api-loader'
const GOOGLE_MAPS_API_KEY = 'AIzaSyClIF0dvDLUVbXzzo3fVA7Ulg0IJugSjOs'

export default {
  setup (){
    const contactInfoTitle = ref('Contact Info')
    const contactInfoSubtitle = ref('Lorem Ipsum tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be')

    const { coords } = useGeolocation()
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))


    const loader = new Loader({apiKey: GOOGLE_MAPS_API_KEY})
    onMounted(async () => {
      await loader.load()
      new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 7
      })
    })
    return{
      contactInfoTitle,
      contactInfoSubtitle,
      currPos
    }
  }
}


</script>

<style scoped>
.title-contact {
  background-color: white;
  padding: 50px;
  text-align: center;
  font-size: 60px;
  color: #3ACBE8;
  text-decoration: underline;
  border-radius: 70px;
  margin-top: 30px;
}

.subtitle-contact {
  color: #227c8d;
  margin-top: -20px;
  background-color: white;
  font-size: 24px;
  margin-left: 90px;
  padding-left: 150px;
  padding-bottom: 30px;
  width: 60%;
  border-radius: 1px 1px 70px 70px;
  text-align: center;
}


</style>