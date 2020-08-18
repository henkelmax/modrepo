<template>
  <v-container grid-list-md class="mt-4">
    <v-layout row wrap>
      <v-flex cols="12">
        <v-card>
          <v-card-title class="red darken-3 white--text" primary-title>
            <span class="headline">404 - Not found!</span>
          </v-card-title>
          <v-card-text class="title mt-4">This page doesn't exist.</v-card-text>
          <v-card-actions>
            <v-btn text class="red darken-3 white--text" @click="push('/')">Zurück</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
