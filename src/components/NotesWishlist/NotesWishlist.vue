<template>
  <div>
    <h2 class="notes-title">{{ notesTitle }}</h2>
    <h4 class="notes-subtitle">{{ notesSubtitle }}</h4>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'NotesWishlist',
  setup () {
    const notesTitle = ref('Here is your wishlist')
    const notesSubtitle = ref('or your notes if you prefer ;)')

    return {
      notesTitle,
      notesSubtitle
    }
  }
}

</script>

<style scoped>
.notes-title {
  background-color: white;
  padding: 50px;
  text-align: center;
  font-size: 60px;
  color: #3ACBE8;
  border-radius: 70px 0px 70px 0px;
}

.notes-subtitle {
  color: rgba(58, 160, 232, 0.91);
  margin-top: -60px;
  text-align: center;
  margin-left: 300px;
  font-size: 20px;
  background: none;
}

</style>