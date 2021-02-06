<template>
  <div>
    <v-dialog v-model="dialog" class="dialog" @input="close" fullscreen>
      <v-card align="center" justify="center" class="pa-12">
        <video height="768" controls>
          <source
            v-if="link"
            :src="require('@/assets/video/' + link + '')"
            type="video/mp4"
            autoplay
          />
        </video>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "OverlayVideo",
  props: {
    visible: { type: Boolean, default: false },
    link: { type: String },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    close() {
      this.$emit("close-dialog");
    },
  },
  watch: {
    visible(val) {
      if (!val) {
        this.close();
      } else {
        this.dialog = true;
      }
    },
  },
};
</script>
<style scoped>
.theme--light.v-card {
  background-color: #060ce9;
  color: #fff;
  font-size: 70px;
}
</style>