<template>
  <div>
    <v-container class="answerText noselect">
      <v-card
        v-if="state == 'value'"
        class="pa-2"
        align="center"
        justify="center"
        outlined
      >
        ${{ value }}
      </v-card>
      <v-card
        v-if="state == 'answer'"
        class="pa-2"
        align="center"
        justify="center"
      >
        {{ answer }}
      </v-card>
      <v-card v-if="state == 'blank'" class="pa-2 blank"></v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "AnswerText",
  props: {
    value: Number,
    answer: String,
    state: String,
  },
};
</script>
<style lang="css" scoped>
.theme--light.v-card {
  background-color: #060ce9;
  color: #ffcc00;
  border: 3px solid black !important;
}
.theme--light.v-card.blank {
  color: #060ce9;
}
.answerText {
  cursor: pointer;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.theme--light.v-sheet--outlined {
  border: 3px solid black !important;
}
</style>