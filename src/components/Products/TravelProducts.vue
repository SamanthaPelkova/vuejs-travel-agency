<template>
  <div class="content">
    <h2 class="travel-products-title"> {{ travelProductsTitle }} </h2>
    <h2 class="travel-products-subtitle"> {{ travelProductsSubtitle }} </h2>
      <div class="products">
        <product-item
        v-for="product in travelProducts"
        :key="product.id"
        :product="product"
        class="product-item"
        />
      </div>
    <button class="scroll-to-top-arrow" @click="scrollTo('.logo-text')"><img src="../../pictures/icons/white-arrow.png" alt=""></button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useScroll } from "@/script";
import data from "@/data";
import ProductItem from "@/components/Products/ProductItem.vue";

export default {
  components: {ProductItem},

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
  width: 100%;
  text-align: center;
}

.products {
  display: flex;
  justify-content: center;
  border-radius: 20px;
  width: 95%;
  flex-wrap: wrap;
}

.product-item{
  width: calc(25% - 40px);
}

</style>