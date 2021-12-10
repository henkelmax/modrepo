<template>
  <Mod
    title="Pipez"
    description="Lag friendly pipes."
    :logo="require('~/assets/minecraft/pipez/logo_pipez.png')"
    id="pipez"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/pipez/files/all"
    sourcelink="https://github.com/henkelmax/pipez"
    issueslink="https://github.com/henkelmax/pipez/issues"
    :credits="credits"
  >
    <v-container slot="overview">
      <p>
        This mod adds simple and highly configurable pipes that are designed to
        create as little lag as possible.
      </p>
      <v-img
        :src="require('~/assets/minecraft/pipez/image_pipez_1.png')"
      ></v-img>
      <br />
      <h2 id="pipe-types">Pipe Types</h2>
      <ul>
        <li>Item Pipes</li>
        <li>Fluid Pipes</li>
        <li>Energy Pipes</li>
        <li>
          Gas Pipes (<a
            href="https://www.curseforge.com/minecraft/mc-mods/mekanism"
            >Mekanism</a
          >)
        </li>
        <li>Universal Pipes (All 4 Pipes in one!)</li>
      </ul>
      <h2>Features</h2>
      <ul>
        <li>
          Highly configurable filter system
          <ul>
            <li>Black-/Whitelisting</li>
            <li>
              Three redstone modes (ignore/on when powered/off when powered)
            </li>
            <li>
              Four distribution modes (round robin/nearest first/furthest
              first/random)
            </li>
            <li>Tag filtering</li>
            <li>Item/Fluid/Gas filtering</li>
            <li>Multiple filters at once</li>
            <li>Configurable destinations for each filter</li>
            <li>Blacklisting/Inverting of individual filters</li>
            <li>Copyable filters</li>
            <li>Custom NBT data</li>
            <li>
              Three NBT matching modes (match exact/match existing/match none)
            </li>
          </ul>
        </li>
        <li>
          Five upgrade tiers
          <ul>
            <li>Basic</li>
            <li>Improved</li>
            <li>Advanced</li>
            <li>Ultimate</li>
            <li>Infinity (Not craftable by default)</li>
          </ul>
        </li>
        <li>Fully customizable transfer speeds</li>
        <li>Disconnectable with wrenches</li>
        <li>
          Extremely lag friendly
          <ul>
            <li><strong>Only extracting pipes have block entities</strong></li>
            <li>Pipes don't load unnecessary chunks</li>
            <li>Server friendly</li>
            <li>Efficient rendering</li>
          </ul>
        </li>
      </ul>
      <h2>Configuring Pipes</h2>
      <p>
        <strong
          >Pipes don't transfer anything if they are not set to
          extract.</strong
        >
        You can sneak-click onto the end of a connected pipe with a wrench to set it
        to extract.
      </p>
      <p>
        Click the extracting part of the pipe to change modes, add filters or
        add upgrades.
      </p>
      <p>Pipes can be disconnected/reconnected by sneak-clicking with a wrench.</p>
      <p>
        By default pipes are relatively slow. The speed can only be increased by
        adding an upgrade. Higher tiers of upgrades mean a higher transfer rate.
      </p>
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/pipez/video_pipez_1.mp4')
          "
          type="video/mp4"
        />
      </video>
      <br/>
      <p>
        Certain features of pipes can only be used by adding a high enough
        upgrade:
      </p>
      <ul>
        <li>
          Basic Upgrade
          <ul>
            <li>Redstone modes</li>
          </ul>
        </li>
        <li>
          Improved Upgrade
          <ul>
            <li>Distribution modes</li>
          </ul>
        </li>
        <li>
          Advanced Upgrade
          <ul>
            <li>Filter modes</li>
            <li>Filters</li>
          </ul>
        </li>
      </ul>
      <p>
        Every configuration you change and every filter you add is stored in the
        upgrade. You can copy the data to other upgrades by crafting them
        together.
      </p>
      <h3>Filters</h3>
      <p>Filters can be used with item pipes, fluid pipes and gas pipes.</p>
      <v-img
        :src="require('~/assets/minecraft/pipez/image_pipez_2.png')"
      ></v-img>
      <br/>
      <v-img
        :src="require('~/assets/minecraft/pipez/image_pipez_3.png')"
      ></v-img>
      <br/>
      <v-img
        :src="require('~/assets/minecraft/pipez/image_pipez_4.png')"
      ></v-img>
      <br/>
      <p>
        To add a specific item, just click it on the slot in the filter GUI.
        Alternatively you can type the item ID in the text field next to it.
      </p>
      <p>
        If the object you inserted had NBT data, the NBT string will be
        displayed in the second text area. You can remove the NBT text if you
        don't want to match NBT tags.
      </p>
      <p>
        There is also an option to only match the provided NBT data (Button with
        NBT on it). This can be set to exact mode. This causes only items that
        match that tag exactly to be accepted by the filter.
      </p>
      <p>
        Filters can be inverted by pressing the button with the paper on it.
        This causes the filter to apply for the exact opposite of the provided
        data (except the destination).
      </p>
      <p>
        You can also set the filter to only apply for a certain destination. For
        this you need a filter destination tool. Just click the block your pipe
        inserts into with it so store the location and face of the block. Note
        that this doesn't work if you clicked a side of the block that the
        cable isn't connected to.
      </p>
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/pipez/video_pipez_2.mp4')
          "
          type="video/mp4"
        />
      </video>
      <br/>
      <p>
        To set the location to a filter, put it into the destination slot of the
        filter GUI. This will also display the destination block in the filter
        list.
      </p>
      <v-img
        :src="require('~/assets/minecraft/pipez/image_pipez_5.png')"
      ></v-img>
      <br/>
      <p>
        The <b>Universal Pipe</b> has every feature of all other pipes combined. You can choose which pipe type you want to configure with the tabs on the left of the GUI.
      </p>
      <v-img
        :src="require('~/assets/minecraft/pipez/image_pipez_8.png')"
      ></v-img>
      <br/>
      <h2>Performance Comparison</h2>
      <p>
        Comparison between Pipez' item pipes and Mekanism&#39;s logistical
        transporters with about 4200 pipes.
      </p>
      <v-img
        :src="require('~/assets/minecraft/pipez/image_pipez_6.png')"
      ></v-img>
      <br/>
      <p>
        Comparison between Pipez&#39; item pipes and Mekanism&#39;s logistical
        transporters with about 7200 pipes. Since Mekanism calculates its pipe
        connections with a recoursive algorithm it just crashes, due to a stack
        overflow.
      </p>
      <v-img
        :src="require('~/assets/minecraft/pipez/image_pipez_7.png')"
      ></v-img>
      <br/>

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
          element: { name: "Non Recursive Pipe Algorithm" },
          name: {
            name: "Bommel24",
            link: "https://bommel24.de",
          },
        },
        {
          element: { name: "German translation" },
          name: {
            name: "offron",
            link: "https://github.com/offron",
          },
        },
        {
          element: { name: "Swedish translation" },
          name: {
            name: "Regnander",
            link: "https://github.com/Regnander",
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
