<template>
  <div id="slider">
    <v-slide-group
      dark
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="film in topFilms"
        :key="film.id"
        :value="model"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'blue-grey darken-3' : '#121212'"
          flat class="ma-3"
          @click="toggle"
        >
          <v-img width="300" height="400" :src="film.img"/>
          <v-card-text class="pa-0 title">{{film.name}}</v-card-text>
          <v-card-actions class="pa-0">
            <v-row no-gutters align="center" justify="space-between">
              <v-rating
                :value="+film.avgfilm"
                color="amber"
                dense length="10"
                half-increments
                readonly size="14"
              />
              <v-btn text>Подробнее</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'd-slider',
  props: {
    wide: Boolean
  },
  data: () => ({
    model: null,
    loading: false
  }),
  computed: {
    ...mapGetters({
      topFilms: 'GET_TOP_FILMS'
    })
  },
  methods: {
    test () {
      console.log(123)
    }
  }
}
</script>

<style scoped>

</style>
