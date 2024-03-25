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
    <h3 class="shopping-basket-subtitle describe">Description</h3>
    <h3 class="shopping-basket-subtitle ks">/ks</h3>
    <h3 class="shopping-basket-subtitle size">Size</h3>
    <h3 class="shopping-basket-subtitle price">Price</h3>
  </div>
  <BasketProduct :filtered-items="products"/>
</template>

<script>


import BasketProduct from "@/components/ShoppingBasket/BasketProduct/BasketProduct.vue";

export default {
  components: { BasketProduct },
  setup() {
    const products = ([])

    return {
      products
    }
  }
}
</script>

<style>
.blue-space {
  background: #0047AB;
  position: absolute;
  padding: 30px;
  color: #0039a6;
  margin-top: -10px;
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
  border-radius: 1px 30px 30px 1px;
}

.shopping-basket-subtitle {
  width: 100%;
  margin-top: 140px;
  font-size: 25px;
  color: #172c64;
  padding: 10px;
  background-color: white;
  box-shadow: 3px 3px 30px 3px white;
}

.number {
  padding-left: 30px;
}

.product {
  padding-left: 30px;
}

.describe {
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