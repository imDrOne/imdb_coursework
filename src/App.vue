<template>
  <v-app class="theme--dark">
    <v-app-bar app dark>
      <d-bar-content/>
    </v-app-bar>
    <v-content>
     <v-row justify="center">
       <v-container>
         <div class="flex display-1">Топ фильмы</div>
         <d-slider wide/>
         <div class="flex display-1 mt-3">Актеры из Оскароносных фильмов</div>
         <v-row justify="center">
           <v-card
             color="white"
             v-for="acter in acterWithOscars"
             :key="acter.id"
             width="250"
             height="300"
             class="ma-3"
           >
             <v-card-title class="pb-0">{{acter.acter}}</v-card-title>
             <v-img max-height="250"
                    :src="acter.avatar === null
                    ? 'https://api.adorable.io/avatars/285/abott@adorable.png'
                    : acter.avatar"
             />
           </v-card>
         </v-row>
       </v-container>
     </v-row>
    </v-content>
    <v-footer app dark absolute>
      <v-col
        class="text-center"
        cols="12"
        v-html="footerContent"
      />
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DBarContent from './components/BarContent'
import DSlider from './components/Slider'
export default {
  name: 'App',

  components: {
    DSlider,
    DBarContent
  },

  mounted () {
    this.fetchRootData()
  },

  data: () => ({
    author: 'Тихолоз Андрей',
    contentRowColor: ''
  }),
  computed: {
    ...mapGetters({
      acterWithOscars: 'GET_ACTERS_WITH_OSCARS'
    }),
    footerContent () {
      return `${new Date().getFullYear()} - <strong>${this.author}</strong>`
    },
    avatar (acter) {
      return acter.avatar === null ? 'https://api.adorable.io/avatars/285/abott@adorable.png' : acter.avatar
    }
  },
  methods: {
    ...mapActions({
      fetchRootData: 'UPDATE_STORE'
    })
  }
}
</script>
<style lang="scss">
  .content {
    background-color: #272727;
  }
</style>
