<template>
  <Mod
    title="Easy Piglins"
    description="Never get annoyed by bartering again!"
    :logo="require('~/assets/minecraft/easy_piglins/logo_easy_piglins.png')"
    id="easy_piglins"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/easy-piglins/files/all"
    sourcelink="https://github.com/henkelmax/easy-piglins"
    issueslink="https://github.com/henkelmax/easy-piglins/issues"
    :credits="credits"
  >
    <v-container slot="overview">
      <p>
        This mod lets you pick up adult piglins as an item. There is also a
        block that automates bartering.
      </p>
      <br />
      <h2>The Piglin Item</h2>
      <p>
        The piglin item can be obtained by sneaking and right-clicking an adult
        piglin. Note that you can only pick up piglins if they are not busy or
        aggressive.
      </p>
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/easy_piglins/video_easy_piglins_1.mp4')
          "
          type="video/mp4"
        />
      </video>
      <p>The piglin item can be placed by right-clicking on the ground.</p>
      <h2>The Barterer Block</h2>
      <p>
        The barterer block allows to automatically barter with piglins without
        having to deal with capturing it. This block can also be used in other
        dimensions without the piglins converting to zobified piglins.
      </p>
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/easy_piglins/video_easy_piglins_2.mp4')
          "
          type="video/mp4"
        />
      </video>
      <p>
        Simply put the bartering item into the input slot or pipe it in with a
        hopper.
      </p>
      <p>
        The bartered items will appear in one of the output slots. They can also
        be sucked out by hoppers.
      </p>
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/easy_piglins/video_easy_piglins_3.mp4')
          "
          type="video/mp4"
        />
      </video>
      <p>It takes exactly 120 ticks (6 seconds) for one barter.</p>
      <p>
        You can take piglins out of the barterer, by sneaking and right-clicking
        the block with an empty hand.
      </p>
      <p>The barterer keeps its stuff inside if it is broken.</p>
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
        {
          element: { name: "Korean translation" },
          name: {
            name: "hayanggom",
            link: "https://github.com/hayanggom",
          },
        },
        {
          element: { name: "Chinese (Simplified) translation" },
          name: {
            name: "Yanang Pearce",
            link: "https://github.com/yanang007",
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
