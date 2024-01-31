<template>
  <div class="services">
    <h2>{{ servicesTitle }}</h2>
    fkjfndf
    <HotelServices
        :services="services"
    />
  </div>
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
.services{
  color: white;
  z-index: 300;
}

</style>