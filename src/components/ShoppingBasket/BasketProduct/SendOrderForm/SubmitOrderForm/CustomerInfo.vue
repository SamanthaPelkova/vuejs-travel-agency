<template>
  <form>
    <label for="firstName" class="label-send-order"><strong>Jméno: </strong></label> <br>
    <input type="text" id="firstName" v-model="customerInfo.firstName" required> <br>
    <label for="lastName" class="label-send-order"><strong>Příjmení: </strong></label> <br>
    <input type="text" id="lastName" v-model="customerInfo.lastName" required> <br>
    <label for="email" class="label-send-order"><strong>Email: </strong></label> <br>
    <input type="email" id="email" v-model="customerInfo.email" required> <br>
    <label for="phone" class="label-send-order"><strong>Mobil: </strong></label> <br>
    <input  id="phone" v-model="customerInfo.phone" required> <br>
  </form>
</template>

<script>

import {ref} from "vue";

export default {
  emits:['order-customer-info'],
  setup(_,{ emit }){
    const customerInfo = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    })

    emit('order-customer-info', customerInfo)

    return {
      customerInfo
    }
  }
}


</script>

<style>

</style>