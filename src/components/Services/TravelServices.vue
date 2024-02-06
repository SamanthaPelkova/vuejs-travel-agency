<template>
  <h2 class="offer">{{ offerTitle }}</h2>
  <p class="offer-subtitle">{{ offerSubtitle }}</p>
  <div class="travel-services" v-for="service in services" :key="service.id">
    <p class="service-label">{{ service.label }}</p>
    <h3 class="service-title">{{ service.title }}</h3>
    <img :src="service.image" class="service-image" alt="">
    <p class="service-description">{{ service.description }}</p>
  </div>
</template>

<script>



import {ref} from "vue";
import image1 from "@/pictures/sauna.jpg";
import image2 from "@/pictures/massage.jpg";
import image3 from "@/pictures/yoga.jpg";
import image4 from "@/pictures/work-out.jpg";
import image5 from "@/pictures/swimming-pool.jpg";

export default {
  name: 'TravelServices',
  setup(){
    const services = ref([
      {
        id: 1,
        title: 'Sauna',
        description: 'fioejfojfj eojf ioejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju  Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be un nijeju  on iji',
        label: 'Recently added',
        image: image1
      },
      {
        id: 2,
        title: 'Masáže',
        description: 'fioejfojfj eLorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å beojf ioejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        label: 'Lowest price',
        image: image2
      },
      {
        id: 3,
        title: 'Yoga',
        description: 'fioejfojfj eojf ioeLorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å bejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        label: 'Discount 230CZK',
        image: image3
      },
      {
        id: 4,
        title: 'Cvičení',
        description: 'fioejfojfj eojf ioeLorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å bejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        label: '1 + 1 free',
        image: image4
      },
      {
        id: 5,
        title: 'Plavecký bazén',
        description: 'fioejfojfj eojf ioeLorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å bejfij ief jio jj ifji iofj o ifjij iojei jjioefj ijeij ioj eiji ju un nijeju  on iji',
        label: 'Recently added',
        image: image5
      }
    ])

    const offerTitle = ref('Our Services')
    const offerSubtitle = ref('Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be. Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. m tok i bruk nettopp Lorem Ipsum for dummytekst.Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,llegg til å be')


    return {
      services,
      offerTitle,
      offerSubtitle
    }
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

.offer-subtitle {
  font-size: 20px;

  margin-left: 15px;
  margin-top: 20px;
}

.travel-services{
  width: 60%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px;
}
</style>