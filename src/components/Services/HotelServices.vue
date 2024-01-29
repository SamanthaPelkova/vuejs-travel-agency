<template>
  <div>
    <p>{{ services.name }}</p>
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


</style>