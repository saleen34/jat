<template>
  <v-app>
    <v-app-bar app color="#060ce9">
      <v-avatar @click="displayCategories">
        <img src="@/assets/tf.webp" />
      </v-avatar>
      <Score
        name="Boys"
        :scoreUp="leftScoreUp"
        :scoreDown="leftScoreDown"
      />
      <v-avatar @click="startDoubleJeopardy">
        <img src="@/assets/dd.png" />
      </v-avatar>
      <Score
        name="Girls"
        :scoreUp="rightScoreUp"
        :scoreDown="rightScoreDown"
      />
      <v-avatar @click="startTimer">
        <img src="@/assets/timer.jpg" />
      </v-avatar>
    </v-app-bar>

    <!-- <YouTube
      v-show="introRunning"
      :id="yt.intro.id"
      :vars="yt.intro.vars"
      @ended="introEnded"
    ></YouTube> -->

    <audio
      ref="categoryAudio"
      src="@/assets/audio/categories.mp3"
      preload
      muted
    ></audio>

    <v-main v-show="!introRunning">
      <Timer v-if="timer" :startTime="timerStartTime" />
      <Jeopardy v-if="jeopardy" :toggleCats="categoriesAreVisible" />
      <DoubleJeopardy
        v-if="doubleJeopardy"
        :toggleCats="dJCategoriesAreVisible"
      />
    </v-main>
  </v-app>
</template>

<script>
import Score from "./components/Score";
import Timer from "./components/Timer";
import Jeopardy from "./components/Jeopardy";
import DoubleJeopardy from "./components/DoubleJeopardy";
// import YouTube from "./components/YouTube";

export default {
  name: "App",

  components: {
    Score,
    Jeopardy,
    DoubleJeopardy,
    Timer,
    // YouTube,
  },
  methods: {
    introEnded() {
      this.introRunning = false;
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
    introRunning: false,
    jeopardy: true,
    doubleJeopardy: false,
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
    this.introRunning = false;
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