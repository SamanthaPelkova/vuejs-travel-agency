<template>
  <NavBar class="body" ></NavBar>
  <HomePage></HomePage>
</template>

<script>

import NavBar from "@/components/NavBar/NavBar.vue";
import HomePage from "@/components/HomePage/HomePage.vue";

export default {
  name: 'App',
  components: {
    HomePage,
    NavBar

  }
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #5A454B;
}

.body{
  background-color: black;
}

</style>
