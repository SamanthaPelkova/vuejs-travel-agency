<template>
    <header>
      <img class="logo" alt="hilton-logo" src="../../pictures/hilton-logo.png"/>
      <h1 class="logo-text">Hilton Brno</h1>
        <nav id="desktop-nav">
          <ul class="nav-links">
            <li><a href="src/components/HomePage/HomePage.vue">About</a></li>
            <li><a href="src/components/HomePage/HomePage.vue">Services</a></li>
            <li><a href="src/components/HomePage/HomePage.vue">Reviews</a></li>
            <li><a href="src/components/HomePage/HomePage.vue">Products</a></li>
            <li><a href="src/components/HomePage/HomePage.vue">Contact</a></li>
          </ul>
        </nav>
    </header>
</template>

<script>
export default {

}

</script>

<style scoped>
header{
  background-color: #5A454B;
  z-index: 99;
  width: 100%;
  position: fixed;
}

.logo{
  float: left;
  width: 6%;
  margin-top: -7px;
}

.logo-text {
  float: left;
  margin-left: 30px;
  margin-top: -10px;
  font-family: cursive;
  font-size: 50px;
  color: #fff;
}

nav .nav-links{
  display: flex;
  float: right;
  margin-right: 90px;
}

nav ul li{
  margin: 10px;
  align-items: center;
  font-size: 20px;
  list-style: none;
}

a{
  text-decoration: none;
  color: white;
  transition: 0.5s;
}

a:hover {
  color: #8D6E6E;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

</style>