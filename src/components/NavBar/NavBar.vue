<template>
    <header>
      <router-link class="home-page-redirect" to="/" ><img class="logo" alt="" src="../../pictures/icons/logo.png"></router-link>
      <h1 class="logo-text">Procestuj svět s LOOD</h1>
        <nav id="desktop-nav">
          <ul class="nav-links">
            <li>
              <router-link to="/aboutUs">O nás</router-link>
            </li>
            <li @click="scrollTo('.offer')">
              <router-link to="/travelServices">Služby</router-link>
            </li>
            <li @click="scrollTo('.notes-class')">
              <router-link to="/notesWishlist">Poznámky</router-link>
            </li>
            <li @click="scrollTo('.content')">
              <router-link to="travelProducts">Letenky</router-link>
            </li>
            <li @click="scrollTo('.contact-info')">
              <router-link to="/contactInfo">Kontakt</router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="/shoppingBasket">
                <a href=""><img class="img-shopping-cart" src="../../pictures/icons/shopping-cart.png" alt=""></a>
              </router-link>
            </li>
          </ul>
        </nav>
    </header>
</template>

<script>

import { useScroll } from "@/script";

export default {
    setup() {
      const { scrollTo } = useScroll()

      return {
        scrollTo
      }
    },
  }


</script>

<style scoped>
header {
  width: 100%;
  margin-top: -10px;
  height: 100px;
  position: absolute;
}

.logo {
  float: left;
  width: 10%;
  margin-top: -25px;
}

.logo-text {
  float: left;
  margin-top: 30px;
  margin-bottom: -10px;
  background: none;
  font-size: 50px;
  color: #fff;
}

nav .nav-links {
  display: flex;
  float: right;
  margin-top: 15px;
  padding-right: 30px;
  margin-right: 130px;
  border-radius: 40px;
  box-shadow: 8px 8px 30px black;
  border: 3px solid white;
}

nav ul li {
  margin: 20px;
  align-items: center;
  font-size: 20px;
  list-style: none;
}

a {
  text-decoration: none;
  color: white;
  transition: 0.5s;
  margin-top: 10px;
}

a:hover {
  color: #f3ecce;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

.img-shopping-cart {
  width: 5%;
  position: absolute;
  margin-left: 876px;
  margin-top: 12px;
  border-radius: 70px;
  box-shadow: 5px 5px 90px black;
  border: 3px solid white;
}

</style>