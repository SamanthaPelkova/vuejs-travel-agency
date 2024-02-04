<template>
    <header>
      <img class="logo" alt="hilton-logo" src="../../pictures/icons/logo.png"/>
      <h1 class="logo-text">Travel The World</h1>
        <nav id="desktop-nav">
          <ul class="nav-links">
            <li>
              <router-link to="/">About</router-link>
            </li>
            <li>
              <router-link to="/services">Services</router-link>
            </li>
            <li>
              <router-link to="/notesWishlist">Notes</router-link>
            </li>
            <li>
              <router-link to="travelProducts">Products</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </nav>
    </header>
</template>

<script>

export default {
    setup() {

    },
  }


</script>

<style scoped>
header {
  width: 100%;
  margin-top: -10px;
  height: 100px;
  margin-left: -10px;
}

.logo {
  float: left;
  width: 8%;
  margin-top: -25px;
}

.logo-text {
  float: left;
  margin-left: 30px;
  margin-top: 25px;
  margin-bottom: -10px;
  font-size: 45px;
  color: #fff;
}

nav .nav-links{
  display: flex;
  float: right;
  margin-top: 25px;
  margin-right: -650px;
  padding-right: 50px;
  background-color: #33c1de;
  border-radius: 40px;
  box-shadow: 8px 8px 30px black;
}

nav ul li{
  margin: 20px;
  align-items: center;
  font-size: 30px;
  list-style: none;
  background-color: #33c1de;
}

a{
  text-decoration: none;
  background-color: #33c1de;
  color: white;
  transition: 0.5s;
  margin-top: 10px;
}

a:hover {
  color: #f3ecce;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

</style>