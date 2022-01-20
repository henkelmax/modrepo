<template>
  <Mod
    title="Trade Cycling"
    description="The trade cycling functionality of Easy Villagers."
    :logo="require('~/assets/minecraft/trade_cycling/logo_trade_cycling.png')"
    id="trade_cycling"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/trade-cycling/files/all"
    sourcelink="https://github.com/henkelmax/trade-cycling"
    issueslink="https://github.com/henkelmax/trade-cycling/issues"
    :faq="faq"
  >
    <v-container slot="overview">
      <p>
        This mod adds the trade cycling functionality of Easy Villagers
      </p>

      <br />
      <video style="width: 100%;" autoplay loop muted>
        <source :src="require('~/assets/minecraft/trade_cycling/video_trade_cycling_1.mp4')" type="video/mp4" />
      </video>
      <br />
    </v-container>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";

export default {
  components: {
    Mod,
  },
};
</script>
