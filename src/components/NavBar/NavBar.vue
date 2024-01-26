<template>
    <header>
      <img class="logo" alt="hilton-logo" src="../../pictures/hilton-logo.png"/>
      <h1 class="logo-text">Hilton Brno</h1>
        <nav id="desktop-nav">
          <ul class="nav-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
    </header>
</template>

<script>
export default {
  setup(){

  }

}

</script>

<style scoped>
header{
  background-color: #382C3B;
  z-index: 99;
  width: 100%;
  margin-top: -10px;
  height: 100px;
  position: fixed;
  margin-left: -10px;
}

.logo{
  float: left;
  width: 6%;
  margin-top: 15px;
  background-color: #382C3B;
}

.logo-text {
  float: left;
  margin-left: 30px;
  background-color: #382C3B;
  margin-top: 15px;
  margin-bottom: -10px;
  font-family: cursive;
  font-size: 50px;
  color: #fff;
}

nav .nav-links{
  display: flex;
  float: right;
  margin-right: 90px;
  background-color: #382C3B;

}

nav ul li{
  margin: 20px;
  align-items: center;
  font-size: 25px;
  list-style: none;
}

a{
  text-decoration: none;
  color: white;
  transition: 0.5s;
  background-color: #382C3B;
  margin-top: 10px;


}

a:hover {
  color: #8D6E6E;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

</style>