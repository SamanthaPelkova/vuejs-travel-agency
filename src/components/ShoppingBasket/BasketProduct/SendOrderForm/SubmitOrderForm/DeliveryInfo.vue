<template>
  <form>
    <h2 class="block-delivery-method" v-if="!phone.length">2. Doručovací údaje</h2>
    <div v-if="phone.length">
      <h3 class="send-order-delivery-title">Doručovací adresa:</h3>
      <label for="street" class="label-send-order"><strong>Ulice: </strong></label> <br>
      <input type="text" id="street" v-model="deliveryInfo.street" required> <br>
      <label for="city" class="label-send-order"><strong>Město: </strong></label> <br>
      <input type="text" id="city" v-model="deliveryInfo.city" required> <br>
      <label for="postCode" class="label-send-order"><strong>PSČ: </strong></label> <br>
      <input type="text" id="postCode" v-model="deliveryInfo.postCode" required> <br>
    </div>
  </form>
</template>

<script>

import { ref } from "vue";

export default {
  emits:['order-delivery-info'],
  props: {
    phone: {
      required: true,
    }
  },
  setup(_,{ emit }){
    const deliveryInfo = ref({
      street: '',
      city: '',
      postCode: ''
    })

    emit('order-delivery-info', deliveryInfo)

    return {
      deliveryInfo
    }
  }
}


</script>

<style>
.send-order-delivery-title {
  font-size: 35px;
  color: #006aff;
  margin-left: -25px;
}

</style>