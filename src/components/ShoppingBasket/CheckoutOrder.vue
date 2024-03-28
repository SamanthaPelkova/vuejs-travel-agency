<template>
  <div>
    <SendOrderForm :price="totalPrice" class="form-send-order-component"/>
  </div>
</template>

<script>
import SendOrderForm from "@/components/ShoppingBasket/BasketProduct/SendOrderForm/SendOrderForm.vue";
import { computed } from "vue";
import { useCartStore } from "@/orderModule";

export default {
  components: {SendOrderForm},


  setup() {
    const cartStore = useCartStore()

    const totalPrice = computed(() => {
      let subtotalPrice = 1
      cartStore.cartItems.forEach((ticket) => {
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
.form-send-order-component {
  padding-top: 160px;
}

</style>