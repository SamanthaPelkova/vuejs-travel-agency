<template>
  <form @submit.prevent="submitOrder">
    <div class="form-send-order">
      <h1 class="title-send-order">Vyplnťe prosím formulář:</h1>
      <CustomerInfo @order-customer-info="handleCustomerInfo"/>
      <DeliveryInfo @order-delivery-info="handleDeliveryInfo" :phone="order.customerInfo.phone" />
      <h2 class="block-pay-method" v-if="!order.deliveryInfo.postCode.length">3. Platební údaje</h2>
      <div class="paymethod-block-send-order" v-if="order.deliveryInfo.postCode.length">
        <h2><strong>Platba: </strong></h2>
        <h2>Cena: {{ vueNumberFormat(price) }}</h2>
        <h3 class="label-send-order">Platební metoda:</h3>
        <select id="payMethod" v-model="selectedPayMethod">
          <option v-for="payMethod in payMethods" :key="payMethod" :value="payMethod">
            {{ payMethod }}
          </option>
        </select>
        <h3 class="label-send-order">Měna:</h3>
        <select id="currency" v-model="selectedCurrency">
          <option v-for="currency in currencies" :key="currency" :value="currency">
            {{ currency }}
          </option>
        </select> <br>
      </div>
      <button type="submit" class="button-send-order-disabled" v-if="!selectedCurrency">Odeslat objednávku</button>
      <button type="submit" class="button-send-order" v-else>Odeslat objednávku</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useOrderStore } from '@/orderModule'
import CustomerInfo from "@/components/ShoppingBasket/BasketProduct/SendOrderForm/SubmitOrderForm/CustomerInfo.vue";
import DeliveryInfo from "@/components/ShoppingBasket/BasketProduct/SendOrderForm/SubmitOrderForm/DeliveryInfo.vue";

export default {
  components: {DeliveryInfo, CustomerInfo},
  props: {
    price: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const orderStore = useOrderStore();
    const selectedCurrency = ref('')
    const selectedPayMethod = ref('')
    const currencies = ['CZK', 'EUR', 'USD', 'GBP']
    const payMethods = ['Dobírka', 'Platba kartou', 'ApplePay']
    const order = ref({
      customerInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      deliveryInfo: {
        street: '',
        city: '',
        postCode: ''
      },
      payMethod: {
        price: props.price,
        selectedPayMethod: selectedPayMethod,
        currency: selectedCurrency
      }
    })

    const handleCustomerInfo = (info) => {
      order.value.customerInfo = info
    }

    const handleDeliveryInfo = (info) => {
      order.value.deliveryInfo = info
    }

    const handlePayMethodInfo = (info) => {
      order.value.payMethod = info
    }

    const submitOrder = () => {
      const orderData = {
        customerInfo: {
          firstName: order.value.customerInfo.firstName,
          lastName: order.value.customerInfo.lastName,
          email: order.value.customerInfo.email,
          phone: order.value.customerInfo.phone,
          deliveryAddress: {
            street: order.value.deliveryInfo.street,
            city: order.value.deliveryInfo.city,
            postCode: order.value.deliveryInfo.postCode
          },
          payment: {
            price: order.value.payMethod.price,
            payMethod: selectedPayMethod,
            currency: selectedCurrency
          }
        },
      }

      orderStore.addOrder(orderData)
      console.log(orderStore.orders)

      order.value = {
        customerInfo: {
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        },
        deliveryInfo: {
          street: '',
          city: '',
          postCode: ''
        },
        payMethod: {
          price: props.price,
          payMethod: '',
          currency: ''
        }
      }

      alert('Objednávka byla úspěšně odeslána!')
    }

    return {
      selectedCurrency,
      selectedPayMethod,
      currencies,
      payMethods,
      order,
      submitOrder,
      handleCustomerInfo,
      handleDeliveryInfo,
      handlePayMethodInfo
    }
  }
}
</script>

<style>




.form-send-order {
  width: 80%;
  background-color: #efefef;
  border-radius: 60px;
  margin-left: 100px;
  padding: 50px;
  text-align: left;
}

.title-send-order {
  margin-bottom: 30px;
}

.block-delivery-method {
  background-color: white;
  margin-top: 20px;
  margin-bottom: -10px;
  color: #ababab;
  text-align: left;
  padding-left: 70px;
}

.block-pay-method {
  background-color: white;
  margin-top: 20px;
  margin-bottom: -18px;
  color: #ababab;
  text-align: left;
  padding-left: 70px;
}

.button-send-order {
  width: 40%;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 20px;
  border-radius: 30px;
  font-weight: bold;
  color: white;
  background-color: #172c64;
  border: 2px solid #006aff;
  cursor: pointer;
}

.button-send-order-disabled {
  width: 40%;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 20px;
  border-radius: 30px;
  font-weight: bold;
  color: rgba(229, 229, 229, 0.78);
  background-color: rgba(51, 63, 96, 0.43);
  border: 2px solid rgba(51, 63, 96, 0.32);
}

.label-send-order {
  color: #172c64;
  font-size: 25px;
}

input {
  width: 50%;
  padding: 15px;
  border-radius: 40px;
  border: 2px solid rgba(0, 0, 0, 0.44);
}

.delivery-method-block-send-order {

}

</style>