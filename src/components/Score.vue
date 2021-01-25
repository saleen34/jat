<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-icon @click="blueUp" color="green"> mdi-arrow-up </v-icon>
        <v-icon @click="blueDown" color="red"> mdi-arrow-down </v-icon>
      </v-col>
      <v-col>
        Blue:
        {{ blueScore }}
      </v-col>
      <v-col>
        <v-icon @click="pinkUp" color="green"> mdi-arrow-up </v-icon>
        <v-icon @click="pinkDown" color="red"> mdi-arrow-down </v-icon>
      </v-col>
      <v-col>
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
