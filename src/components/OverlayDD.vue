<template>
  <div>
    <v-dialog v-model="dialog" class="dialog" @input="close" width="75%">
      <v-card align="center" justify="center" class="pa-12">
        <img src="@/assets/dailydouble.png" />
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "OverlayDD",
  props: {
    visible: { type: Boolean, default: false },
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
}
</style>