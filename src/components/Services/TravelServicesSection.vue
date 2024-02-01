<template>
  <div class="services">
    <h2 class="services-title">{{ servicesTitle }}</h2>
    fkjfndf
    <TravelServices
        :services="services"
    />
  </div>
</template>

<script>

import {defineComponent, ref} from "vue";
import TravelServices from "@/App.vue";

export default defineComponent({
  components: {TravelServices},
  props: {
    services: {
      type: Object,
      required: true
    }
  },
  setup(){
    const servicesTitle = ref('Nabízené služby')

    return {
      servicesTitle
    }
  }
})
</script>

<style scoped>
.services{
  color: white;
  z-index: 300;
}

.services-title{
  margin-top: 20px;
  font-size: 60px;
  text-align: center;
  background: white;
  border-radius: 20px 0px 20px 0px;
  padding: 30px;
  box-shadow: 8px 8px 15px 10px #2ca0b7;
  color: #3ACBE8;
}

</style>