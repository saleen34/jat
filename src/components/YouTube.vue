<template>
  <youtube
    ref="ytRef"
    :video-id="id"
    player-width="100%"
    player-height="1024"
    :player-vars="vars"
    @ended="ended"
  ></youtube>
</template>
<script>
export default {
  name: "YouTube",
  props: {
    id: String,
    vars: Object,
    restart: Boolean,
  },
  methods: {
    ended() {
      this.$emit("ended");
    },
  },
  watch: {
    restart() {
      this.$refs.ytRef.startVideo();
    },
  },
};
</script>