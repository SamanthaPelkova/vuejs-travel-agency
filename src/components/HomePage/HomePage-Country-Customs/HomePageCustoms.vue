<template>
  <div class="home-page-customs-body">
    <h1 class="home-page-customs-title">Zvyky v zahraničí</h1>
    <CustomsFrance/>
    <CustomsAustria/>
    <CustomsSpain/>
  </div>
</template>


<script>

import CustomsFrance from "@/components/HomePage/HomePage-Country-Customs/CustomsFrance.vue";
import CustomsSpain from "@/components/HomePage/HomePage-Country-Customs/CustomsSpain.vue";
import CustomsAustria from "@/components/HomePage/HomePage-Country-Customs/CustomsAustria.vue";

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
  margin-top: 320px;
  width: 100%;
}

.home-page-customs-title {
  text-align: center;
  color: white;
  font-size: 55px;
}



</style>