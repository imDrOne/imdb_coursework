<template>
    <v-container id="critics-page">
      <div class="headline">Злобные критики</div>
      <v-row no-gutters align="center">
        <v-card
        class="pa-2 ma-2"
        v-for="critic in critics"
        :key="critic.id"
        >
          <v-card-title>{{critic.nick_name}}</v-card-title>
         <v-img :src="`https://api.adorable.io/avatars/148/${critic.nick_name}@adorable.io.png`"/>
        </v-card>
      </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Critics',
  computed: {
    ...mapGetters({
      critics: 'GET_BAD_CRITICS'
    })
  }
}
</script>

<style scoped>

</style>
