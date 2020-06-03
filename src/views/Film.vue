<template>
    <div id="film-page">
      Hello {{this.$route.name}}  {{this.$route.params.id}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Film',
  data: () => ({
    localData: null
  }),
  computed: {
    ...mapGetters({
      getFilmInfo: 'GET_INFO_ABOUT_FILM'
    })
  },
  created () {
    this.localData = this.getFilmInfo(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
