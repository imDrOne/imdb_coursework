<template>
  <v-container id="acter-page">
    Hello {{this.$route.name}}
    {{this.$route.params.id}}
    <v-row >
      <v-col cols="3">
        <v-card color="white" class="pa-2">
          <v-card-title class="pa-1">{{localActerInfo.acter}}</v-card-title>
          <v-img :src="localActerInfo.avatar === null
          ? `https://api.adorable.io/avatars/148/${localActerInfo.acter}@adorable.io.png`
          : localActerInfo.avatar"/>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          color="white"
          width="700"
          class="pa-3 mb-2 mx-auto"
          v-for="film in localActerInfo.filmInfo"
          :key="film.id_film"
        >
          <v-card-title>{{film.film}}</v-card-title>
          <v-card-subtitle>Дата выпуска: {{film.release_date}}</v-card-subtitle>
          <v-row no-gutters>
            <v-col cols="5">
              <v-img :src="film.img_film" width="300" height="400"/>
            </v-col>
           <v-col class="ml-2">
             {{content(film.category, localActerInfo.acter)}}
           </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Acter',
  data: () => ({
    localActerInfo: {}
  }),
  computed: {
    ...mapGetters({
      acterInfo: 'GET_INFO_ABOUT_ACTER'
    })
  },
  methods: {
    content (param, name) {
      if (param === null) {
        return `За этот фильм ${name} наград не получал`
      }
      return `За этот фильм ${name} получил награду в номинации ${param}`
    }
  },
  created () {
    this.localActerInfo = this.acterInfo(parseInt(this.$route.params.id))
  }
}
</script>

<style scoped>

</style>
