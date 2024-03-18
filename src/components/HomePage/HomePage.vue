<template>
  <div>
    <div class="content">
      <video autoplay muted loop id="myVideo" class="video-background">
        <source src="../../video/video-background.mp4" type="video/mp4">
      </video>
      <h3 class="title">{{ title }}</h3>
      <p class="subtitle">{{ subtitle }}</p>
      <FreeTickets></FreeTickets>
    </div>
    <footer>
      © 2024 TravelAgency. All rights reserved.
    </footer>

  </div>
</template>

<script>


import {ref} from "vue";
import FreeTickets from "@/components/HomePage/FreeTickets/FreeTickets.vue";

export default {
  components: { FreeTickets },


  setup() {
    const title = ref('Vítejte na našich stránkách!')
    const subtitle = ref('Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem I ek nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be')



    return {
      title,
      subtitle
    }
  }


}


</script>

<style>
.video-background {
  width: 100%;
}



</style>