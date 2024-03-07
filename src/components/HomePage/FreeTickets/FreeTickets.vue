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
        <h2 class="title-paris-ticket">Paris</h2>
        <a class="second"><router-link to="/freeTicketsToParis">Details</router-link></a>
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
  margin-left: -280px;
  background-color: white;
  border-radius: 40px 40px 11px 1px;
  color: deepskyblue;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  position: absolute;
  margin-top: -30px;
  width: 13%;
}

.title-paris-ticket {
  margin-left: -250px;
  background-color: white;
  border-radius: 40px 40px 11px 1px;
  color: deepskyblue;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  position: absolute;
  margin-top: -30px;
  padding: 10px;
  width: 13%;
}

.title-spain-ticket {
  padding: 11px;
}

.title-free-tickets {
  color: white;
  background: none;
  margin-top: -400px;
  width: 30%;
  float: right;
  margin-right: 320px;
  text-decoration: 3px underline;
}

.links-free-tickets {
  width: 30%;
  float: right;
  display: flex;
  margin-top: -300px;
  list-style: none;
}

.links-free-tickets li {
  text-decoration: none;
  padding-right: 100px;
  color: white;
}

.links-free-tickets li .first {
  position: absolute;
  margin-top: 15px;
  margin-left: -159px;
}

.links-free-tickets li .second {
  position: absolute;
  margin-top: 15px;
  margin-left: -129px;
}

.links-free-tickets li a {
  background-color: white;
  font-size: 15px;
  padding: 5px;
  border-radius: 1px 1px 20px 20px;
  color: #227c8d;
}

.free-ticket-price-first {
  font-size: 15px;
  background-color: rgba(34, 124, 141, 0.6);
  width: 8%;
  position: absolute;
  margin-top: -25px;
  margin-left: -220px;
  border-radius: 30px 1px 1px 30px;
  padding: 10px;
  color: white;
}

.free-ticket-price-second {
  font-size: 15px;
  background-color: rgba(34, 124, 141, 0.6);
  width: 8%;
  position: absolute;
  margin-top: -25px;
  margin-left: -197px;
  border-radius: 30px 1px 1px 30px;
  padding: 10px;
  color: white;
}

.spain-img {
  width: 165%;
  background: none;
  margin-left: -280px;
  margin-top: 30px;
  border-radius: 1px 1px 20px 20px;
}

.paris-img {
  width: 158%;
  margin-left: -250px;
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
  border-radius: 1px 20px 1px 20px;
  margin-left: -150px;
  margin-top: -67px;
}

.date-paris {
  position: absolute;
  background-color: white;
  padding: 10px;
  color: #227c8d;
  font-weight: bold;
  transform: rotate(-0.75turn);
  border-radius: 1px 20px 1px 20px;
  margin-left: -130px;
  margin-top: -72px;
}


</style>