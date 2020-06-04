<template>
  <v-container id="film-page">
    <v-row>
      <v-col cols="4">
        <v-card color="white" class="pa-1">
          <v-card-title class="pa-1">
            <v-img :src="film.img"/>
            {{film.film_name}}
          </v-card-title>
          <v-card-subtitle class="pl-1 py-1" v-text="genre"/>
          <v-card-actions>
            <v-chip
              v-for="(tag, index) in film.tags"
              :key="index"
              class="ma-1"
              color="pink"
              label
              text-color="white"
            >
              <v-icon left>mdi-label</v-icon>
              {{tag}}
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-row justify="center">
          <v-card
            class="white mx-2 mb-2 pa-2"
            max-width="220"
            max-height="300"
            v-for="acter  in acters"
            :key="acter.id">
            <v-card-title class="pa-1">{{acter.acter}}</v-card-title>
            <v-img
              :src="acter.avatar === null
              ? `https://api.adorable.io/avatars/148/${acter.acter}@adorable.io.png`
              : acter.avatar"
              height="200"></v-img>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Film',
  data: () => ({
    localData: null,
    film: {},
    acters: []
  }),
  computed: {
    ...mapGetters({
      getFilmInfo: 'GET_INFO_ABOUT_FILM'
    }),
    genre () {
      const genres = this.film.genres.join(', ')
      return `Жанры: ${genres}`
    }
  },
  created () {
    [this.film, this.acters] = this.getFilmInfo(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
