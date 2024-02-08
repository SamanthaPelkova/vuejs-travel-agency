<template>
  <div class="free-tickets">
    <h2 class="title-free-tickets">Free last-minute tickets to:</h2>
    <ul>
      <li>
        <router-link to="/freeTicketsToSpain">Spain</router-link>
      </li>
      <li>
        <router-link to="/freeTicketsToParis">Paris</router-link>
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
.title-free-tickets {
  color: white;
  margin-top: -330px;
  width: 30%;
  float: right;
  margin-right: 250px;
}

</style>