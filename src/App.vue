<template>
  <v-app class="theme--dark">
    <v-app-bar app dark>
      <d-bar-content/>
    </v-app-bar>
    <v-content>
     <router-view></router-view>
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
export default {
  name: 'App',

  components: {
    DBarContent
  },

  mounted () {
    this.fetchRootData()
  },

  data: () => ({
    author: 'Тихолоз Андрей'
  }),
  methods: {
    ...mapActions({
      fetchRootData: 'UPDATE_STORE'
    })
  },
  computed: {
    footerContent () {
      return `${new Date().getFullYear()} - <strong>${this.author}</strong>`
    }
  }
}
</script>
<style lang="scss">
  .content {
    background-color: #272727;
  }
</style>
