<template>
  <v-row
    id="bar-content"
    no-gutters
    class="mx-12"
    align="center"
  >
    <v-img
      src="@/assets/test.png"
      height="36"
      contain
      max-width="90"
    />
    <v-btn depressed>
      <v-icon left color="white">mdi-menu</v-icon>
      Menu
    </v-btn>
    <v-col cols="8">
      <v-text-field
        outlined color="white"
        class="mx-6"
        append-icon="mdi-magnify"
        label="Search IMDb"
        single-line
        hide-details
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'd-bar-content',
  created () {
    console.log(this.$vuetify)
  }
}
</script>

<style scoped>

</style>
