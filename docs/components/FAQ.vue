<template>
  <span v-for="(element, i) in faq" :key="i">
    <b style="font-size: 24px">{{ element.question }}</b>
    <p style="font-size: 14px" v-html="element.answer"></p>
    <br />
  </span>
</template>

<script setup>
defineProps({
  faq: {
    type: Array,
    required: true,
  },
});
</script>