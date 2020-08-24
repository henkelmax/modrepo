<template>
  <Mod
    title="Better Respawn"
    description="This mod adds a mechanic that lets you respawn near your death location."
    :logo="require('~/assets/minecraft/better_respawn/logo_better_respawn.png')"
    id="better_respawn"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/better-respawn/files/all"
    sourcelink="https://github.com/henkelmax/better-respawn"
    issueslink="https://github.com/henkelmax/better-respawn/issues"
    :images="images"
  >
    <v-container slot="overview">
      <p>This mod adds a mechanic that lets you respawn near your death location.</p>
      <p>The minimum and maximum distance from your death location is configurable.</p>
      <p>You will still respawn at your bed if you return from the end or if you die in another dimension.</p>
      <p>
        You will also respawn at your bed if you are within a certain distance of it.
        This distance is also configurable.
      </p>
      <h2>Functionality</h2>
      <br />
      <v-img :src="require('~/assets/minecraft/better_respawn/image_better_respawn_1.png')"></v-img>
      <br />
    </v-container>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";

export default {
  data() {
    return {
      images: [
        require("~/assets/minecraft/better_respawn/image_better_respawn_1.png"),
      ],
    };
  },
  components: {
    Mod,
  },
};
</script>
