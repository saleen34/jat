<template>
  <div>
    <v-container pa-12>
      <v-card pa-12 v-if="category" @click="showAnswer">
        {{ categoryText }}
      </v-card>
      <v-card pa-12 v-if="!category"> {{ answerText }} </v-card>
    </v-container>
    <audio
      ref="finalAudio"
      src="@/assets/audio/final.mp3"
      preload
      muted
    ></audio>
  </div>
</template>
<script>
export default {
  name: "FinalJeopardy",
  data: () => ({
    category: true,
    answerText: "THIS IS THE ANSWER TO THE GAME",
    categoryText: "CATEGORY TEXT",
  }),
  methods: {
    showAnswer() {
      this.category = false;
      let self = this;
      setTimeout(function(){ self.$refs.finalAudio.play(); }, 5000);
    },
  },
};
</script>
<style lang="css" scoped>
.theme--light.v-card {
  background-color: #060ce9;
  color: #fff;
  font-size: 100px;
}
.answerText {
  cursor: pointer;
}
.catColor {
  color: white !important;
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