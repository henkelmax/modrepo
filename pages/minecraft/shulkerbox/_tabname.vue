<template>
  <Mod
    title="Advanced Shulkerboxes"
    description="This mod makes the Shulker Box more portable."
    :logo="require('~/assets/minecraft/shulkerbox/logo_shulkerbox.png')"
    id="shulkerbox"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/advanced-shulkerboxes/files/all"
    sourcelink="https://github.com/henkelmax/advanced-shulkerboxes"
    issueslink="https://github.com/henkelmax/advanced-shulkerboxes/issues"
  >
    <v-container slot="overview">
      <p>This mod lets you open your Shulker Boxes from your inventory.</p>
      <p>Just right-click the Shulker Box in your inventory and it opens up.</p>
      <p>You can place it down by sneaking.</p>
      <br />
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/shulkerbox/video_shulkerbox_1.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
    </v-container>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";

export default {
  data() {
    return {
      //
    };
  },
  components: {
    Mod,
  },
};
</script>
