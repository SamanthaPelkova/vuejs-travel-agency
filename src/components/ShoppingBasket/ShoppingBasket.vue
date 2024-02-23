<template>
  <div class="shopping-basket">
      <h1 class="blue-space">------</h1>
    <div class="title-basket">
      <h2 class="shopping-basket-title">Your Shopping Basket</h2>
    </div>
  </div>
</template>

<script>


export default {


  setup() {


    return {

    }
  }
}
</script>

<style>
.blue-space {
  background: #3ACBE8;
  position: absolute;
  padding: 30px;
  color: #3ACBE8;
  margin-top: -90px;
  margin-left: 140px;
  width: 34%;

}

.shopping-basket-title {
  background: linear-gradient(to right, #172c64, #2ca3b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;  font-size: 55px;
  padding: 20px;
  position: absolute;
  float: left;
  margin-top: -90px;
  margin-left: 160px;
}


</style>