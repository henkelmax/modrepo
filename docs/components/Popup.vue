<template>
  <div class="overlay" v-if="showPopup" @click="close"></div>
  <div class="modal-parent" v-if="showPopup">
    <div class="modal" :class="isDark ? 'modal-dark' : 'modal-light'">
      <p class="title">{{ title }}</p>
      <p><slot></slot></p>
      <div class="buttons">
        <button v-if="acceptButton" class="accept" @click="accept">
          Accept
        </button>
        <button v-if="closeButton" class="close" @click="close">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useData } from "vitepress";

const { isDark } = useData();

const props = defineProps({
  showPopup: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  acceptButton: {
    type: Boolean,
    required: false,
    default: false,
  },
  closeButton: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const emit = defineEmits(["accept", "close"]);

function accept() {
  emit("accept");
}

function close() {
  emit("close");
}
</script>

<style scoped>
.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-parent {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.modal {
  position: absolute;
  width: 600px;
  border-radius: 8px;
  z-index: 9999;
  padding: 20px 30px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: auto;
}
.modal-dark {
  background-color: #333;
}
.modal-light {
  background-color: #fff;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 0px;
}
.buttons {
  width: 100%;
  text-align: right;
}
.accept {
  color: var(--vp-c-brand-1) !important;
  margin-right: 20px;
}
.accept:hover {
  color: var(--vp-c-brand-2) !important;
}
.close:hover {
  color: #97989f !important;
}
button {
  font-weight: bold;
}
@media (max-width: 750px) {
  .modal {
    width: 90%;
  }
}
</style>