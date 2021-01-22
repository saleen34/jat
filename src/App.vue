<template>
  <v-app>
    <v-app-bar app color="blue" dark v-if="introFinished">
      <v-btn @click="displayCategories">
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-spacer />
      <v-toolbar-title class="white--text">JP</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <!-- <YouTube
      v-show="!introFinished"
      :id="yt.intro.id"
      :vars="yt.intro.vars"
      @ended="introEnded"
    >
    </YouTube> -->

    <audio
      ref="categoryAudio"
      src="@/assets/audio/categories.mp3"
      preload
      muted
    ></audio>

    <v-main v-if="introFinished">
      <Score />
      <Jeopardy :toggleCats="categoriesAreVisible" />
    </v-main>
  </v-app>
</template>

<script>
import Score from "./components/Score";
import Jeopardy from "./components/Jeopardy";
// import YouTube from "./components/YouTube";

export default {
  name: "App",

  components: {
    Score,
    Jeopardy,
    // YouTube,
  },
  methods: {
    introEnded() {
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
    introFinished: true,
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
<style lang="css">
iframe {
  width: 100%;
  max-width: 650px; /* Also helpful. Optional. */
}
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
</style>