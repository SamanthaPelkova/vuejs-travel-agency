<template>
  <div>
    <h1 class="paris-title">Paříž</h1>
    <img src="../../../../pictures/icons/paris-image.jpeg" class="paris-detail-img" alt="">
    <p class="paris-subtitle">Lorem Ipsum tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be</p>
    <div class="departure-paris">
      <h2 class="departure-title">ODLET</h2>
      <h3 class="departure-date">Den: 20/February/2024</h3>
      <h3 class="departure-time">Čas: 7:30 SEČ</h3>
      <p class="departure-price">Cena: 399CZK</p>
    </div>
    <div class="buttons-paris">
      <button @click="decreaseQuantity" class="button-decrease-increase-paris minus">-</button>
      <input v-model="quantity" min="1" class="product-input-quantity-paris">
      <button @click="increaseQuantity" class="button-decrease-increase-paris plus">+</button>
      <button class="add-to-basket-paris">Přidat do košíku</button>
    </div>
    <div class="remaining-time-spain">
      <h1 class="remaining-time-spain-title">Tahle nabídka brzy končí!</h1>
      <h2 class="remaining-time-spain-timer">{{ remainingTime }}</h2>
    </div>
  </div>
</template>

<script>

import {onMounted, ref} from "vue";

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

    const remainingTime = ref('10:00');

    const startTimer = () => {
      let cas = 600
      const casovac = setInterval(() => {
        let minutes = Math.floor(cas / 60)
        let seconds = cas % 60

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        remainingTime.value = minutes + ":" + seconds

        if (cas <= 0) {
          clearInterval(casovac)
          alert("Čas vypršel! Nabídka již není aktivní.")
        }
        cas--;
      }, 1000)
    };

    onMounted(() => {
      startTimer();
    });



    return {
      quantity,
      decreaseQuantity,
      increaseQuantity,
      remainingTime
    }
  }
}


</script>

<style>
.paris-title {
  width: 40%;
  padding-left: 30px;
  background-color: #0047AB;
  font-size: 50px;
  color: white;
  position: absolute;
  z-index: 300;
  margin-left: 138px;
  margin-top: 20px;
}

.paris-detail-img {
  width: 35%;
  margin-left: 85px;
  margin-top: 180px;
  border-radius: 50px;
}

.paris-subtitle {
  color: white;
  font-weight: bold;
  margin-top: -608px;
  margin-left: 800px;
  padding: 40px;
  text-align: center;
  background-color: #0039a6;
  border-radius: 30px 1px 1px 30px;
}

.buttons-paris {
  margin-left: 720px;
  background: none;
  position: absolute;
  margin-top: 300px;
}

.button-decrease-increase-paris {
  padding: 20px 50px;
  font-size: 20px;
  border: 2px solid #0039a6;
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

.product-input-quantity-paris {
  padding: 20px;
  width: 20%;
  border-top: 1px solid #0039a6;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #0039a6;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.82);
  text-align: center;
  font-weight: bold;
}

.add-to-basket-paris {
  width: 55%;
  padding: 20px;
  font-size: 20px;
  color: white;
  border: 2px solid #0039a6;
  border-radius: 30px;
  position: absolute;
  margin-left: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s;
}

.add-to-basket-paris {animation: pulse 2s infinite}
@keyframes pulse {
  0%, 100% {transform: scale(1)}
  50% {transform: scale(1.05); background-color: white; color: #0039a6}
}

.add-to-basket-paris:hover {
  background-color: white;
  color: #0039a6;
  font-weight: bold;
}

.departure-paris {
  width: 24%;
  text-align: center;
  font-size: 20px;
  position: absolute;
  margin-top: 10px;
  margin-left: 1250px;
  color: white;
}

.departure-title {
  padding: 20px;
  color: #0039a6;
  background-color: rgba(255, 255, 255, 0.81);
  border-radius: 30px 30px 1px 1px;
}

.departure-time {
  background-color: #0039a6;
  padding: 10px;
}

.departure-date {
  background-color: #0039a6;
  padding: 10px;
}

.departure-price {
  background-color: #0039a6;
  border-radius: 1px 1px 50px 50px;
  padding: 15px;
}

.remaining-time-spain {
  float: right;
  margin-right: 465px;
  margin-top: 10px;
  background-color: rgba(255, 0, 0, 0.31);
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

.remaining-time-spain-timer {
  font-size: 45px;
  color: #3ACBE8;
}


</style>