<template>
  <Mod
    title="Reap Mod"
    description="Harvest crops with right clicking."
    :logo="require('~/assets/minecraft/reap/logo_reap.png')"
    id="reap"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/reap-mod/files/all"
    sourcelink="https://github.com/henkelmax/reap"
    issueslink="https://github.com/henkelmax/reap/issues"
    :faq="faq"
  >
    <v-container slot="overview">
      <p>
        This mod adds a function that harvests crops by right-clicking.
        Optionally you can enable tree harvesting in the config.
      </p>

      <p>If you break the bottom log of a tree while not sneaking, the whole tree will be harvested.</p>

      <p>
        It also works with other mods that are adding other crops or trees to Minecraft.
        In the config file you can define which crops can be harvested or not.
        The tools to break trees and the log types are also configurable.
      </p>
      <br />
      <video style="width: 100%;" autoplay loop muted>
        <source :src="require('~/assets/minecraft/reap/video_reap_1.mp4')" type="video/mp4" />
      </video>
      <br />
      <video style="width: 100%;" autoplay loop muted>
        <source :src="require('~/assets/minecraft/reap/video_reap_2.mp4')" type="video/mp4" />
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
      faq: [
        {
          question: "Is this mod client side only?",
          answer:
            "No. This mod has to be installed on the server and the client.",
        },
      ],
    };
  },
  components: {
    Mod,
  },
};
</script>
