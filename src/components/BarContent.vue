<template>
  <v-row
    id="bar-content"
    no-gutters
    class="mx-12"
    align="center"
  >
    <router-link to="/">
      <v-img
              src="@/assets/test.png"
              height="36"
              contain
              max-width="90"
      />
    </router-link>
    <v-menu bottom :offset-y="true">
      <template v-slot:activator="{ on }">
        <v-btn depressed v-on="on">
          <v-icon left color="white" >mdi-menu</v-icon>
          Menu
        </v-btn>
      </template>

      <v-list>
        <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="{name: item.to}"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
  data: () => ({
    items: [
      { title: 'Самые строгие критики', to: 'strong-critics' },
      { title: 'Актеры получившие оскар', to: 'acters-with-oscars' }
    ]
  })
}
</script>

<style scoped>

</style>
