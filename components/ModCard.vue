<template>
  <v-card outlined height="100%">
    <nuxt-link :to="overviewPath" style="text-decoration: none !important">
      <v-img :src="logo" class="pointer"></v-img>
    </nuxt-link>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle>{{ description }}</v-card-subtitle>
    <v-card-actions>
      <nuxt-link :to="overviewPath" style="text-decoration: none !important">
        <v-btn color="primary" text>More</v-btn>
      </nuxt-link>
      <v-spacer></v-spacer>
      <nuxt-link :to="wikiPath" style="text-decoration: none !important">
        <v-btn v-if="wikiPath" icon>
          <v-icon>mdi-information-variant</v-icon>
        </v-btn>
      </nuxt-link>
      <nuxt-link :to="imagesPath" style="text-decoration: none !important">
        <v-btn v-if="imagesPath" icon>
          <v-icon>mdi-image-size-select-actual</v-icon>
        </v-btn>
      </nuxt-link>
      <v-btn v-if="downloadLink" icon :href="downloadLink" target="_blank">
        <v-icon>mdi-download</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: [
    "name",
    "description",
    "logo",
    "overviewPath",
    "wikiPath",
    "imagesPath",
    "downloadLink",
  ],
};
</script>
