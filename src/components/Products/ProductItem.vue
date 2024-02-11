<template>
    <div class="travel-product">
      <div>
        <h3 class="product-title jq--about-us">{{ product.title }}</h3>
        <h2 class="product-price">{{ product.price }}</h2>
        <img :src="product.image" class="product-image" alt="">
        <p class="product-description">{{ product.description }}</p>
        <div class="product-quantity">
          <button @click="decreaseQuantity" class="button-decrease-increase">-</button>
          <input v-model="quantity" min="1" class="product-input-quantity">
          <button @click="increaseQuantity" class="button-decrease-increase">+</button>
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
  background-color: white;
  display: flex;
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
  background-color: #2faec5;
  border-radius: 50px 20px;
  color: white;
  padding: 12px 40px;
  font-size: 40px;
}

.product-price {
  font-size: 30px;
  background-color: #227c8d;
  width: 8%;
  text-align: center;
  position: absolute;
  margin-left: 250px;
  margin-top: -30px;
  border-radius: 100px;
  padding: 10px;
  color: white;
}

.product-description {
  background-color: #2ca3b9;
  padding: 30px;
  border-radius: 20px;
  font-size: 18px;
  margin-bottom: 40px;
}

.button-decrease-increase {
  padding: 20px;
  font-size: 20px;
  border: 2px solid #227c8d;
  border-radius: 10px;
  background-color: #2ea5bb;
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
}
.product-input-quantity {
  padding: 20px;
  width: 18%;
  font-size: 20px;
  border: 2px solid #227c8d;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
}

.add-to-basket {
  width: 40%;
  padding: 20px;
  font-size: 15px;
  margin-left: 20px;
  color: white;
  border: 2px solid #227c8d;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s;
}
.add-to-basket:hover {
  background-color: white;
  font-weight: bold;
  color: #15515d;
}
</style>