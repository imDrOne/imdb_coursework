<template>
    <div id="main-page">
      <v-row justify="center">
        <v-container>
          <div class="flex display-1">Топ фильмы</div>
          <d-slider wide/>
          <div class="flex display-1 mt-3">Актеры из Оскароносных фильмов</div>
          <v-container>
            <v-row justify="center">
              <v-card
                color="white"
                v-for="acter in acterWithOscars"
                :key="acter.id"
                width="250"
                class="ma-3"
              >
                <v-card-title class="pb-0">{{acter.acter}}</v-card-title>
                <v-card-text>
                  <v-img height="250"
                         :src="acter.avatar === null
                    ? `https://api.adorable.io/avatars/285/${acter.acter}@adorable.png`
                    : acter.avatar"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-btn color="orange" text :to="{name: 'acter', params: {id: acter.id}}">Подробнее</v-btn>
                </v-card-actions>
              </v-card>
            </v-row>
          </v-container>
        </v-container>
      </v-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DSlider from '../components/Slider'
export default {
  name: 'Main',
  components: { DSlider },
  computed: {
    ...mapGetters({
      acterWithOscars: 'GET_ACTERS_AT_TOP_FILMS'
    }),
    avatar (acter) {
      return acter.avatar === null ? 'https://api.adorable.io/avatars/285/abott@adorable.png' : acter.avatar
    }
  }
}
</script>

<style scoped>

</style>
