<template>
  <div>
    <v-dialog v-model="dialog" class="dialog" @input="close" width="75%">
      <v-card class="pa-12">
        Rules/Disclaimer:
        <ul>
          <li>The questions are entirely made up could be completely wrong or bullshit, deal with it.</li>
          <li>The buzzer system sucks, make it work.</li>
          <li>You may only buzz in when the answer dialog goes away.</li>
          <li>There is a five second timer after you buzz in.</li>
        </ul>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "Disclaimer",
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
  color: #fff;
  font-size: 50px;
}
</style>