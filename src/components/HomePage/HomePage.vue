<template>
  <div class="homepage-body">
    <div class="content">
      <video autoplay muted loop id="myVideo" class="video-background">
        <source src="../../video/video-background.mp4" type="video/mp4">
      </video>
      <h3 class="title">Vítejte na našich stránkách!</h3>
      <p class="subtitle">{{ subtitle }}</p>
      <FreeTickets/>
      <h2 class="home-page-title-other-countries">Zajímá vás jaké jsou zvyky v jiných zemích?</h2>
      <a class="button-homepage-read-more" @click="scrollTo('.home-page-customs-title')">Zjistit více</a>
    </div>
    <HomePageCustoms/>
  </div>
</template>

<script>


import {ref} from "vue";
import FreeTickets from "@/components/HomePage/FreeTickets/FreeTickets.vue";
import {useScroll} from "@/script";
import HomePageCustoms from "@/components/HomePage/HomePage-Country-Customs/HomePageCustoms.vue";

export default {
  components: {HomePageCustoms, FreeTickets },
  setup() {
    const subtitle = ref('Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem I ek nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be')
    const { scrollTo } = useScroll()


    return {
      subtitle,
      scrollTo
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

.button-homepage-read-more {
  width: 20%;
  position: absolute;
  padding: 20px;
  margin-left: 1200px;
  margin-top: 70px;
  border-radius: 29px;
  background-color: rgba(23, 44, 100, 0.56);
  text-align: center;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
}

.home-page-title-other-countries {
  color: white;
  margin-left: 1070px;
  position: absolute;
  font-size: 30px;
}



</style>