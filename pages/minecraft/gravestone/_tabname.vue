<template>
  <Mod
    title="GraveStone Mod"
    description="Places a gravestone with your inventory items inside when you die."
    :logo="require('~/assets/minecraft/gravestone/logo_gravestone.png')"
    id="gravestone"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/gravestone-mod/files/all"
    sourcelink="https://github.com/henkelmax/gravestone"
    issueslink="https://github.com/henkelmax/gravestone/issues"
    :images="images"
    :credits="credits"
    :faq="faq"
  >
    <v-container slot="overview">
      <p>This mod adds a gravestone to your Minecraft world.</p>
      <p>When you die a gravestone will be placed at your death position and the players name is written on it.</p>
      <p>Optionally you can get a piece of paper with the necessary informations about your death.</p>
      <p>There is also an option to automatically remove this item when you break the gravestone.</p>
      <p>When you break the gravestone it will drop the items of your inventory.</p>
      <p>If you enable the gamerule keepInventory there will be placed no gravestone.</p>
      <p>You can also break the gravestone with silktouch to get it as an item to use it for decoration.</p>
      <p>When you rightclick the gravestone the name of the player who died and the death time will be displayed.</p>
      <p>The gravestone can be named by simply renaming it in an anvil and then placing it.</p>
      <br />
      <v-img :src="require('~/assets/minecraft/gravestone/image_gravestone_1.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/gravestone/image_gravestone_2.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/gravestone/image_gravestone_3.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/gravestone/image_gravestone_4.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/gravestone/image_gravestone_5.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/gravestone/image_gravestone_6.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/gravestone/image_gravestone_7.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/gravestone/image_gravestone_8.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/gravestone/image_gravestone_9.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/gravestone/image_gravestone_10.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/gravestone/image_gravestone_11.png')"></v-img>
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
        require("~/assets/minecraft/gravestone/image_gravestone_1.png"),
        require("~/assets/minecraft/gravestone/image_gravestone_2.png"),
        require("~/assets/minecraft/gravestone/image_gravestone_3.png"),
        require("~/assets/minecraft/gravestone/image_gravestone_4.png"),
        require("~/assets/minecraft/gravestone/image_gravestone_5.png"),
        require("~/assets/minecraft/gravestone/image_gravestone_6.png"),
        require("~/assets/minecraft/gravestone/image_gravestone_7.png"),
        require("~/assets/minecraft/gravestone/image_gravestone_8.png"),
        require("~/assets/minecraft/gravestone/image_gravestone_9.png"),
        require("~/assets/minecraft/gravestone/image_gravestone_10.png"),
        require("~/assets/minecraft/gravestone/image_gravestone_11.png"),
      ],
      credits: [
        {
          element: { name: "Chinese Traditional (Taiwan) translation" },
          name: {
            name: "地瓜豬豬 (yampig_413)",
            link: "https://minecraft.curseforge.com/members/yampig_413",
          },
        },
        {
          element: { name: "Polish translation" },
          name: {
            name: "Grreg21",
            link: "https://www.curseforge.com/members/grreg21",
          },
        },
        {
          element: { name: "Spanish translation" },
          name: {
            name: "renkor92",
            link: "https://www.curseforge.com/members/renkor92",
          },
        },
      ],
      faq: [
        {
          question: "I can't find the gravestone after I died.",
          answer:
            "If you died in a wall, there is a high chance that the gravestone is placed at the next free spot above your death location.",
        },
        {
          question: "How can I get rid of the beacon on my death location?",
          answer:
            "There is no beacon in this mod. This is most likely from a minimap mod.",
        },
      ],
    };
  },
  components: {
    Mod,
  },
};
</script>
