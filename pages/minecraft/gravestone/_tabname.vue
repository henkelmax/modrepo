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
      <h2>Basic Functionality</h2>
      <p>
        Every time you die, a grave is placed at your position. To retrieve your
        items just break the grave. There is also a config option to get your
        items back by sneaking on the grave (1.16.3+ only).
      </p>

      <br />

      <v-img
        :src="require('~/assets/minecraft/gravestone/image_gravestone_1.png')"
      ></v-img>
      <br />
      <p>
        When you right-click the grave it will show information regarding the
        death of the player.
      </p>
      <v-img
        :src="require('~/assets/minecraft/gravestone/image_gravestone_2.png')"
      ></v-img>
      <br />
      <h2>Sorting (1.16.3+)</h2>
      <p>
        Since version 1.16.3-2.0.0 the grave is now able to store your items
        back into their original slots.
      </p>
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="require('~/assets/minecraft/gravestone/video_gravestone_1.mp4')"
          type="video/mp4"
        />
      </video>
      <br />
      <br />
      <h2>The Obituary</h2>
      <p>
        Everytime you die you get an obituary. If you don't want that you can
        disable it in the config.
      </p>
      <p>It contains:</p>
      <ul>
        <li>The name of the player</li>
        <li>The dimension the player died in</li>
        <li>The date the player died</li>
        <li>The coordinates where the player died</li>
        <li>An image of the player with its equipment at the time of death</li>
        <li>A list of every item the player had when he died</li>
      </ul>
      <br />
      <p>
        If you don't want to keep the obituary after you recovered your items,
        you can enable the automatic removal in the config.
      </p>
      <v-img
        :src="require('~/assets/minecraft/gravestone/image_gravestone_3.png')"
      ></v-img>
      <br />
      <v-img
        :src="require('~/assets/minecraft/gravestone/image_gravestone_4.png')"
      ></v-img>
      <br />
      <h2>Naming the Grave</h2>
      <p>
        If you break the grave with silk touch, you get it dropped as an item.
        You can also craft graves.
      </p>
      <p>
        Naming the grave in an anvil, allows you to have custom text displayed
        on your grave.
      </p>
      <v-img
        :src="require('~/assets/minecraft/gravestone/image_gravestone_5.png')"
      ></v-img>
      <br />
      <v-img
        :src="require('~/assets/minecraft/gravestone/image_gravestone_6.png')"
      ></v-img>
      <br />
      <h2>Customization</h2>
      <p>There are several things you can change in the configs:</p>
      <ul>
        <li>The color of the text on the grave</li>
        <li>If the skull on the grave should be rendered</li>
        <li>Whether you want to get the obituary on death</li>
        <li>The blocks that can get replaced by a grave</li>
        <li>
          If the death note should get removed form the players inventory when
          breaking a grave
        </li>
        <li>If only the owners of the grave should be able to break it</li>
        <li>If a ghost of the player should spawn when breaking the grave</li>
        <li>
          If the ghost should be friendly and defend the player or if it should
          attack the player
        </li>
        <li>If the grave should get broken when sneaking on the grave</li>
        <li>
          If the items should get sorted back into their original slots when
          breaking the grave
        </li>
      </ul>
      <br />
      <h2>Recovering Lost Items (1.16.3+)</h2>
      <p>
        If you somehow lost your items you can recover them with the recover
        command.
      </p>
      <p>
        The syntax is
        <code>
          /restore &lt;player&gt; &lt;death_id&gt; &lt;replace|add&gt;</code
        >.
      </p>
      <p>
        The parameter 'player' is the player whose inventory should get
        restored.
      </p>
      <p>
        The parameter 'death_id' is the ID of the death. You can find it out by
        enabling advanced tooltips (F3 + H) and opening the obituary. The death
        ID also gets written into the logs if a grave couldn't get placed.
      </p>
      <p>
        The last parameter defines if you want to get the players inventory
        replaced (Overwritten) or added (Just adds the items to the players
        existing inventory).
      </p>
      <br />
      <p>
        You can also get a pre made restore command by sneaking and
        right-clicking the obituary as an admin.
      </p>
      <br />
      <h2>Edge Cases</h2>
      <p>
        If you die inside a block, the grave is placed at the next empty space
        above your location. If there is no free block above your position, or
        you are above the build limit, your items drop as usual.
      </p>
      <p>
        If you fall into the void, the grave is placed at the lowest point in
        the world where blocks can be placed. If there is no free space it will
        get placed at the next free spot above.
      </p>
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
            name: "Greg-21",
            link: "https://github.com/Greg-21",
          },
        },
        {
          element: { name: "Spanish translation" },
          name: {
            name: "renkor92",
            link: "https://www.curseforge.com/members/renkor92",
          },
        },
        {
          element: { name: "Swedish translation" },
          name: {
            name: "A. Regnander",
            link: "https://github.com/Regnander",
          },
        },
        {
          element: { name: "Korean translation" },
          name: {
            name: "othuntgithub",
            link: "https://github.com/othuntgithub",
          },
        },
        {
          element: { name: "Chinese Simplified (China) translation" },
          name: {
            name: "EnterFor",
            link: "https://github.com/EnterFor",
          },
        },
        {
          element: { name: "Ukrainian translation" },
          name: {
            name: "Yuraplonka",
            link: "https://github.com/Yuraplonka",
          },
        },
        {
          element: { name: "Japanese translation" },
          name: {
            name: "Kagaribi172",
            link: "https://github.com/Kagaribi172",
          },
        },
        {
          element: { name: "Brazilian Portuguese translation" },
          name: {
            name: "faelBrunnoS",
            link: "https://github.com/faelBrunnoS",
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
