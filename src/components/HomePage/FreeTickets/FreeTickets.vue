<template>
  <div class="free-tickets">
    <h2 class="title-free-tickets">Free last-minute tickets to:</h2>
    <ul class="links-free-tickets">
      <li>
        <h2 class="title-spain-ticket">Spain</h2>
        <a class="first"><router-link to="/freeTicketsToSpain">Details</router-link></a>
        <img src="../../../pictures/icons/spain-cathedral-image.jpeg" alt="" class="spain-img">
        <h4 class="free-ticket-price-first"> from 399CZK</h4>
        <p class="date-spain">20/2/24, 7:30</p>
      </li>
      <li>
        <h2 class="title-paris-ticket">Paris</h2>
        <a class="second"><router-link to="/freeTicketsToParis">Details</router-link></a>
        <img src="../../../pictures/icons/paris-image.jpeg" alt="" class="paris-img">
        <h4 class="free-ticket-price-second">from 299CZK</h4>
        <p class="date-paris">18/2/24, 19:30</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {



  setup() {




    return {

    }
  }


}

</script>

<style>
.title-spain-ticket {
  background-color: rgba(255, 255, 255, 0.71);
  border-radius: 40px 40px 1px 1px;
  color: #00308F;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  position: absolute;
  margin-top: -90px;
  margin-left: 30px;
  width: 14.65%;
}

.title-paris-ticket {
  background-color: rgba(255, 255, 255, 0.71);
  border-radius: 40px 40px 1px 1px;
  color: #00308F;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  position: absolute;
  margin-top: -88px;
  margin-left: 221px;
  padding: 10px;
  width: 14.6%;
}

.title-spain-ticket {
  padding: 11px;
}

.title-free-tickets {
  color: white;
  background: none;
  margin-top: -165px;
  margin-left: 30px;
  width: 30%;
  float: right;
  margin-right: 320px;
  text-decoration: 3px underline;
  position: absolute;
}

.links-free-tickets {
  width: 30%;
  margin-left: 20px;
  display: flex;
  margin-top: -300px;
  list-style: none;
}

.links-free-tickets li {
  text-decoration: none;
  padding-right: 100px;
  background-color: white;
}

.links-free-tickets li .first {
  position: absolute;
  margin-left: 40px;
  margin-top: -27px;
  z-index: 1;
}

.links-free-tickets li .second {
  position: absolute;
  margin-top: -27px;
  margin-left: 230px;
  z-index: 1;
}

.links-free-tickets li a {
  background-color: white;
  font-size: 15px;
  padding: 5px;
  border-radius: 1px 1px 20px 20px;
  color: #172c64;
}

.free-ticket-price-first {
  font-size: 15px;
  background-color: rgba(23, 44, 100, 0.63);
  width: 8%;
  position: absolute;
  margin-top: 202px;
  margin-left: 110px;
  border-radius: 30px 1px 1px 30px;
  padding: 10px;
  color: white;
}

.free-ticket-price-second {
  font-size: 15px;
  background-color: rgba(23, 44, 100, 0.63);
  width: 8%;
  position: absolute;
  margin-top: 206px;
  margin-left: 300px;
  border-radius: 30px 1px 1px 30px;
  padding: 10px;
  color: white;
}

.spain-img {
  width: 14.7%;
  background: none;
  margin-top: -27px;
  margin-left: 30px;
  border-radius: 1px 1px 20px 20px;
  position: absolute;
}

.paris-img {
  width: 14.7%;
  margin-top: -27px;
  margin-left: 220px;
  border-radius: 1px 1px 20px 20px;
  position: absolute;
}

.date-spain {
  position: absolute;
  background-color: white;
  padding: 10px;
  color: #172c64;
  font-weight: bold;
  transform: rotate(-0.75turn);
  border-radius: 1px 20px 1px 20px;
  margin-left: 204px;
  margin-top: 160px;
}

.date-paris {
  position: absolute;
  background-color: white;
  padding: 10px;
  color: #172c64;
  font-weight: bold;
  transform: rotate(-0.75turn);
  border-radius: 1px 20px 1px 20px;
  margin-left: 390px;
  margin-top: 160px;
}


</style>