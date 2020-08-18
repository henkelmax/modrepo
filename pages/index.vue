<template>
  <div>
    <v-row justify="center" class="ma-2">
      <v-col lg="8" xl="8" cols="12">
        <v-card outlined>
          <v-card-title class="red darken-3 white--text" primary-title>
            <v-icon class="mr-4" large dark>mdi-alert</v-icon>
            <span class="headline">{{$t('under_construction')}}</span>
          </v-card-title>
          <v-card-text class="title mt-4">{{$t('under_construction_message')}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <h1 class="display-2">{{ $t("minecraft_mods") }}</h1>
    <MinecraftMods />
    <h1 class="display-2">{{ $t("activity") }}</h1>
    <Activity />
  </div>
</template>

<script>
import MinecraftMods from "~/pages/minecraft/index.vue";
import Activity from "~/pages/minecraft/activity.vue";

export default {
  layout: "default",
  components: {
    MinecraftMods,
    Activity,
  },
};
</script>

<i18n>
{
  "en": {
    "under_construction": "This page is under construction!",
    "under_construction_message": "Some parts may be unfinished.",
    "minecraft_mods": "Minecraft Mods",
    "onset_packages": "Onset Packages",
    "activity": "Activity"
  },
  "de": {
    "under_construction": "Diese Seite befindet sich im Aufbau!",
    "under_construction_message": "Einige dinge sind eventuell unvollständig.",
    "minecraft_mods": "Minecraft Mods",
    "onset_packages": "Onset Packages",
    "activity": "Aktivitäten"
  }
}
</i18n>

<style scoped>
h1 {
  margin-left: 20px;
}
</style>