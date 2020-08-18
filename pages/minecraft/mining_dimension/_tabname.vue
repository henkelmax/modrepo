<template>
  <Mod
    title="Advanced Mining Dimension"
    description="A dimension consisting just of caves."
    :logo="require('~/assets/minecraft/mining_dimension/logo_mining_dimension.png')"
    id="mining_dimension"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/advanced-mining-dimension/files/all"
    issueslink="https://github.com/henkelmax/advanced-mining-dimension/issues"
    :credits="credits"
  >
    <v-container slot="overview">
      <p>This mod adds a highly configurable dimension that only consists of caves.</p>
      <p>Creating the teleporter only requires very basic resources to make it accessible very early in game.</p>
      <h2>Teleporter</h2>
      <p>The teleporter is your door to the mining dimension.</p>
      <p>Just place it down and right-click it.</p>
      <br />
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/mining_dimension/video_mining_dimension_1.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/mining_dimension/video_mining_dimension_2.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/mining_dimension/video_mining_dimension_3.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <h2>Configurable Options</h2>
      <p>
        <code>Cave Percentage</code>
        The Amount of caves generated
      </p>
      <p>
        <code>Canyon Percentage</code>
        The Amount of canyons generated
      </p>
      <p>
        <code>Lava Lakes</code>
        If lava lakes should be generated
      </p>
      <p>
        <code>Spawners</code>
        If dungeons with spawners should be generated
      </p>
      <p>
        <code>Stone Variants</code>
        If the different stone variants should be generated
      </p>
      <p>
        <code>Ores</code>
        If ores should be generated
      </p>
      <p>
        <code>Lava</code>
        If lava should be generated in caves below level 11
      </p>
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
          element: { name: "Chinese Simplified (China) translation" },
          name: {
            name: "aikinitt",
            link: "https://www.curseforge.com/members/aikinitt",
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
