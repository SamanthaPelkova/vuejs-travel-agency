<template>
  <h2 class="offer">{{  }}</h2>

  <footer>
    © 2024 TravelAgency. All rights reserved.
  </footer>
</template>

<script>


export default {
  name: 'TravelServices',
  setup() {
  }

}
</script>

<style scoped>
*{
  color: white;
}

.service-image {
  width: 70%;
  margin-left: -200px;
  border-radius: 40px;
  box-shadow: 10px 10px 50px white;
}

.service-label{
  position: absolute;
  background: rgba(51, 135, 203, 0.8);
  margin-top: -20px;
  font-size: 25px;
  margin-left: -600px;
  border-radius: 50px 8px 50px 8px;
  padding: 15px;
}

.service-title{
  position: absolute;
  margin-left: 1600px;
  font-size: 50px;
  background: none;
  box-shadow: 5px 5px 60px rgba(47, 105, 213, 0.41);
  padding: 20px;
  border-radius: 60px;
  margin-top: 10px;
}

.service-description{
  position: absolute;
  margin-right: -1600px;
  text-align: center;
  margin-top: 180px;
  background: none;
  color: white;
  font-size: 20px;
  padding: 30px;
  transform: rotate(-0.99turn);
  border-radius: 5px 20px 5px 20px;
  box-shadow: 5px 5px 90px rgba(47, 105, 213, 0.41);
  width: 40%;
}

.offer {
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

.travel-services{
  width: 60%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px;
}
</style>