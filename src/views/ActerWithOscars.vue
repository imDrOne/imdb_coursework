<template>
    <v-container id="acters-with-critics">
      <div class="headline">Актеры с Оскарами</div>
      <v-row no-gutters  justify="center">
        <v-card
          width="240"
          max-height="340"
          v-for="acter in acters"
          :key="acter.id"
          class="ma-2 pa-2"
        >
          <v-card-title class="pa-1">{{acter.acter}}</v-card-title>
          <v-img
            :src="acter.avatar === null
          ? `https://api.adorable.io/avatars/148/${acter.acter}@adorable.io.png`
          : acter.avatar"
            height="250"
          />
          <v-card-actions>
            <v-btn text :to="{name: 'acter', params: {id: acter.id}}">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ActerWithOscars',
  computed: {
    ...mapGetters({
      acters: 'GET_ACTERS_WITH_OSCARS'
    })
  }
}
</script>

<style scoped>

</style>
