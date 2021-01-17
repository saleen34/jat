<template>
  <youtube
    :video-id="id"
    ref="youtube"
    :player-vars="vars"
    :fitParent="true"
    :resize="true"
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
      this.$emit('ended');
    }
  },
};
</script>