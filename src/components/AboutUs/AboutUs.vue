<template>
  <div class="about-us-body">
    <img alt="#" src="../../pictures/icons/airplane-about-us.png" class="about-us-image">
      <button class="scroll-to-top-arrow" @click="scrollTo('.logo-text')"><img src="../../pictures/icons/white-arrow.png" alt=""/></button>
    <div class="content">
      <h2 class="about-us-title">Služby které nabízíme :)</h2>
      <h2 class="offer-subtitle">Vítejte v naší nabídce služeb, které jsou navrženy tak, aby vaše cestování bylo ještě pohodlnější a příjemnější. Plánujete dovolenou plnou dobrodružství nebo podnikáte pracovní cestu do nové destinace? Chcete si užít klidný a bezstarostný pobyt, aniž byste se museli trápit organizací detailů? S naší širokou škálou služeb se nemusíte starat o drobnosti. Od zajištění parkovacího místa až po pronájem vozidla, jsme tu, abychom usnadnili každý krok vaší cestovní přípravy. Naše cílem je zajistit, abyste si své cestování plně užili, bez ohledu na to, zda jste na dovolené se svou rodinou, nebo podnikáte obchodní cestu.</h2>
      <button @click="scrollTo('.jq--about-us')" class="btn-read-more">Zjistit více</button>
      <div class="travel-offers" v-for="offer in offers" :key="offer.id">
        <h3 class="offers-title jq--about-us">{{ offer.title }}</h3>
        <img :src="offer.image" class="offer-image" alt="">
        <p class="offer-price">{{ offer.price }}</p>
        <p class="offer-description">{{ offer.description }}</p>
      </div>
    </div>
    <footer>
      © 2024 TravelAgency. All rights reserved.
    </footer>
  </div>
</template>

<script>

import {onMounted, ref} from "vue";
import image1 from '../../pictures/icons/parking-spot.png'
import image2 from '../../pictures/icons/plane-around-earth.png'
import image3 from '../../pictures/icons/travelling.png'
import image4 from '../../pictures/icons/animal-plane.png'
import { useScroll } from "@/script";

export default {
  setup(){
    const { scrollTo } = useScroll()

    onMounted(() => {

    })

    const offers = ref([
      {
        id: 1,
        title: 'Levné parkování',
        description: 'Nemusíte se dále trápit hledáním parkovacího místa nebo obavami o bezpečnost vašeho vozidla. S naší službou bezstarostného parkování si můžete rezervovat parkovací místo přímo u našeho zařízení, což vám ušetří čas a stres. Naše parkoviště jsou pečlivě navržena tak, aby poskytovala bezpečné a pohodlné parkování pro vaše vozidlo. S moderními bezpečnostními opatřeními a pravidelným monitorováním můžete mít klidnou mysl a soustředit se na svou cestu. Navíc, s naší službou rezervace parkovacího místa nemusíte trávit čas hledáním volného místa, protože vaše parkovací místo bude připraveno na vás až po příjezdu. Užijte si bezstarostné parkování a soustřeďte se na to nejlepší z vaší cesty.',
        price: 'od 350 Kč za noc',
        image: image1
      },
      {
        id: 2,
        title: 'Levné letenky',
        description: 'Snažíme se vám přinášet nejlepší ceny na letenky, abyste mohli cestovat za dostupnou cenu. Naše nabídka zahrnuje široký výběr destinací po celém světě, ať už plánujete dovolenou nebo pracovní cestu. Navíc, abychom vám ještě více usnadnili cestování, pravidelně nabízíme speciální slevy a akce pro naše zákazníky. Díky našim levným letenkám můžete cestovat za skvělé ceny, aniž byste museli utrácet více než je nutné. Nechte nás vzít vás na palubu a vydejte se na svou další dobrodružnou cestu za snovými destinacemi.',
        price: 'od 250 Kč',
        image: image2
      },
      {
        id: 3,
        title: 'Levné ubytování',
        description: 'Vaše pohodlí a spokojenost jsou pro nás prioritou, a proto nabízíme široký výběr kvalitního ubytování ve vybraných destinacích po celém světě. S pečlivě vybranými hotely, apartmány a penziony vám můžeme garantovat komfortní a příjemný pobyt během vaší cesty. Naše ubytování jsou pečlivě vybírána s ohledem na jejich kvalitu, bezpečnost, čistotu a pohodlí, abyste se cítili jako doma i v cizí zemi. Bez ohledu na to, zda cestujete za prací nebo za zábavou, jsme tu, abychom vám zajistili optimální ubytování, které splní vaše očekávání a přispěje k nezapomenutelnému zážitku z vaší cesty.',
        price: 'od 550 Kč za noc',
        image: image3
      },
      {
        id: 4,
        title: 'Mazlíčci vítání',
        description: 'Vaši mazlíčci jsou součástí vaší rodiny a my to plně respektujeme. Proto jsme hrdí na to, že nabízíme ubytování, které vítá vaše čtyřnohé přátele s otevřenou náručí. U nás nemusíte řešit otázky ohledně péče o vaše zvířecí společníky během vaší cesty. Naše ubytování pro mazlíčky jsou navržena tak, aby poskytovala pohodlí a bezpečí jak vám, tak vašim mazlíčkům. Užijte si dovolenou bez starostí a vezměte svého mazlíčka s sebou na nezapomenutelné dobrodružství plné radosti a společenství.',
        price: 'od 110 Kč za noc',
        image: image4
      }
    ])

    return {
      offers,
      scrollTo
    }
  }
}
</script>

<style>
.about-us-body {
  //background-color: #0047AB;
  background: linear-gradient(to left, #172c64, #0047AB);
}

.travel-offers {
  display: flex;
  justify-content: center;
  margin-top: 70px;
  flex-wrap: wrap;
}

.about-us-title {
  background-color: white;
  padding: 50px;
  text-align: center;
  font-size: 60px;
  color: #0047AB;
  border-radius: 70px 0px 0px 70px;
  box-shadow: 3px 3px 60px 3px white;
  margin-top: 150px;
  margin-left: 550px;
}

.offer-image{
  width: 40%;
  margin-left: -950px;
  border-radius: 40px;
  margin-top: 160px;
}

.offers-title {
  width: 33%;
  position: absolute;
  margin-left: 1200px;
  font-size: 50px;
  background-color: #0039a6;
  color: white;
  padding: 30px 120px 30px 30px;
  z-index: 200;
  border-radius: 60px 1px 1px 60px;
  margin-top: 190px;
}

.offer-price {
  position: absolute;
  z-index: 200;
  margin-left: 400px;
  font-size: 20px;
  font-family: sans-serif;
  background-color: #0039a6;
  color: greenyellow;
  padding: 20px;
  border-radius: 60px;
  margin-top: 255px;
}

.about-us-image {
  width: 40%;
  position: absolute;
  margin-top: 300px;
}

.about-us-image { animation: bounce 2s infinite}
@keyframes bounce {
  0% {transform: translateY(0)}
  50% {transform: translateY(-20px) rotate(-0.01turn)}
}

.offer-description {
  position: absolute;
  margin-right: -950px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.94);
  margin-top: 300px;
  color: #0047AB;
  font-size: 20px;
  padding: 30px 190px 30px 50px;
  border-radius: 60px 1px 1px 60px;
  box-shadow: 5px 5px 90px #172c64;
  width: 50%;
}

.offer-subtitle {
  color: white;
  margin-top: 40px;
  margin-left: 20px;
  width: 55%;
  text-align: center;
}

.btn-read-more {
  background-color: #0047AB;
  border: 2px solid white;
  border-radius: 20px;
  width: 30%;
  margin-left: 880px;
  margin-top: 80px;
  color: white;
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
}

.scroll-to-top-arrow {
  background: none;
  border: none;
}

.scroll-to-top-arrow img{
  position: absolute;
  background: #227c8d;
  width: 5%;
  border-radius: 70px;
  box-shadow: 2px 2px 40px #172c64;
  cursor: pointer;
  margin-top: 40px;
  transform: rotate(-0.75turn);
  margin-left: 1750px;
}

.offer-subtitle {
  font-size: 20px;
  margin-left: 675px;
  margin-top: 70px;
}


</style>