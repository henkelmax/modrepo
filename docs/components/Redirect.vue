<template>
  <meta http-equiv="refresh" :content="`0; url='${path}'`" />
  <h1>Redirecting...</h1>
  <p>
    Please click <a :href="path">here</a> if you are not getting redirected.
  </p>
</template>

<script setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

setTimeout(() => {
  window.open(props.path, "_self");
}, 1000);
</script>