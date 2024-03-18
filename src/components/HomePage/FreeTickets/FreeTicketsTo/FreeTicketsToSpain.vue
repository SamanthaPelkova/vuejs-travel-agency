<template>
  <div>
    <h1 class="spain-title">Spain</h1>
    <img src="../../../../pictures/icons/spain-cathedral-image.jpeg" class="spain-detail-img" alt="">
    <p class="spain-subtitle">Lorem Ipsum tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be</p>
    <div class="departure">
      <div class="jj">
        <h2 class="departure-title">DEPARTURE</h2>
        <h3 class="departure-date">Date: 20/February/2024</h3>
        <h3 class="departure-time">Time: 7:30 SEČ</h3>
        <p class="departure-price">Price: 399CZK</p>
      </div>
    </div>
    <div class="buttons-spain">
      <button @click="decreaseQuantity" class="button-decrease-increase-spain minus">-</button>
      <input v-model="quantity" min="1" class="product-input-quantity-spain">
      <button @click="increaseQuantity" class="button-decrease-increase-spain plus">+</button>
      <button class="add-to-basket-spain">Add to basket</button>
    </div>
  </div>
</template>

<script>

import {ref} from "vue";

export default {



  setup() {
    const quantity = ref(1)

    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--
      }
    }

    const increaseQuantity = () => {
      quantity.value++
    }



    return {
      quantity,
      decreaseQuantity,
      increaseQuantity
    }
  }
}


</script>

<style>
body {
  background-color: #0039a6;
}

.spain-title {
  width: 100%;
  background-color: white;
  padding: 30px 120px;
  font-size: 60px;
  color: #0039a6;
  position: absolute;
  margin-top: 150px;
}

.spain-detail-img {
  width: 35%;
  margin-left: 40px;
  margin-top: 300px;
  border-radius: 50px;
}

.spain-subtitle {
  color: white;
  font-weight: bold;
  margin-top: -608px;
  margin-left: 640px;
  margin-right: 380px;
  padding: 40px;
  text-align: center;
  background-color: #172c64;
  border-radius: 1px 1px 30px 30px;
}

.buttons-spain {
  margin-left: 1020px;
  background: none;
  position: absolute;
  margin-top: 250px;
}

.button-decrease-increase-spain {
  padding: 20px 50px;
  font-size: 20px;
  border: 2px solid #172c64;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
}

.minus {
  border-radius: 30px 1px 1px 30px;
}

.plus {
  border-radius: 1px 30px 30px 1px;
}

.product-input-quantity-spain {
  padding: 20px;
  width: 20%;
  border-top: 1px solid #172c64;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #172c64;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.82);
  text-align: center;
  font-weight: bold;
}

.add-to-basket-spain {
  width: 55%;
  padding: 20px;
  font-size: 20px;
  color: white;
  border: 2px solid #172c64;
  border-radius: 30px;
  position: absolute;
  margin-left: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s;
}

.buttons-spain .add-to-basket-spain {animation: pulse 2s infinite}
@keyframes pulse {
  0%, 100% {transform: scale(1)}
  50% {transform: scale(1.05); background-color: white; color: #172c64}
}

.buttons-spain .add-to-basket-spain:hover {
  background-color: white;
  color: #172c64;
  font-weight: bold;
}

.departure .jj {
  width: 120%;
  text-align: center;
  font-size: 20px;
  position: absolute;
  margin-left: -390px;
  margin-top: 245px;
  color: white;
}

.departure .departure-title {
  padding: 20px;
  color: #0039a6;
  background-color: rgba(255, 255, 255, 0.81);
  border-radius: 1px;
}

.departure .departure-time {
  background-color: #0147c4;
  padding: 10px;
}

.departure .departure-date {
  background-color: #0147c4;
  padding: 10px;
}

.departure .departure-price {
  background-color: #172c64;
  border-radius: 1px 1px 50px 50px;
  padding: 15px;
}


</style>