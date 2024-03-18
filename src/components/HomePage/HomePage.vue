<template>
  <div class="homepage-body">
    <div class="content">
      <video autoplay muted loop id="myVideo" class="video-background">
        <source src="../../video/video-background.mp4" type="video/mp4">
      </video>
      <h3 class="title">{{ title }}</h3>
      <p class="subtitle">{{ subtitle }}</p>
      <FreeTickets></FreeTickets>
    </div>
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
body {
  background-color: #0039a6;
}
.video-background {
  width: 100%;
  border-bottom: 4px solid rgba(255, 255, 255, 0.71);
  border-radius: 20px;
}
.title {
  color: white;
  margin-top: -750px;
  position: absolute;
  background: none;
  padding: 1px 30px 1px 30px;
  border-radius: 60px;
  text-align: center;
  font-size: 35px;
  margin-left: 1100px;
}

.subtitle {
  color: white;
  width: 23%;
  text-align: center;
  margin-left: 1200px;
  margin-top: -680px;
  position: absolute;
  background: none;
  font-size: 17px;
}



</style>