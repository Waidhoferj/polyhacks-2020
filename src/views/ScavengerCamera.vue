<template>
  <div class="camera">
    <canvas ref="sensor" class="camera-sensor"></canvas>
    <video ref="videoView" class="camera-view" autoplay playsinline></video>
    <img src="//:0" ref="output" alt="" class="camera-output" />
    <div @click="takePhoto" class="camera-trigger">
      <div class="inner-circle"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase/app";
import { auth, storage } from "@/modules/firebase";

export default {
  data: () => ({
    bounty: {
      type: "photo",
      id: "blah"
    }
  }),
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
          bountyId: this.bounty.id,
          imageSrc: url,
          keywords: ["Face", "bottle"]
        }
      );
      firestore
        .collection("Users")
        .doc(auth.currentUser.uid)
        .update({
          points: firebase.firestore.FieldValue.increment(200),
          collected: firebase.firestore.FieldValue.increment(1)
        });
    }
  },
  mounted() {
    // this.bounty = this.$route.query.bounty;
    this.setupCamera();
  }
};
</script>

<style lang="scss">
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
</style>
