<template>
  <div id="slider">
    <v-slide-group
      v-model="model"
      dark
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="n in 4"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'grey' : '#121212'"
          flat class="ma-3" :width="cardSize.width" :height="cardSize.height"
          @click="toggle"
        >
          <v-img  height="200" :src="getImage(n)"/>
          <v-card-text class="pa-0 text--primary">lol</v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  name: 'd-slider',
  props: {
    cardSize: {
      type: Object
    },
    imgType: {
      type: String
    },
    wide: Boolean
  },
  created () {
    this.imageType = this.imgType
  },
  data: () => ({
    model: null,
    localImgType: '',
    pathArr: ['@/assets/content_1.jpg', '@/assets/content_2.jpg', '@/assets/content_3.jpg', '@/assets/content_4.jpg']
  }),
  computed: {
    imageType: {
      set (newVal) {
        this.localImgType = newVal
      },
      get () {
        return this.localImgType
      }
    }
  },
  methods: {
    getImage (i) {
      if (this.wide) return require(`@/assets/content_${i}.jpg`)
    }
  }
}
</script>

<style scoped>

</style>
