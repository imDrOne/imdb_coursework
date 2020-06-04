<template>
  <v-app class="theme--dark">
    <v-app-bar app dark>
      <d-bar-content/>
    </v-app-bar>
    <v-content>
      <v-container v-if="loading" id="div" align="center">
        <div class="display-4" align="center">
          App loading...
        </div>
      </v-container>
     <router-view v-else/>
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

  async mounted () {
    await this.fetchRootData()
    this.loading = false
  },

  data: () => ({
    author: 'Тихолоз Андрей',
    loading: true
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
