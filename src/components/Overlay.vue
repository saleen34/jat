<template>
  <div>
    <v-dialog v-model="dialog" class="dialog" @input="close" width="75%">
      <v-card align="center" justify="center" class="pa-12">
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
  color: #ffcc00;
  font-size: 70px;
}
</style>