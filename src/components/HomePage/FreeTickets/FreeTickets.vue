<template>
  <div class="free-tickets">
    <h2 class="title-free-tickets">Free last-minute tickets to:</h2>
    <ul class="links-free-tickets">
      <li>
        <h2 class="title-spain-ticket">Spain</h2>
        <a class="first"><router-link to="/freeTicketsToSpain">Details</router-link></a>
        <img src="../../../pictures/icons/spain-cathedral.jpeg" alt="" class="spain-img">
        <h4 class="free-ticket-price-first"> from 399CZK</h4>
        <p class="date-spain">20/2/24, 7:30</p>
      </li>
      <li>
        <h2 class="title-spain-ticket">Paris</h2>
        <a class="first"><router-link to="/freeTicketsToParis">Details</router-link></a>
        <img src="../../../pictures/icons/eiffel-tower.jpeg" alt="" class="paris-img">
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
  margin-left: -150px;
  background-color: white;
  border-radius: 40px 40px 1px 1px;
  color: deepskyblue;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  transition: 1s;
  position: absolute;
  margin-top: -30px;
  width: 16.5%;
}

.title-spain-ticket {
  margin-right: 70px;
  padding: 15px;
}

.title-free-tickets {
  color: white;
  background: none;
  margin-top: -500px;
  width: 30%;
  float: right;
  margin-right: 280px;
  text-decoration: 3px underline;
}

.links-free-tickets {
  width: 35%;
  float: right;
  display: flex;
  margin-top: -420px;
  list-style: none;
}

.links-free-tickets li {
  text-decoration: none;
  padding-right: 100px;
  color: white;
}

.links-free-tickets li .first {
  position: absolute;
  margin-top: 35px;
  margin-left: -140px;
}

.links-free-tickets li a {
  background-color: white;
  font-size: 20px;
  padding: 5px;
  border-radius: 1px 1px 20px 20px;
  color: #227c8d;
}

.free-ticket-price-first {
  font-size: 20px;
  background-color: #227c8d;
  width: 8%;
  position: absolute;
  margin-top: -30px;
  margin-left: -29px;
  border-radius: 30px 0px 0px 30px;
  padding: 10px;
  color: white;
}

.free-ticket-price-second {
  font-size: 20px;
  background-color: #227c8d;
  width: 8%;
  position: absolute;
  margin-top: -30px;
  margin-left: -30px;
  border-radius: 30px 0px 0px 30px;
  padding: 10px;
  color: white;
}

.spain-img {
  width: 134%;
  background: none;
  margin-left: -150px;
  margin-top: 30px;
  border-radius: 1px 1px 20px 20px;
}

.paris-img {
  width: 134%;
  margin-left: -150px;
  margin-top: 30px;
  border-radius: 1px 1px 20px 20px;
}

.date-spain {
  position: absolute;
  background-color: white;
  padding: 10px;
  color: #227c8d;
  font-weight: bold;
  transform: rotate(-0.75turn);
  border-radius: 0px 20px 0px 20px;
  margin-left: 85px;
  margin-top: -65px;
}

.date-paris {
  position: absolute;
  background-color: white;
  padding: 10px;
  color: #227c8d;
  font-weight: bold;
  transform: rotate(-0.75turn);
  border-radius: 0px 20px 0px 20px;
  margin-left: 79px;
  margin-top: -70px;
}


</style>