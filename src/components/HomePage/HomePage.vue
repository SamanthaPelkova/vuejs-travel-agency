<template>
  <div>
    <div class="content">
      <img class="background-img-left" src="../../pictures/icons/earth-on-ground.png" alt="">
      <h3 class="title">{{ title }}</h3>
      <p class="subtitle">{{ subtitle }}</p>
      <h2 class="offer-title">{{ offer }}</h2>
      <img class="arrow-down" src="../../pictures/icons/white-arrow.png" alt="">
    </div>

  </div>
</template>

<script>


import {ref} from "vue";

export default {


  setup() {
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

</style>