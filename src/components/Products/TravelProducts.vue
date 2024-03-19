<template>
  <div class="content">
    <h2 class="travel-products-title"> {{ travelProductsTitle }} </h2>
    <div class="content-tickets">
      <h2 class="travel-products-subtitle">Zapomeňte na rutinní cestování a otevřete dveře do světa plného možností a vzrušení. S našimi skvělými letenkami do nejžádanějších destinací nabízíme klíč k objevování úchvatných míst po celém světě. Od malebných pláží a tajemných džunglí po pulzující městské metropole a historické památky, naše letenky vás zavedou tam, kde se splní vaše největší sny o cestování. S naší širokou nabídkou destinací a flexibilními možnostmi letů si můžete vybrat tu pravou cestu pro vás a zažít dobrodružství, které si budete pamatovat po celý život. Nechte naše letenky být klíčem k vašemu dalšímu úžasnému dobrodružství a zažijte svět plný zázraků a nekonečných možností.</h2>
      <div class="products">
        <product-item
          v-for="product in travelProducts"
          :key="product.id"
          :product="product"
          class="product-item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useScroll } from "@/script";
import data from "@/data";
import ProductItem from "@/components/Products/ProductItem.vue";

export default {
  components: { ProductItem },

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


    return {
      travelProducts: products,
      scrollTo,
      quantity,
      decreaseQuantity,
      increaseQuantity,
      travelProductsTitle,
      addToBasketTitle
    }
  }
}

</script>

<style>
.content-tickets {
  position: absolute;
  margin-top: 150px;
  background: linear-gradient(to top, #006aff, #0047AB);

}
.travel-products-title {
  background-color: #0047AB;
  position: absolute;
  z-index: 300;
  padding: 10px;
  width: 40%;
  margin-top: 10px;
  margin-left: 158px;
  //margin-top: -50px;
  font-size: 50px;
  color: white;
}

.travel-products-subtitle {
  color: white;
  margin-top: 50px;
  margin-left: 50px;
  margin-bottom: 180px;
  width: 70%;
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