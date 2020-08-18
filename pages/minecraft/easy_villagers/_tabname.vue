<template>
  <Mod
    title="Easy Villagers"
    description="Never get annoyed by villagers again!"
    :logo="require('~/assets/minecraft/easy_villagers/logo_easy_villagers.png')"
    id="easy_villagers"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/easy-villagers/files/all"
    issueslink="https://github.com/henkelmax/easy-villagers/issues"
    :credits="credits"
  >
    <v-container slot="overview">
      <p>
        This mod lets you pick up villagers as an item.
        <br />There are also blocks that substitute every farm that includes villagers.
      </p>
      <br />
      <h2>The Villager Item</h2>
      <p>The villager item can be obtained by sneaking and right-clicking a villager.</p>
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/easy_villagers/video_easy_villagers_1.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <br />
      <p>The villager item can be placed by right-clicking on the ground.</p>
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/easy_villagers/video_easy_villagers_2.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <br />

      <h2>The Trader Block</h2>
      <p>
        The trader block allows to trade with the villager without having to deal with securing the villager.
        This block also allows the villager to restock in non working hours.
      </p>
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/easy_villagers/video_easy_villagers_3.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <br />

      <h2>The Farmer Block</h2>
      <p>
        The farmer block contains a whole crop farm in a single block.
        This helps to reduce lag and save space.
      </p>
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/easy_villagers/video_easy_villagers_4.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <br />

      <h2>The Breeder Block</h2>
      <p>
        The breeder block produces baby villagers by putting in food.
        This also helps to reduce lag, save space and also a lot of frustration.
      </p>
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/easy_villagers/video_easy_villagers_5.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <br />

      <h2>The Converter Block</h2>
      <p>
        The converter block converts villagers to zombie villagers and cures them afterwards, enabling the player that placed the block better trades from the cured villager.
        This block needs a golden apple, any type of potion of weakness and the villager to convert.
        This process takes approximately five minutes.
      </p>
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/easy_villagers/video_easy_villagers_6.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <br />

      <h2>The Iron Farm Block</h2>
      <p>
        The iron farm block contains a complete iron farm in a single block.
        It produces one iron golem every four minutes.
        This averages about one iron ingot per minute.
      </p>
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/easy_villagers/video_easy_villagers_7.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <br />
      <p>
        You can take stuff out of these blocks, by sneaking and right-clicking the block with an empty hand.
        <br />Baby villagers are able to grow up inside of blocks, but the functionality of the blocks will not work until they are grown.
        <br />All blocks keep their stuff inside if they are broken.
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
            name: "meawerful",
            link: "https://www.curseforge.com/members/meawerful",
          },
        },
        {
          element: { name: "Brazilian Portuguese translation" },
          name: {
            name: "Mikeliro",
            link: "https://www.curseforge.com/members/mikeliro",
          },
        },
        {
          element: { name: "Indonesian translation" },
          name: {
            name: "ReyhanAhmad",
            link: "https://github.com/ReyhanAhmad",
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
