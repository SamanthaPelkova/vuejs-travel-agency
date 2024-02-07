<template>
  <div class="content">
    <h2 class="travel-products-title"> {{ travelProductsTitle }} </h2>
    <h2 class="travel-products-subtitle"> {{ travelProductsSubtitle }} </h2>
    <div class="travel-products"  v-for="product in travelProducts" :key="product.id">
      <div class="travel-product">
        <h3 class="product-title jq--about-us">{{ product.title }}</h3>
        <h2 class="product-price">{{ product.price }}</h2>
        <img :src="product.image" class="product-image" alt="">
        <p class="product-description">{{ product.description }}</p>
        <div class="product-quantity">
          <button @click="decreaseQuantity" class="button-decrease">-</button>
          <input v-model="quantity" min="1" class="product-input-quantity">
          <button @click="increaseQuantity" class="button-increase">+</button>
        </div>
      </div>
    </div>
    <button class="scroll-to-top-arrow" @click="scrollTo('.logo-text')"><img src="../../pictures/icons/white-arrow.png" alt=""></button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useScroll } from "@/script";
import data from "@/data";

export default {

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
    const travelProductsSubtitle = ref('Lorem Ipsum tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be')


    return {
      travelProducts: products,
      scrollTo,
      quantity,
      decreaseQuantity,
      increaseQuantity,
      travelProductsTitle,
      travelProductsSubtitle
    }
  }
}

</script>

<style>
.travel-products-title {
  background-color: white;
  padding: 50px;
  width: 55%;
  text-align: center;
  margin-left: 10px;
  margin-top: 90px;
  font-size: 60px;
  color: #3ACBE8;
  border-radius: 70px 5px 70px 5px;
}

.travel-products-subtitle {
  color: white;
  margin-top: 40px;
  margin-left: 20px;
  width: 55%;
  text-align: center;
}

.travel-products {
  display: flex;
  flex-wrap: wrap;
}

.travel-products {
  justify-content: center;
  border-radius: 90px;
  margin-top: 80px;
  background-color: #227c8d;
  padding: 40px;
  width: 40%;
  margin-left: 90px;
}

.travel-product {
  width: calc(110% - 20px);
  text-align: center;
  padding: 30px;
  border-radius: 90px;
  background-color: white;
}

.product-image {
  width: 65%;
  border-radius: 170px;
  background: white;
  margin: 30px;
}

.product-title {
  margin-left: 40px;
  width: 40%;
  background-color: white;
  font-size: 40px;
}

.product-price {
  font-size: 50px;
  background-color: #227c8d;
  width: 12%;
  position: absolute;
  margin-left: 390px;
  border-radius: 100px;
  margin-bottom: -80px;
  padding: 10px;
  color: white;
}

.product-description {
  background-color: white;

}





</style>