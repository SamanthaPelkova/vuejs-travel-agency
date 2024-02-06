<template>
  <div class="notes-class">
    <h2 class="notes-title">{{ notesTitle }}</h2>
    <h4 class="notes-subtitle">{{ notesSubtitle }}</h4>
    <div class="travel-notes">
      <h2 class="travel-title-note">{{ travelNotesTitle }}</h2>
      <div class="add-notes">
        <h3>{{ placeToTravel }}</h3>
        <input type="text" placeholder="Paris..." v-model="enteredTravelTitle">
        <h3>{{ whatToSee }}</h3>
        <input type="text" placeholder="See the Eiffel Tower..." class="input-places" v-model="enteredTravelGoals">
        <h3>{{ numberOfPeople }}</h3>
        <input type="number" min="1" placeholder="2" v-model="enteredTravelPeople">
        <h3>{{ firstName }}</h3>
        <input type="text" placeholder="Jana" v-model="enteredTravelFirstName">
        <h3>{{ lastName }}</h3>
        <input type="text" placeholder="Nováková" v-model="enteredTravelLastName">
        <h3>{{ email }}</h3>
        <input type="email" placeholder="jana.novakova@gmail.com" v-model="enteredTravelEmail">
      </div>
        <button @click="addNotesItem" type="submit" class="button-submit">{{ submit }}</button>
    </div>
    <div class="entered-notes">
      <h1 class="your-notes-title">{{ yourNotes }}</h1>
      <ul class="note-items">
        <li v-for="note in notesItems" :key="note" class="note-item">
          {{ note }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'NotesWishlist',
  setup () {
    const notesTitle = ref('Here is your wishlist')
    const notesSubtitle = ref('or your notes if you prefer ;)')
    const travelNotesTitle = ref('Here you can add a note')
    const placeToTravel = ref('State')
    const whatToSee = ref('Places')
    const numberOfPeople = ref('People')
    const submit = ref('Submit')
    const firstName = ref('FirstName')
    const lastName = ref('LastName')
    const yourNotes = ref('Your Notes')
    const email = ref('*Email')

    const notesItems = ref([])

    const addNotesItem = () => {
      notesItems.value.push(enteredTravelTitle.value, enteredTravelGoals.value, enteredTravelPeople.value, enteredTravelFirstName.value, enteredTravelLastName.value, enteredTravelEmail.value)
      enteredTravelTitle.value = ''
      enteredTravelGoals.value = ''
      enteredTravelPeople.value = ''
      enteredTravelFirstName.value = ''
      enteredTravelLastName.value = ''
      enteredTravelEmail.value = ''
    }


    const enteredTravelTitle = ref('')
    const enteredTravelGoals = ref('')
    const enteredTravelPeople = ref('')
    const enteredTravelFirstName = ref('')
    const enteredTravelLastName = ref('')
    const enteredTravelEmail = ref('')

    return {
      notesTitle,
      notesSubtitle,
      travelNotesTitle,
      enteredTravelTitle,
      enteredTravelGoals,
      enteredTravelFirstName,
      enteredTravelLastName,
      enteredTravelEmail,
      firstName,
      lastName,
      email,
      whatToSee,
      numberOfPeople,
      enteredTravelPeople,
      placeToTravel,
      addNotesItem,
      notesItems,
      yourNotes,
      submit
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
  border-radius: 70px 0 70px 0;
}

.notes-subtitle {
  color: rgba(58, 160, 232, 0.91);
  margin-top: -60px;
  text-align: center;
  margin-left: 300px;
  font-size: 20px;
  background: none;
}

.travel-notes {
  background-color: white;
  width: 80%;
  margin-left: 200px;
  border-radius: 23px;
}

.travel-title-note {
  margin-left: 200px;
  color: #227c8d;
  padding: 20px;
  margin-top: 70px;
  font-size: 50px;
  background-color: white;
  border-radius: 23px;
}

.add-notes {
  background-color: white;
  margin-left: 530px;
}

.add-notes h3 {
  background-color: #227c8d;
  width: 20%;
  text-align: center;
  color: white;
  font-size: 30px;
  margin-left: -150px;
  border-radius: 60px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.add-notes input {
  background-color: white;
  border-radius: 20px;
  border: 2px solid #227c8d;
  padding: 10px;
  width: 500px;
}

.button-submit {
  font-size: 30px;
  text-align: center;
  margin-left: 580px;
  color: white;
  padding: 10px;
  margin-top: 50px;
  border-radius: 70px;
  background-color: #3ACBE8;
  border: thick double #227c8d;
  margin-bottom: 50px;
  width: 25%;
  cursor: pointer
}

.input-places {
  height: 100px;
}

.your-notes-title {
  margin-top: -820px;
  padding: 10px;
  background-color: #227c8d;
  border-radius: 40px;
  text-align: center;
  color: white;
}

.entered-notes {
  margin-left: 1300px;
  margin-right: 250px;
  background-color: white;
}

.note-items {
  border-radius: 20px;
  padding: 5px 10px;
  margin-top: 10px;
  list-style-type: none;
}

.note-item {
  margin-top: 20px;
}

</style>