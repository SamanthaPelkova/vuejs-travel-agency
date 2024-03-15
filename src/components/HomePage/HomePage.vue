<template>
  <div>
    <div class="content">
      <img class="background-img-left" src="../../pictures/icons/homepage-airplane.png" alt="">
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
    const title = ref('Welcome to our website!')
    const subtitle = ref('Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem I ek nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be')
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