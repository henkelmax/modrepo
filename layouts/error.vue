<template>
  <v-container grid-list-md class="mt-4">
    <v-layout row wrap>
      <v-flex cols="12">
        <v-card>
          <v-card-title class="red darken-3 white--text" primary-title>
            <span class="headline">{{$t('not_found')}}</span>
          </v-card-title>
          <v-card-text class="title mt-4">{{$t('page_doesnt_exist')}}</v-card-text>
          <v-card-actions>
            <v-btn
              text
              class="red darken-3 white--text"
              @click="$eventBus.$emit('push', '/')"
            >{{$t('back')}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<i18n>
{
  "en": {
    "not_found": "404 - Not found!",
    "page_doesnt_exist": "This page doesn't exist.",
    "back": "Back"
  },
  "de": {
    "not_found": "404 - Nichts gefunden!",
    "page_doesnt_exist": "Diese Seite existiert nicht.",
    "back": "Zurück"
  }
}
</i18n>
