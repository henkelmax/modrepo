<template>
  <Mod
    title="Easy Villagers"
    description="Never get annoyed by villagers again!"
    :logo="require('~/assets/minecraft/easy_villagers/logo_easy_villagers.png')"
    id="easy_villagers"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/easy-villagers/files/all"
    sourcelink="https://github.com/henkelmax/easy-villagers"
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
      <p>The villager item can be obtained by sneaking and right-clicking a villager or pressing the <b>V</b> key.</p>
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
        The trader block allows trading with the villager without having to deal with securing the villager.
        This block also allows the villager to restock in non-working hours.
        The restocking time of the villager is not dependent on any external sources like day/night time or dimension.
        You can customize the trading interval in the config.
      </p>
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/easy_villagers/video_easy_villagers_3.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <br />

      <h2>The Auto Trader Block</h2>
      <p>
        The auto trader works exactly line the trader block, except it automatically trades items for you.
        You can also automatically put items in and take items out with a hopper.
        The cooldown between trades is fully configurable.
      </p>
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/easy_villagers/video_easy_villagers_8.mp4')"
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

      <h2>The Incubator Block</h2>
      <p>
        The incubator block increases the growth rate of baby villagers.
        The speed can be changed in the config.
      </p>
      <br />

      <h2>Trade Cycling</h2>
      <p>
        When looking for a good trade, you always have to remove the villagers workstation, in order to reset their trades.
        The trade cycle button solves this problem. If a villager hasn't been traded before, you can just press it and the trades reset automatically.
        Alternatively you can use the <b>C</b> key to cycle trades.
        <br/>
        This also works for normal villagers.
      </p>
      <video style="width: 100%;" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/easy_villagers/video_easy_villagers_9.mp4')"
          type="video/mp4"
        />
      </video>

      <br />
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
            link: "https://github.com/Mikeliro",
          },
        },
        {
          element: { name: "Indonesian translation" },
          name: {
            name: "ReyhanAhmad",
            link: "https://github.com/ReyhanAhmad",
          },
        },
        {
          element: { name: "Russian translation" },
          name: {
            name: "kazmurenko",
            link: "https://www.curseforge.com/members/kazmurenko",
          },
        },
        {
          element: { name: "Russian translation" },
          name: {
            name: "cyber01",
            link: "https://github.com/cyber01",
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
