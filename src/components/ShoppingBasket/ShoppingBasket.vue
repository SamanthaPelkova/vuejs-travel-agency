<template>
  <div class="shopping-basket-information">
    <h3 class="shopping-basket-subtitle">Váš nákupní košík</h3>
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

</style>