<template>
  <Mod
    title="Storage Overhaul"
    description="A complete overhaul of storage containers."
    :logo="require('~/assets/minecraft/storage_overhaul/logo_storage_overhaul.png')"
    id="storage_overhaul"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/storage-overhaul/files/all"
    sourcelink="https://github.com/henkelmax/storage-overhaul"
    issueslink="https://github.com/henkelmax/storage-overhaul/issues"
    :images="images"
  >
    <v-container slot="overview">
      <v-img :src="require('~/assets/minecraft/storage_overhaul/image_storage_overhaul_1.png')"></v-img>
      <br />
      <h1>Features</h1>
      <ul>
        <li>Four tiers of every container with more storage space</li>
        <li>Advanced shulkerboxes</li>
        <li>Chests in every type of wood</li>
        <li>Barrels in every type of wood</li>
        <li>Storage barrels in every type of wood</li>
        <li>Minecart chests in every type of wood</li>
      </ul>
      <br />
      <h1>Chests</h1>
      <p>
        Normal chests have 27 slots of storage space.
        Each type of chest has a base tier and three addidtional tiers.
      </p>
      <v-img :src="require('~/assets/minecraft/storage_overhaul/image_storage_overhaul_2.png')"></v-img>
      <br />
      <p>
        With each tier the chest gets 9 additional slots, so tier three chests are as big as a double chest.
        These chests are also able to be combined into double chests, providing double the storage space.
        Every chest also has its minecart chest variant.
      </p>
      <v-img :src="require('~/assets/minecraft/storage_overhaul/image_storage_overhaul_3.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/storage_overhaul/image_storage_overhaul_4.png')"></v-img>
      <br />
      <h1>Advanced Shulkerboxes</h1>
      <p>Advanced shulkerboxes have the same storage space as a normal shulkerbox, but you can access its inventory by right-clicking the item.</p>
      <v-img :src="require('~/assets/minecraft/storage_overhaul/image_storage_overhaul_9.png')"></v-img>
      <br />
      <h1>Barrels</h1>
      <p>
        Normal barrels have 27 slots of storage space.
        Each type of barrel has a base tier and three addidtional tiers.
        With each tier the barrel gets 9 additional slots, so tier three chests are as big as two barrels combined.
      </p>
      <v-img :src="require('~/assets/minecraft/storage_overhaul/image_storage_overhaul_5.png')"></v-img>
      <br />
      <h1>Storage Barrels</h1>
      <p>
        Storage barrels can only store a single type of item.
        You can insert an item by right-clicking the front.
        Double right-clicking inserts all items of that type.
        You can take out a single item by left-clicking and a complete stack by shift + left-clicking.
        A barrel can store up to 3456 items, but this can be changed in the configuration file.
      </p>
      <v-img :src="require('~/assets/minecraft/storage_overhaul/image_storage_overhaul_6.png')"></v-img>
      <br />
      <p>The stored item is displayed on the front of the barrel.</p>
      <v-img :src="require('~/assets/minecraft/storage_overhaul/image_storage_overhaul_7.png')"></v-img>
      <br />
      <p>
        This mod is also fully
        <a
          href="https://www.curseforge.com/minecraft/mc-mods/waila"
          target="_blank"
        >WAILA</a>/
        <a href="https://www.curseforge.com/minecraft/mc-mods/hwyla" target="_blank">HWYLA</a> compatible.
      </p>
      <v-img :src="require('~/assets/minecraft/storage_overhaul/image_storage_overhaul_8.png')"></v-img>
    </v-container>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";

export default {
  data() {
    return {
      images: [
        require("~/assets/minecraft/storage_overhaul/image_storage_overhaul_1.png"),
        require("~/assets/minecraft/storage_overhaul/image_storage_overhaul_2.png"),
        require("~/assets/minecraft/storage_overhaul/image_storage_overhaul_3.png"),
        require("~/assets/minecraft/storage_overhaul/image_storage_overhaul_4.png"),
        require("~/assets/minecraft/storage_overhaul/image_storage_overhaul_9.png"),
        require("~/assets/minecraft/storage_overhaul/image_storage_overhaul_5.png"),
        require("~/assets/minecraft/storage_overhaul/image_storage_overhaul_6.png"),
        require("~/assets/minecraft/storage_overhaul/image_storage_overhaul_7.png"),
        require("~/assets/minecraft/storage_overhaul/image_storage_overhaul_8.png"),
      ],
      credits: [
        {
          element: { name: "Chinese Simplified (China) translation" },
          name: {
            name: "Imbarainbow",
            link: "https://github.com/Imbarainbow",
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
