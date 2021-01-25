<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="scores">
        <v-icon @click="blueUp" color="green"> mdi-arrow-up </v-icon>
        <v-icon @click="blueDown" color="red"> mdi-arrow-down </v-icon>
        Blue:
        {{ blueScore }}
      </v-col>
      <v-col class="scores">
        <v-icon @click="pinkUp" color="green"> mdi-arrow-up </v-icon>
        <v-icon @click="pinkDown" color="red"> mdi-arrow-down </v-icon>
        Pink:
        {{ pinkScore }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Score",
  data: () => ({
    blueScore: 0,
    pinkScore: 0,
  }),
  methods: {
    blueUp() {
      this.blueScore += 100;
    },
    blueDown() {
      this.blueScore -= 100;
    },
    pinkUp() {
      this.pinkScore += 100;
    },
    pinkDown() {
      this.pinkScore -= 100;
    },
  },
};
</script>
<style lang="css" scoped>
.scores {
  background-color: #060ce9;
  color: #ffcc00;
}
</style>