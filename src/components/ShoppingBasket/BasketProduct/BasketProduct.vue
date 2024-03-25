<template>
  <div>
    <div v-if="filteredItems.length === 0" class="basketIsEmpty">
      <h2>Košík je prázdný</h2>
    </div>
      <ul>
        <li v-for="(ticket) in filteredItems" :key="ticket.id">
          <img :src="ticket.image" alt=""/>
          {{ ticket.name }} - {{ ticket.quantity * ticket.price }} Kč
          <button class="removeFromBasket" @click="$emit('remove-item', ticket.id)">Odstranit</button>
        </li>
      </ul>
    <hr>
    <div v-if="totalPrice > 0">
      <h2 class="totalPrice">Celková cena: </h2>
      <h1 class="totalPriceSum">{{ vueNumberFormat(totalPrice) }}</h1>
    </div>
    <SendOrderForm :price="totalPrice"/>
  </div>
</template>

<script>
import { computed } from "vue"
import SendOrderForm from "@/components/ShoppingBasket/BasketProduct/SendOrderForm/SendOrderForm.vue";

export default {
  components: { SendOrderForm },
  props: {
    filteredItems: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const totalPrice = computed(() => {
      let subtotalPrice = 1990
      props.filteredItems.forEach((ticket) => {
        subtotalPrice += ticket.price
      })
      return subtotalPrice
    })


    return {
      totalPrice
    }
  }



}
</script>



<style>



</style>