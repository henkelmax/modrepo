<template>
</template>

<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
onMounted(() => {
  localStorage.visitedTabs = JSON.stringify([...new Set([...JSON.parse(localStorage.visitedTabs || '[]'), props.name])]);
});
</script>