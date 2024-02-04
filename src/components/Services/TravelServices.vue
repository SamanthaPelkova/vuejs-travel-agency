<template>
  <div class="notes">
    <p class="service-label">{{ services.label }}</p>
    <h3 class="service-title">{{ services.title }}</h3>
    <img :src="services.image" class="service-image" alt="">
    <p class="service-description">{{ services.description }}</p>
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

.service-image {
  width: 70%;
  margin-left: -200px;
  border-radius: 40px;
  box-shadow: 10px 10px 50px white;
}

.service-label{
  position: absolute;
  background: rgba(51, 135, 203, 0.8);
  margin-top: -20px;
  font-size: 25px;
  margin-left: -600px;
  border-radius: 50px 8px 50px 8px;
  padding: 15px;
}

.service-title{
  position: absolute;
  margin-left: 1600px;
  font-size: 50px;
  background-color: #33c1de;
  padding: 20px;
  border-radius: 60px;
  margin-top: 10px;
}

.service-description{
  position: absolute;
  margin-right: -1600px;
  margin-top: 190px;
}


</style>