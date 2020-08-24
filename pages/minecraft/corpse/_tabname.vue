<template>
  <Mod
    title="Corpse"
    description="Never lose your items again!"
    :logo="require('~/assets/minecraft/corpse/logo_corpse.png')"
    id="corpse"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/corpse/files/all"
    sourcelink="https://github.com/henkelmax/corpse"
    issueslink="https://github.com/henkelmax/corpse/issues"
    :images="images"
    :credits="credits"
    :faq="faq"
  >
    <v-container slot="overview">
      <p>
        This mod brings a corpse into the game.
        It will spawn upon your death containing all items that you had in your inventory.
      </p>
      <h1>Features</h1>
      <p>
        The corpse will appear at the players location upon death.
        Your player skin will be applied to the corpse.
        It contains all the items you had when you died.
        It can hold an infinite amount of items.
      </p>
      <p>You can access the items by right-clicking the corpse.</p>
      <p>
        When you take out all items, the corpse will disappear.
        The corpse can’t fall into the void or burn in lava.
        It also floats in liquids like lava or water.
      </p>
      <br />
      <v-img :src="require('~/assets/minecraft/corpse/image_corpse_1.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/corpse/image_corpse_2.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/corpse/image_corpse_3.png')"></v-img>
      <br />
      <p>
        After 1 hour, the corpse will turn into a skeleton, indicating that it existed for a longer time.
        This won’t change the functionality of the corpse.
      </p>
      <br />
      <v-img :src="require('~/assets/minecraft/corpse/image_corpse_4.png')"></v-img>
      <br />
      <h2>Death History</h2>
      <p>
        You can view all your past deaths by pressing the ‘U’ key.
        You can retrieve lost items if you are in creative mode.
      </p>
      <br />
      <v-img :src="require('~/assets/minecraft/corpse/image_corpse_5.png')"></v-img>
      <br />
      <h2>Viewing the Death Hisory of other Players</h2>
      <p>
        By typing
        <code>/deathhistory &lt;player&gt;</code> as an operator, you can view the death history of another player.
      </p>
      <br />
      <v-img :src="require('~/assets/minecraft/corpse/image_corpse_6.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/corpse/image_corpse_7.png')"></v-img>
      <br />
      <h2>Recovering Lost Items</h2>
      <p>
        You can retrieve lost items by pressing the “Items” button in the death history GUI.
        Note that you can only take out items if you are in creative mode.
      </p>
      <h2>Teleporting to the Death Location</h2>
      <p>
        By clicking on the “Location” area in the death history GUI, the command to teleport you to the death location will be displayed in chat.
        It includes the coordinates and the dimension.
      </p>
      <br />
      <v-img :src="require('~/assets/minecraft/corpse/image_corpse_8.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/corpse/image_corpse_9.png')"></v-img>
      <br />
      <h2>Optional Features (Config Options)</h2>
      <ul>
        <li>If only the owner of the corpse can access the inventory</li>
        <li>If everybody can access the corpse in the skeleton stage</li>
        <li>The time passed after a corpse despawns if it is empty</li>
        <li>The time passed after a corpse despawns even if it is full</li>
        <li>The time passed after a corpse turns into a skeleton</li>
        <li>If the corpse should spawn on its face</li>
      </ul>
    </v-container>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";

export default {
  data() {
    return {
      images: [
        require("~/assets/minecraft/corpse/image_corpse_1.png"),
        require("~/assets/minecraft/corpse/image_corpse_2.png"),
        require("~/assets/minecraft/corpse/image_corpse_3.png"),
        require("~/assets/minecraft/corpse/image_corpse_4.png"),
        require("~/assets/minecraft/corpse/image_corpse_5.png"),
        require("~/assets/minecraft/corpse/image_corpse_6.png"),
        require("~/assets/minecraft/corpse/image_corpse_7.png"),
        require("~/assets/minecraft/corpse/image_corpse_8.png"),
        require("~/assets/minecraft/corpse/image_corpse_9.png"),
      ],
      credits: [
        {
          element: { name: "Russian translation" },
          name: {
            name: "ghost_screa_m",
            link: "https://curseforge.com/members/ghost_screa_m",
          },
        },
        {
          element: { name: "Portuguese translation" },
          name: {
            name: "srbedrock",
            link: "https://curseforge.com/members/srbedrock",
          },
        },
        {
          element: { name: "Polish translation" },
          name: {
            name: "DarkKnightComes",
            link: "https://www.curseforge.com/members/darkknightcomes",
          },
        },
        {
          element: { name: "Chinese translation" },
          name: {
            name: "edmory",
            link: "https://www.curseforge.com/members/edmory",
          },
        },
      ],
      faq: [
        {
          question: "I can't find the corpse after I died.",
          answer:
            "The corpse is able to float in water and can get washed away.",
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
