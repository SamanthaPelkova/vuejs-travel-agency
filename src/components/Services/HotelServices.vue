<template>
  <div>
    {{service.id}}
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

}

}
</script>

<style scoped>

</style>