<template>
  <section>
    <div class="contact-info">
      <h2>Contact Info</h2>
      <p>ojfoidjfdfoijfoe jeijfiojf ejij jgej oi jjioej oj ioej iojjeo jiojf j ioejf oiej oiejf ioej i</p>
    </div>
  </section>
</template>

<script>
import {inject} from "vue";

export default {
  setup (){
    const contactInfo = inject('/contactInfo')

    return{
      contacts: contactInfo
    }
  }
}


</script>

<style scoped>

</style>