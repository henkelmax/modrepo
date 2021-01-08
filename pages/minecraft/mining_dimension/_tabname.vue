<template>
  <Mod
    title="Advanced Mining Dimension"
    description="A dimension consisting just of caves."
    :logo="require('~/assets/minecraft/mining_dimension/logo_mining_dimension.png')"
    id="mining_dimension"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/advanced-mining-dimension/files/all"
    sourcelink="https://github.com/henkelmax/advanced-mining-dimension"
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
      <br />
      <h2>Configuration (1.16.2 and higher)</h2>
      <p>
        Due to the changes in Minecraft 1.16, you have to create a datapack to modify the dimension itself. Example data packs can be found
        <a
          href="https://github.com/henkelmax/advanced-mining-dimension/tree/master/datapacks"
          target="_blank"
        >here</a>.
      </p>
      <p>
        <b>
          <i>Overworld dimension</i>
        </b>
        &emsp;
        The dimension from where you can teleport to the mining dimension and back
      </p>
      <p>
        <b>
          <i>Show custom world warning</i>
        </b>
        &emsp;
        If the game should show the custom world warning when loading a world
      </p>
      <br />
      <h2>Configuration (1.15.2 and lower)</h2>
      <p>
        <b>
          <i>Cave percentage</i>
        </b>
        &emsp;
        The Amount of caves generated
      </p>
      <p>
        <b>
          <i>Canyon percentage</i>
        </b>
        &emsp;
        The Amount of canyons generated
      </p>
      <p>
        <b>
          <i>Lava lakes</i>
        </b>
        &emsp;
        If lava lakes should be generated
      </p>
      <p>
        <b>
          <i>Spawners</i>
        </b>
        &emsp;
        If dungeons with spawners should be generated
      </p>
      <p>
        <b>
          <i>Stone variants</i>
        </b>
        &emsp;
        If the different stone variants should be generated
      </p>
      <p>
        <b>
          <i>Ores</i>
        </b>
        &emsp;
        If ores should be generated
      </p>
      <p>
        <b>
          <i>Lava</i>
        </b>
        &emsp;
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
        {
          element: { name: "Spanish translation" },
          name: {
            name: "itsTekiO",
            link: "https://www.curseforge.com/members/itstekio",
          },
        },
        {
          element: { name: "Brazilian Portuguese translation" },
          name: {
            name: "Mikeliro",
            link: "https://github.com/Mikeliro",
          },
        },
        {
          element: { name: "Chinese Simplified (China) translation" },
          name: {
            name: "EnterFor",
            link: "https://github.com/EnterFor",
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
