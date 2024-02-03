<template>
  <div class="notes">
    <h3>{{ services.title }}</h3>
    <p>{{ services.description }}</p>

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