<template>
  <v-app class="theme--dark">
    <v-app-bar app dark>
      <d-bar-content/>
    </v-app-bar>
    <v-content>
     <v-row justify="center">
       <v-container style="height: 2000px">
         <div class="flex display-1">Top films</div>
         <d-slider wide/>
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
import { mapActions } from 'vuex'
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
    footerContent () {
      return `${new Date().getFullYear()} - <strong>${this.author}</strong>`
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
