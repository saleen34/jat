<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="scores">
        <v-icon @click="scoreDown" color="red"> mdi-arrow-down </v-icon>
        {{ name }}:
        {{ score }}
        <v-icon @click="scoreUp" color="green"> mdi-arrow-up </v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Score",
  props: {
    name: String,
    scoreUp: Boolean,
    scoreDown: Boolean,
    isDouble: Boolean,
  },
  data: () => ({
    score: 0,
  }),
  methods: {
    moveScoreUp() {
      let upScore = 100;
      if (this.isDouble) {
        upScore = 400;
      }
      this.score += upScore;
    },
    moveScoreDown() {
      let upScore = 100;
      if (this.isDouble) {
        upScore = 400;
      }
      this.score -= upScore;
    },
  },
  watch: {
    scoreUp() {
      this.moveScoreUp();
    },
    scoreDown() {
      this.moveScoreDown();
    }
  }
};
</script>
<style lang="css" scoped>
.scores {
  background-color: #060ce9;
  color: #FFF;
}
</style>