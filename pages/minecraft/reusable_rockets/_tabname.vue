<template>
  <Mod
    title="Reusable Rockets"
    description="Reusable Rockets."
    :logo="
      require('~/assets/minecraft/reusable_rockets/logo_reusable_rockets.png')
    "
    id="reusable_rockets"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/reusable-rockets/files/all"
    sourcelink="https://github.com/henkelmax/reusable-rockets"
    issueslink="https://github.com/henkelmax/reusable-rockets/issues"
  >
    <v-container slot="overview">
      <p>This mod adds three tiers of reusable rockets.</p>
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/reusable_rockets/video_reusable_rockets_1.mp4')
          "
          type="video/mp4"
        />
      </video>
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/reusable_rockets/video_reusable_rockets_2.mp4')
          "
          type="video/mp4"
        />
      </video>

      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/reusable_rockets/video_reusable_rockets_3.mp4')
          "
          type="video/mp4"
        />
      </video>
      <h2>Features</h2>
      <ul>
        <li>
          <span style="font-size: 14px">Three different tiers of rockets</span>
        </li>
        <li><span style="font-size: 14px">Dynamic flight duration</span></li>
        <li>
          <span style="font-size: 14px">Only requires gunpowder to refuel</span>
        </li>
        <li>
          <span style="font-size: 14px"
            >Can only be used for elytra boosting</span
          >
        </li>
      </ul>
      <br />
      <h2>Reusable Rocket Tier 1</h2>
      <ul>
        <li><span style="font-size: 14px">Can store up to 32 uses</span></li>
        <li>
          <span style="font-size: 14px">Maximum flight duration of 2</span>
        </li>
      </ul>
      <br />
      <h2>Reusable Rocket Tier 2</h2>
      <ul>
        <li><span style="font-size: 14px">Can store up to 64 uses</span></li>
        <li>
          <span style="font-size: 14px">Maximum flight duration of 4</span>
        </li>
      </ul>
      <br />
      <h2>Reusable Rocket Tier 3</h2>
      <ul>
        <li><span style="font-size: 14px">Can store up to 128 uses</span></li>
        <li>
          <span style="font-size: 14px">Maximum flight duration of 6</span>
        </li>
      </ul>
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
