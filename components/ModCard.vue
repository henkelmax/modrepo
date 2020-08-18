<template>
  <v-card outlined height="100%">
    <v-img :src="logo" class="pointer" @click="$eventBus.$emit('push', overviewPath)"></v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle>{{ description }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary" text @click="$eventBus.$emit('push', overviewPath)">{{ $t("more") }}</v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="wikiPath" icon @click="$eventBus.$emit('push', wikiPath)">
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>
      <v-btn v-if="imagesPath" icon @click="$eventBus.$emit('push', imagesPath)">
        <v-icon>mdi-image-size-select-actual</v-icon>
      </v-btn>
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
  data() {
    return {
      //
    };
  },
};
</script>

<i18n>
{
  "en": {
    "more": "More"
  },
  "de": {
    "more": "Mehr"
  }
}
</i18n>
