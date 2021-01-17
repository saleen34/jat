<template>
  <v-app>
    <v-app-bar app color="blue" dark v-if="introFinished">
      <v-btn @click="displayCategories">
        <span class="mr-2">Show Categories</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <YouTube
      v-show="!introFinished"
      :id="yt.intro.id"
      :vars="yt.intro.vars"
      @ended="introEnded"
    >
    </YouTube>
    <audio
      ref="categoryAudio"
      src="@/assets/audio/categories.mp3"
      preload
      muted
    ></audio>

    <v-main v-if="introFinished">
      <Score />
      <Grid :toggleCats="categoriesAreVisible" />
    </v-main>
  </v-app>
</template>

<script>
import Score from "./components/Score";
import Grid from "./components/Grid";
import YouTube from "./components/YouTube";

export default {
  name: "App",

  components: {
    Score,
    Grid,
    YouTube,
  },
  methods: {
    introEnded() {
      console.log("intro ended");
      let frames = document.getElementsByTagName("iframe");
      for (let i = 0; i < frames.length; ++i) {
        frames[i].remove();
      }
      this.introFinished = true;
    },
    displayCategories() {
      this.categoriesAreVisible = true;
      this.$refs.categoryAudio.play();
    },
  },
  data: () => ({
    categoriesAreVisible: false,
    introFinished: false,
    yt: {
      intro: {
        id: "njPzMyRGq9c",
        vars: {
          autoplay: 1,
          controls: 1,
        },
      },
    },
  }),
};
</script>
<style lang="css" scoped>
iframe {
  width: 100%;
  max-width: 650px; /* Also helpful. Optional. */
}
</style>
