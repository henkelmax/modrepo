<template>
  <v-row v-if="$vuetify.breakpoint.lgAndUp" justify="center">
    <v-col lg="9" xl="9">
      <v-card outlined>
        <slot name="primary"></slot>
      </v-card>
    </v-col>
    <v-col lg="3" xl="3">
      <v-card outlined>
        <slot name="secondary"></slot>
      </v-card>
    </v-col>
  </v-row>
  <v-row v-else justify="center">
    <v-col cols="12">
      <v-card outlined>
        <slot name="secondary"></slot>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card outlined>
        <slot name="primary"></slot>
      </v-card>
    </v-col>
  </v-row>
</template>
