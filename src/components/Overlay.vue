<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn>
      </template>
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
