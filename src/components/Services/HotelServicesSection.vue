<template>
  <div>
    <h2>{{ servicesTitle }}</h2>
    <HotelServices
        v-for="service in services"
        :key="service.id"
        :services="services"
    />  </div>
</template>

<script>

import {defineComponent, ref} from "vue";
import HotelServices from "@/App.vue";

export default defineComponent({
  components: {HotelServices},
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
*{
  background-color: black;
}
h2{
  color: white;
}

</style>