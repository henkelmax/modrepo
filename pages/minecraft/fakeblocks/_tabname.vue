<template>
  <Mod
    title="FakeBlocks"
    description="This mod adds a block that can look like every full block, but has no collision."
    :logo="require('~/assets/minecraft/fakeblocks/logo_fakeblocks.png')"
    id="fakeblocks"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/fakeblocks/files/all"
    issueslink="https://github.com/henkelmax/fake-blocks/issues"
  >
    <v-container slot="overview">
      <p>This mod adds a block that can look like every full block, but has no collision.</p>
      <br />
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/fakeblocks/video_fakeblocks_1.mp4')"
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
      credits: [
        {
          element: { name: "Brazilian Portuguese translation" },
          name: {
            name: "Mikeliro",
            link: "https://github.com/Mikeliro",
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
