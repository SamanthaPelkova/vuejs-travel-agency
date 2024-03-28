<template>
  <div>
    <div v-if="cartItems.length === 0" class="basketIsEmpty">
      <h2>Košík je prázdný</h2>
    </div>
    <ul class="basket-products" v-if="cartItems.length">
      <li v-for="(ticket) in cartItems" :key="ticket.id" class="basket-product">
        <h3>{{ ticket.title }}</h3>
        <p>{{ ticket.description }}</p>
      </li>
    </ul>
    <div v-if="totalPrice > 0" class="basket-total-price">
      <h2 class="totalPrice">Celková cena: </h2>
      <h1 class="totalPriceSum">{{ vueNumberFormat(totalPrice) }}</h1>
    </div>
  </div>
  <button class="checkout-page-btn" ><router-link to="/checkout">Pokračovat</router-link></button>
</template>

<script>
import { useCartStore } from "@/orderModule"
import {computed} from "vue";

export default {
  props: {
    filteredItems: {
      type: Array,
      required: true
    }
  },
  setup() {
    const cartStore = useCartStore()

    const totalPrice = computed(() => {
      let subtotalPrice = 1990
      cartStore.cartItems.forEach((ticket) => {
        subtotalPrice += ticket.price
      })
      return subtotalPrice
    })


    return {
      cartItems: cartStore.cartItems,
      totalPrice
    }
  }



}
</script>



<style>
.basket-products {
  background-color: #d5d5d5;
  padding: 10px;
}

.basket-total-price {
  background-color: white;
  text-align: center;
  margin-top: 150px;
}

.basket-product {
  margin-top: 20px;
  padding: 10px;
  background-color: rgba(245, 245, 245, 0.63);
}

.checkout-page-btn {
  width: 30%;
  padding: 20px;
  border-radius: 60px;
  border: none;
  background-color: #ffffff;
  font-size: 25px;
  color: black;
  margin-top: 50px;
  margin-left: 580px;
  text-decoration: none;

}


</style>