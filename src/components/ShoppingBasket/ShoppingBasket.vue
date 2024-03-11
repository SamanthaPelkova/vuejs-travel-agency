<template>
  <div class="shopping-basket">
      <h1 class="blue-space">------</h1>
    <div class="title-basket">
      <h2 class="shopping-basket-title">Your Shopping Basket</h2>
    </div>
  </div>
  <div class="shopping-basket-information">
    <h3 class="shopping-basket-subtitle number">Number</h3>
    <h3 class="shopping-basket-subtitle product">Product</h3>
    <h3 class="shopping-basket-subtitle descr">Description</h3>
    <h3 class="shopping-basket-subtitle ks">/ks</h3>
    <h3 class="shopping-basket-subtitle size">Size</h3>
    <h3 class="shopping-basket-subtitle price">Price</h3>
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
  -webkit-text-fill-color: transparent;
  font-size: 40px;
  padding: 20px;
  position: absolute;
  float: left;
  margin-top: -90px;
  margin-left: 120px;
}

.shopping-basket-information {
  display: flex;
}

.shopping-basket-subtitle {
  margin-top: 50px;
  font-size: 25px;
  color: #3ACBE8;
  padding: 10px;
  background-color: white;
}

.number {
  padding-left: 30px;
}

.product {
  padding-left: 30px;
}

.descr {
  padding-left: 40px;
}

.ks {
  padding-left: 350px;
}

.size {
  padding-left: 30px;
}

.price {
  padding-left: 30px;
}


</style>