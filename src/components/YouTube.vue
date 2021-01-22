<template>
  <youtube
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
  },
  methods: {
    ended() {
      this.$emit("ended");
    },
  },
};
</script>