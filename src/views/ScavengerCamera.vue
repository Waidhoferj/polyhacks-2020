<template>
  <div class="camera">
    <h1 class="title display-1">{{ title }}</h1>
    <canvas ref="sensor" class="camera-sensor"></canvas>
    <video
      ref="videoView"
      class="camera-view"
      autoplay
      playsinline
      :class="{ flash: takingPic }"
    ></video>
    <img src="//:0" ref="output" alt="" class="camera-output" />
    <div :disabled="takingPic" @click="takePhoto" class="camera-trigger">
      <div class="inner-circle"></div>
    </div>
    <div class="scanner" :class="{ scan: takingPic }"></div>
    <h2 class="photo-count">{{ photoCount }}</h2>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase/app";
import { auth, storage, firestore } from "@/modules/firebase";
export default {
  data: () => ({
    id: "",
    title: "",
    photoCount: 0,
    takingPic: false
  }),
  props: {},
  methods: {
    async setupCamera() {
      let stream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
      } catch (err) {
        alert("You do not have video access");
        this.$router.go(-1);
      }
      let track = stream.getTracks()[0];
      this.$refs.videoView.srcObject = stream;
    },
    async takePhoto() {
      this.photoCount++;
      this.takingPic = true;
      let { sensor, output, videoView } = this.$refs;
      sensor.width = videoView.videoWidth;
      sensor.height = videoView.videoHeight;
      sensor.getContext("2d").drawImage(videoView, 0, 0);
      sensor.toBlob(this.uploadImage, "image/jpeg", 0.95);
    },
    async uploadImage(blob) {
      let task = await storage.child(`${Date.now()}.png`).put(blob);
      let url = await task.ref.getDownloadURL();
      axios.post(
        "https://us-central1-polyhacks-2020.cloudfunctions.net/labelAndMatchImage",
        {
          uploaderId: auth.currentUser.uid,
          bountyId: this.id,
          imageSrc: url,
          keywords: ["Face", "bottle"]
        }
      );
      firestore
        .collection("Users")
        .doc(auth.currentUser.uid)
        .update({
          points: firebase.firestore.FieldValue.increment(200)
        });
      this.$store.state.userData.points += 200;
      this.takingPic = false;

      firestore
        .collection("Bounties")
        .doc(this.id)
        .update({
          collected: firebase.firestore.FieldValue.increment(1)
        });
    }
  },
  mounted() {
    let { id, title } = this.$route.query;
    this.id = id;
    this.title = title;
    this.setupCamera();
  }
};
</script>

<style lang="scss">
.title {
  position: fixed;
  top: 70px;
  left: 0;
  text-align: center;
  width: 100%;
  color: white;
  font-size: 30px;
  z-index: 5;
}

.photo-count {
  position: fixed;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
}

.camera,
.camera-view,
.camera-sensor,
.camera-output {
  position: fixed;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.camera-trigger {
  padding: 20px;
  background: white;
  position: absolute;
  bottom: 80px;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translateX(-50%);
  border-radius: 50%;
  transition: opacity 0.5s, transform 0.5s;
  cursor: pointer;

  &:active {
    opacity: 0.5;
    transform: translateX(-50%), scale(0.9);
  }

  .inner-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: whitesmoke;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid rgb(218, 218, 218);
  }
}

.scanner {
  position: fixed;
  z-index: 3;
  top: 0;
  left: -30px;
  width: 30px;
  height: 100vh;
  filter: blur(10px);
  background: white;
  pointer-events: none;
  opacity: 0.6;

  &.scan {
    animation: scan 0.7s;
  }
}

@keyframes scan {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  to {
    opacity: 0.6;
    transform: translatex(130vw);
  }
}
</style>
