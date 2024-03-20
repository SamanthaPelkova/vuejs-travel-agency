<template>
    <div class="travel-product">
      <div>
        <h3 class="product-title jq--about-us">{{ product.title }}</h3>
        <h2 class="product-price">{{ product.price }}</h2>
        <img :src="product.image" class="product-image" alt="">
        <p class="product-description">{{ product.description }}</p>
        <div class="product-quantity">
          <button @click="decreaseQuantity" class="button-decrease-increase minus">-</button>
          <input v-model="quantity" min="1" class="product-input-quantity">
          <button @click="increaseQuantity" class="button-decrease-increase plus">+</button>
          <button class="add-to-basket">{{ addToBasketTitle }}</button>
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useScroll } from "@/script";
import data from "@/data";

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },

  setup() {
    const products = ref(data)
    const { scrollTo } = useScroll()
    const quantity = ref(1)

    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--
      }
    }

    const increaseQuantity = () => {
      quantity.value++
    }

    const travelProductsTitle = ref('Products we offer')
    const addToBasketTitle = ref('Add to basket')
    const travelProductsSubtitle = ref('Lorem Ipsum tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be')


    return {
      travelProducts: products,
      scrollTo,
      quantity,
      decreaseQuantity,
      increaseQuantity,
      travelProductsTitle,
      addToBasketTitle,
      travelProductsSubtitle
    }
  }
}


</script>

<style>
.travel-product {
  background: linear-gradient(to bottom, #006aff, #0047AB);
  display: flex;
  border-radius: 60px;
  margin: 20px;
}

.product-image {
  width: 80%;
  border-radius: 170px;
  background: white;
  margin: 30px 50px;
}

.product-title {
  margin-left: 40px;
  margin-top: 20px;
  background-color: rgba(0, 71, 171, 0.74);
  border-radius: 50px 20px;
  color: white;
  padding: 12px 40px;
  font-size: 35px;
  width: 70%;
}

.product-price {
  font-size: 30px;
  background-color: #172c64;
  width: 10%;
  text-align: center;
  position: absolute;
  margin-left: 190px;
  margin-top: 10px;
  border-radius: 100px;
  padding: 10px;
  color: white;
}

.product-description {
  background-color: #0047AB;
  color: white;
  padding: 30px;
  border-radius: 20px;
  font-size: 18px;
  margin: 20px;
  text-align: center;
}

.minus {
  padding: 20px;
  width: 30%;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 10px;
  background-color: #0047AB;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
}

.plus {
  padding: 20px;
  width: 30%;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 10px;
  background-color: #0047AB;
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
}
.product-input-quantity {
  padding: 20px;
  width: 28%;
  font-size: 20px;
  border: 2px solid #172c64;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
}

.add-to-basket {
  width: 80%;
  padding: 20px;
  font-size: 15px;
  margin-left: 40px;
  margin-bottom: 30px;
  color: #0047AB;
  border: 2px solid #172c64;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s;
}
.add-to-basket:hover {
  background-color: #006aff;
  color: white;
  font-weight: bold;
}
</style>