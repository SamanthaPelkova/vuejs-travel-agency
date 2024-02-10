<template>
  <div>
    <h1 class="spain-title">Spain</h1>
    <img src="../../../../pictures/icons/spain-cathedral.jpeg" class="spain-detail-img" alt="">
    <p class="spain-subtitle">Lorem Ipsum tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be</p>
    <h2></h2>
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
.spain-title {
  background-color: white;
  padding: 30px 120px;
  font-size: 60px;
  color: #3ACBE8;
  margin-top: 30px;
}

.spain-detail-img {
  width: 35%;
  margin-left: 40px;
  margin-top: -20px;
  border-radius: 50px;
}

.spain-subtitle {
  color: white;
  font-weight: bold;
  margin-top: -658px;
  margin-left: 700px;
  margin-right: 380px;
  padding: 40px;
  text-align: center;
  background-color: #33c1de;
  border-radius: 1px 1px 30px 30px;
}

.buttons-spain {
  margin-left: 800px;
  background: none;
  position: absolute;
  margin-top: 55px;
}

.button-decrease-increase-spain {
  padding: 20px 50px;
  font-size: 20px;
  border: 1px solid #227c8d;
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
  border-top: 1px solid #227c8d;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #227c8d;
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
  border: 2px solid #227c8d;
  border-radius: 30px;
  position: absolute;
  margin-left: 60px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s;
}

.add-to-basket-spain:hover {
  background-color: white;
  font-weight: bold;
  color: #15515d;
}


</style>