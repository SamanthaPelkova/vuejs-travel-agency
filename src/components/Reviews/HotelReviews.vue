<template>
  <div class="description">
    {{ hotelReviews.description }}
  </div>
</template>

<script>
export default {
props: {
  hotelReviews: {
    type: Object,
    required: true
  }
},
  setup(){
  // ff
  }

}
</script>

<style scoped>
*{
  color: white;
}

.description{
  color: white;
  position: absolute;
  z-index: 300;
}

</style>