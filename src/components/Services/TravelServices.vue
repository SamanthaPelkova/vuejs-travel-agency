<template>
  <div class="notes">
    <p>{{ services.name }}</p>
    <img :src="services.image" alt="">
  </div>
</template>

<script>

export default {
  props: {
    services: {
      type: Object,
      required: true
    }
  },
  setup(){

    return {
    }
  }

}
</script>

<style scoped>
*{
  color: white;
}

.notes{
  position: absolute;
}

</style>