<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="timer">
        <vue-countdown-timer
          @start_callback="timerStarted"
          @end_callback="timerEnded"
          :start-time="myStartTime"
          :end-time="myStartTime + 5000"
          :interval="1000"
          start-label=""
          end-label=""
          label-position=""
          end-text=""
          day-txt=""
          hour-txt=""
          minutes-txt=""
          seconds-txt=""
        >
        </vue-countdown-timer>
      </v-col>
    </v-row>
    <audio ref="timerRef" src="@/assets/audio/timeup.mp3" preload muted></audio>
  </v-container>
</template>
<script>
export default {
  name: "Timer",
  props: {
    startTime: { Type: Date },
  },
  data: () => ({
    myStartTime: null,
  }),
  watch: {
    startTime() {
      this.myStartTime = Date.now();
    },
  },
  methods: {
    timerStarted() {},
    timerEnded() {
      if (this.$refs && this.$refs.timerRef) {
        this.$refs.timerRef.play();
      }
      this.$emit("timerDone");
    },
  },
};
</script>
<style lang="css" scoped>
.timer {
  background-color: #060ce9;
  color: #ffcc00;
}
</style>