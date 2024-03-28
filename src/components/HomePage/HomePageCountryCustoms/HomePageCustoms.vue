<template>
  <div class="home-page-customs-body">
    <h1 class="home-page-customs-title">Zvyky v zahraničí</h1>
    <CustomsSpain/>
    <CustomsAustria/>
    <CustomsFrance/>
  </div>
</template>


<script>

import CustomsFrance from "@/components/HomePage/HomePageCountryCustoms/CustomsFrance.vue";
import CustomsSpain from "@/components/HomePage/HomePageCountryCustoms/CustomsSpain.vue";
import CustomsAustria from "@/components/HomePage/HomePageCountryCustoms/CustomsAustria.vue";

export default {
  components: { CustomsAustria, CustomsSpain, CustomsFrance },

  setup(){




    return {

    }
  }

}
</script>




<style>

.home-page-customs-body {
  margin-top: 240px;
  z-index: 1;
  width: 100%;
  padding-top: 70px;
}
.home-page-customs-title {
  background: linear-gradient(to bottom, #bdd2ff, #0047AB);
  text-align: center;
  color: white;
  margin-top: -30px;
  padding-top: 30px;
  padding-bottom: 50px;
  font-size: 55px;
}



</style>