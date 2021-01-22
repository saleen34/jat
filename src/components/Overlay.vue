<template>
  <div class="text-center">
    <v-dialog v-model="dialog">
      <v-card>
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
    value: String
  },
};
</script>
