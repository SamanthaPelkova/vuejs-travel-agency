<template>
  <div class="content">
    <img class="background-img-left" src="../../pictures/icons/earth-on-ground.png" alt="">
    <h3 class="title">{{ title }}</h3>
    <p class="subtitle">{{ subtitle }}</p>
    <h2 class="offer-title">{{ offer }}</h2>
    <img class="arrow-down" src="../../pictures/icons/white-arrow.png" alt="">
  </div>

</template>
<script>
import { ref } from "vue";

export default {
  setup(){
    const title = ref('Welcome to our website!')
    const subtitle = ref('Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be')
    const offer = ref('Look below to see what we offer')


    return {
      title,
      subtitle,
      offer
    }
  }
}
</script>

<style>
.background-img-left {
  margin-top: 70px;
  width: 40%;
  margin-left: 30px;
}

.arrow-down {
  background: none;
  width: 10%;
  margin-top: 620px;
  transform: rotate(-0.13turn);
  margin-left: 200px;
  position: absolute;
}

.title {
  color: white;
  margin-top: -630px;
  position: absolute;
  background: none;
  padding: 0px 30px 0px 30px;
  border-radius: 60px;
  text-align: center;
  margin-left: 975px;
  font-size: 65px;
}

.subtitle {
  color: white;
  width: 35%;
  text-align: center;
  margin-left: 1055px;
  margin-top: -520px;
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