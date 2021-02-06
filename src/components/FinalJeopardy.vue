<template>
  <div>
      Hello
  </div>
</template>
<script>

export default {
  name: "FinalJeopardy",
  components: {
  },
};
</script>
<style lang="css" scoped>
.theme--light.v-card {
  background-color: #060ce9;
  color: #ffcc00;
}
.answerText {
  cursor: pointer;
}
.catColor {
  color: white!important;
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
.theme--light.v-card.blank {
  color: #060ce9;
}
</style>