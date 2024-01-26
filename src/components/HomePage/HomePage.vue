<template>
  <div>
    <img class="cover-image" alt="main-img-hotel-entrance" src="../../pictures/hotel-entrance.jpg"/>
    <h3 class="title">{{ title }}</h3>
  </div>

</template>
<script>
import { ref } from "vue";

export default {
  setup(){
    const title = ref('Welcome to our website!')

    return{
      title
    }
  }
}
</script>

<style>
.cover-image {
  z-index: 200;
  width: 101%;
  margin-left: -9px;
  height: 1100px;
}

.title {
  color: white;
  z-index: 100;
  margin-top: -350px;
  margin-left: 100px;
  font-size: 50px;
}

</style>