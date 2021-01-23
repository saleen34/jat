<template>
  <v-app>
    <v-app-bar app color="blue" dark src="@/assets/header.jpeg">
      <v-avatar @click="displayCategories">
        <img src="@/assets/tf.webp" />
      </v-avatar>
      <v-spacer />
      <v-toolbar-title class="white--text">JP</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <YouTube
      v-show="introRunning"
      :id="yt.intro.id"
      :vars="yt.intro.vars"
      @ended="introEnded"
    ></YouTube>

    <audio
      ref="categoryAudio"
      src="@/assets/audio/categories.mp3"
      preload
      muted
    ></audio>

    <v-main v-show="!introRunning">
      <Score />
      <Jeopardy :toggleCats="categoriesAreVisible" />
    </v-main>
  </v-app>
</template>

<script>
import Score from "./components/Score";
import Jeopardy from "./components/Jeopardy";
import YouTube from "./components/YouTube";

export default {
  name: "App",

  components: {
    Score,
    Jeopardy,
    YouTube,
  },
  methods: {
    introEnded() {
      this.introRunning = false;
    },
    displayCategories() {
      this.categoriesAreVisible = true;
      this.$refs.categoryAudio.play();
    },
  },
  data: () => ({
    categoriesAreVisible: false,
    introRunning: false,
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
  mounted: function () {
    this.introRunning = true;
  },
};
</script>
<style lang="css">
.theme--light.v-application {
  font-family: Jeopardy !important;
  font-size: 30px;
  background-color: #060ce9 !important;
  font-weight: bolder;
}
@font-face {
  font-family: "Jeopardy";
  src: url("/assets/gyparody.fft") format("ttf");
}
.v-avatar {
  cursor: pointer;
}
</style>