<template>
  <div>
    <v-dialog fullscreen :value="dialog" @input="$emit('input')" class="dialog">
      <v-card align="center" justify="center">
        {{ value }}
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "Overlay",
  props: {
    dialog: Boolean,
    value: String,
  },
};
</script>
<style scoped>
.theme--light.v-card {
  background-color: #060ce9;
  color: #fff;
}
</style>