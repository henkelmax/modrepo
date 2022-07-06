<template>
  <div>
    <!-- <v-row justify="center" class="ma-2">
      <v-col lg="8" xl="8" cols="12">
        <v-card outlined>
          <v-card-title class="red darken-3 white--text" primary-title>
            <v-icon class="mr-4" large dark>mdi-alert</v-icon>
            <span class="headline">This page is under construction!</span>
          </v-card-title>
          <v-card-text class="title mt-4">Some parts may be unfinished.</v-card-text>
        </v-card>
      </v-col>
    </v-row> -->
    <h1 class="display-2">Minecraft Mods</h1>
    <Overview />
    <h1 class="display-2">Activity</h1>
    <Activity />
  </div>
</template>

<script>
import Overview from "~/components/Overview.vue";
import Activity from "~/components/Activity.vue";

export default {
  components: {
    Overview,
    Activity,
  },
};
</script>

<style scoped>
h1 {
  margin-left: 20px;
}
</style>
