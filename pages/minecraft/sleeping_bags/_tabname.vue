<template>
  <Mod
    title="Sleeping Bags"
    description="A sleeping bag that does not set your spawnpoint."
    :logo="require('~/assets/minecraft/sleeping_bags/logo_sleeping_bags.png')"
    id="sleeping_bags"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/sleeping-bags/files/all"
    sourcelink="https://github.com/henkelmax/sleeping-bags"
    issueslink="https://github.com/henkelmax/sleeping-bags/issues"
    :images="images"
    :credits="credits"
  >
    <v-container slot="overview">
      <p>A sleeping bag that does not set your spawnpoint.</p>
      <br />
      <v-img :src="require('~/assets/minecraft/sleeping_bags/image_sleeping_bags_1.png')"></v-img>
      <br />
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/sleeping_bags/video_sleeping_bags_1.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <p>This mod also has a config option to enable single player sleep, so that a single player can skip the night when on a server with multiple people.</p>
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
        require("~/assets/minecraft/sleeping_bags/image_sleeping_bags_1.png"),
      ],
      credits: [
        {
          element: { name: "Chinese Simplified (China) translation" },
          name: {
            name: "Imbarainbow",
            link: "https://github.com/Imbarainbow",
          },
        },
        {
          element: { name: "Russian translation" },
          name: {
            name: "cyber01",
            link: "https://github.com/cyber01",
          },
        },
        {
          element: { name: "Polish translation" },
          name: {
            name: "avehh",
            link: "https://github.com/avehh",
          },
        },
      ],
    };
  },
  components: {
    Mod,
  },
};
</script>
