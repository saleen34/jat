<template>
  <div>
    <v-dialog fullscreen v-model="dialog" class="dialog" @input="close">
      <v-card align="center" justify="center">
        {{ text }}
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "Overlay",
  props: {
    visible: { type: Boolean, default: false },
    text: { type: String },
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
}
</style>