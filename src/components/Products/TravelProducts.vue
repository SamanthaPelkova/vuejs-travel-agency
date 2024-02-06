<template>
  <div class="content">
    <h2 class="travel-products-title"> {{ travelProductsTitle }} </h2>
    <h2 class="travel-products-subtitle"> {{ travelProductsSubtitle }} </h2>
    <div class="travel-products"  v-for="product in travelProducts" :key="product.id">
      <h3 class="product-title jq--about-us">{{ product.title }}</h3>
      <img :src="product.image" class="product-image" alt="">
      <p class="product-price">{{ product.price }}</p>
      <p class="product-description">{{ product.description }}</p>
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

    const travelProductsTitle = ref('Produkty, které nabízíme')
    const travelProductsSubtitle = ref('Lorem Ipsum tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be')


    return {
      travelProducts: products,
      scrollTo,
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
  width: 60%;
}


.product-image {
  width: 25%;
  border-radius: 170px;
}




</style>