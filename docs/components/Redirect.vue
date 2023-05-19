<template>
    <meta http-equiv="Refresh" :content="`0; url='${path}'`" />
</template>

<script setup>
defineProps({
  path: {
    type: String,
    required: true,
  },
});
</script>