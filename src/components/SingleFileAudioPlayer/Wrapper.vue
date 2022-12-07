<template>
  <single-file-audio-player :song="song"/>
</template>

<script>
import axios from "axios";
import SingleFileAudioPlayer from "@/components/SingleFileAudioPlayer/SingleFileAudioPlayer.vue";

export default {
  name: "Wrapper",
  components: {SingleFileAudioPlayer},

  props: {
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    transcriptURL: {
      type: String,
      required: false
    },
    imgsrc: {
      type: String,
      required: false
    },
    imgalt: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      transcript: null,
      ready: false
    }
  },
  created() {
    if (this.transcriptURL) {
      axios.get(this.transcriptURL).then(res => {
        this.transcript = res.data;
      });
    } else {
      this.ready = true;
    }
  },
  computed: {
    song() {
      return {
        title: this.title,
        imageurl: this.imgsrc,
        imagecaption: this.imgalt,
        transcript: this.transcript,
        url: this.src
      }
    },
  }
}
</script>

<style scoped>

</style>
