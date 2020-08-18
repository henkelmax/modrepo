<template>
  <v-card outlined class="pa-2 mt-3">
    <template v-for="(image, i) in images">
      <br :key="i" />
      <v-img :key="'image' + i" :src="image"></v-img>
    </template>
  </v-card>
</template>

<script>
export default {
  props: ["images"],
};
</script>
