<template>
  <v-app>
    <v-app-bar app color="blue" dark>
      <v-btn @click="startIntro">
        <span class="mr-2">Intro</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn @click="showCategories = !showCategories">
        <span class="mr-2">Show Categories</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main v-if="introOver">
      <Score />
      <Grid :toggleCats="showCategories" />
    </v-main>
  </v-app>
</template>

<script>
import Score from "./components/Score";
import Grid from "./components/Grid";

export default {
  name: "App",

  components: {
    Score,
    Grid,
  },
  methods: {
    startIntro() {
      this.introOver = true;
    },
  },
  data: () => ({
    showCategories: false,
    introOver: false,
    links: {
      intro: "https://youtu.be/_WbMdH51AqU",
    },
  }),
};
</script>
