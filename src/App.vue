<template>
  <v-app>
    <v-app-bar app color="#060ce9">
      <v-avatar @click="displayCategories">
        <img src="@/assets/tf.webp" />
      </v-avatar>
      <Score name="Boys" :scoreUp="leftScoreUp" :scoreDown="leftScoreDown" />
      <v-avatar @click="startDoubleJeopardy">
        <img src="@/assets/dd.png" />
      </v-avatar>

      <Score name="Girls" :scoreUp="rightScoreUp" :scoreDown="rightScoreDown" />

      <v-avatar @click="playCommerical('bra')">
        <img src="@/assets/bra.jpg" />
      </v-avatar>
      <v-avatar @click="playCommerical('smoking')">
        <img src="@/assets/sig.jpeg" />
      </v-avatar>
      <v-avatar @click="playCommerical('mcdonalds')">
        <img src="@/assets/mc.png" />
      </v-avatar>
      <v-avatar @click="playCommerical('pepsi')">
        <img src="@/assets/pepsi.jpeg" />
      </v-avatar>
      <v-avatar @click="playCommerical('crunch')">
        <img src="@/assets/crunch.jpeg" />
      </v-avatar>
      <v-avatar @click="playCommerical('beer')">
        <img src="@/assets/bl.png" />
      </v-avatar>
      <v-avatar @click="playCommerical('long')">
      <v-icon dark> mdi-cloud-upload </v-icon>
      </v-avatar>
    </v-app-bar>

    <YouTube
      v-show="ytRunning"
      :id="currentYoutubeId"
      :vars="yt.vars"
      :restart="yt.restart"
      @ended="ytEnded"
    ></YouTube>

    <audio
      ref="categoryAudio"
      src="@/assets/audio/categories.mp3"
      preload
      muted
    ></audio>

    <v-main v-show="!ytRunning">
      <Timer v-if="timer" :startTime="timerStartTime" />
      <Jeopardy v-if="jeopardy" :toggleCats="categoriesAreVisible" />
      <DoubleJeopardy
        v-if="doubleJeopardy"
        :toggleCats="dJCategoriesAreVisible"
      />
      <FinalJeopardy v-if="finalJeopardy" />
    </v-main>
  </v-app>
</template>

<script>
import Score from "./components/Score";
import Timer from "./components/Timer";
import Jeopardy from "./components/Jeopardy";
import DoubleJeopardy from "./components/DoubleJeopardy";
import FinalJeopardy from "./components/FinalJeopardy";
import YouTube from "./components/YouTube";

export default {
  name: "App",

  components: {
    Score,
    Jeopardy,
    DoubleJeopardy,
    FinalJeopardy,
    Timer,
    YouTube,
  },
  methods: {
    ytEnded() {
      this.ytRunning = false;
      this.yt.restart = false;
    },
    startFinalJeopardy() {
      this.jeopardy = false;
      this.doubleJeopardy = false;
      this.finalJeopardy = true;
    },
    displayCategories() {
      if (this.jeopardy) {
        this.categoriesAreVisible = true;
      }
      if (this.doubleJeopardy) {
        this.dJCategoriesAreVisible = true;
      }
      this.$refs.categoryAudio.play();
    },
    startDoubleJeopardy() {
      this.jeopardy = false;
      this.doubleJeopardy = true;
    },
    startTimer() {
      this.timerStartTime = Date.now();
      this.timer = true;
    },
    timerEnded() {
      this.timer = false;
    },
    playCommerical(what) {
      switch(what) {
        case 'bra':
          this.currentYoutubeId = this.yt.commercial_bra;
        break;
        case 'mcdonalds':
          this.currentYoutubeId = this.yt.commercial_mcdonalds;
        break;
        case 'pepsi':
          this.currentYoutubeId = this.yt.commercial_pepsi;
        break;
        case 'crunch':
          this.currentYoutubeId = this.yt.commercial_crunch;
        break;
        case 'smoking':
          this.currentYoutubeId = this.yt.commercial_smoking;
        break;
        case 'beer':
          this.currentYoutubeId = this.yt.commercial_bl;
        break;
        case 'long':
          this.currentYoutubeId = this.yt.commerical_long;
        break;
        default:
        break;
      }

      this.yt.restart = true;
      this.ytRunning = true;
    },
  },
  data: () => ({
    leftScoreUp: false,
    leftScoreDown: false,
    rightScoreUp: false,
    rightScoreDown: false,
    timer: false,
    timerStartTime: null,
    categoriesAreVisible: false,
    dJCategoriesAreVisible: false,
    ytRunning: true,
    jeopardy: true,
    doubleJeopardy: false,
    finalJeopardy: false,
    currentYoutubeId: "njPzMyRGq9c",
    yt: {
      restart: false,
      vars: {
        autoplay: 1,
        controls: 1,
      },
      commercial_intro: "njPzMyRGq9c",
      commercial_bra: "hGnGWjxJZJs",
      commercial_mcdonalds: "9qLfyPlU48k",
      commercial_smoking: "mBTsVLOpfF0",
      commercial_bl: "0K5BgCI-U7c",
      commercial_pepsi: "af_HO9YTi3g",
      commercial_crunch: "fcJAhAqhRww",
      commerical_long: "ApzOqrWRiw4"
    },
  }),
  mounted: function () {
    window.addEventListener(
      "keypress",
      function (e) {
        console.log(e.keyCode);
        if (e.keyCode === 116) {
          this.startTimer();
        }
        //right down
        if (e.keyCode === 91) {
          this.rightScoreDown = !this.rightScoreDown;
        }
        //right up
        if (e.keyCode === 93) {
          this.rightScoreUp = !this.rightScoreUp;
        }
        //left down
        if (e.keyCode === 111) {
          this.leftScoreDown = !this.leftScoreDown;
        }
        //left up
        if (e.keyCode === 112) {
          this.leftScoreUp = !this.leftScoreUp;
        }
      }.bind(this)
    );
    this.ytRunning = false;
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
@media screen and (max-width: 600px) {
  #app ul il:first-of-type {
    visibility: visible;
  }
  #app ul il:last-of-type {
    visibility: hidden;
  }
}

@media screen and (max-width: 992px) {
  #app ul il:first-of-type {
    visibility: hidden;
  }
  #app ul il:last-of-type {
    visibility: visible;
  }
}
</style>