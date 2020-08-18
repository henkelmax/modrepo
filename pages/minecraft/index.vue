<template>
  <v-row justify="center" class="ma-2">
    <v-col lg="3" xl="3" md="4" sm="6" cols="12" v-for="(mod, i) in mods" :key="i">
      <ModCard
        :name="$t(mod.name)"
        :description="$t(mod.description)"
        :logo="mod.logo"
        :overviewPath="`/minecraft/${mod.modid}/overview`"
        :wikiPath="`/minecraft/${mod.modid}/wiki`"
        :imagesPath="`/minecraft/${mod.modid}/images`"
        :downloadLink="mod.downloadLink"
      />
    </v-col>
  </v-row>
</template>

<script>
import ModCard from "~/components/ModCard.vue";

export default {
  components: {
    ModCard,
  },
  data() {
    return {
      mods: [
        {
          name: "ultimate_car_mod",
          description: "ultimate_car_mod_description",
          modid: "car",
          logo: require("~/assets/minecraft/car/logo_car.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/ultimate-car-mod/files/all",
        },
        {
          name: "gravestone_mod",
          description: "gravestone_mod_description",
          modid: "gravestone",
          logo: require("~/assets/minecraft/gravestone/logo_gravestone.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/gravestone-mod/files/all",
        },
        {
          name: "camera_mod",
          description: "camera_mod_description",
          modid: "camera",
          logo: require("~/assets/minecraft/camera/logo_camera.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/camera-mod/files/all",
        },
        {
          name: "corpse",
          description: "corpse_description",
          modid: "corpse",
          logo: require("~/assets/minecraft/corpse/logo_corpse.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/corpse/files/all",
        },
        {
          name: "advanced_mining_dimension",
          description: "advanced_mining_dimension_description",
          modid: "mining_dimension",
          logo: require("~/assets/minecraft/mining_dimension/logo_mining_dimension.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/advanced-mining-dimension/files/all",
        },
        {
          name: "advanced_shulkerboxes",
          description: "advanced_shulkerboxes_description",
          modid: "shulkerbox",
          logo: require("~/assets/minecraft/shulkerbox/logo_shulkerbox.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/advanced-shulkerboxes/files/all",
        },
        {
          name: "reap_mod",
          description: "reap_mod_description",
          modid: "reap",
          logo: require("~/assets/minecraft/reap/logo_reap.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/reap-mod/files/all",
        },
        {
          name: "advanced_tools",
          description: "advanced_tools_description",
          modid: "advancedtools",
          logo: require("~/assets/minecraft/advancedtools/logo_advancedtools.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/advanced_tools/files/all",
        },
        {
          name: "better_respawn",
          description: "better_respawn_description",
          modid: "better_respawn",
          logo: require("~/assets/minecraft/better_respawn/logo_better_respawn.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/better-respawn/files/all",
        },
        {
          name: "storage_overhaul",
          description: "storage_overhaul_description",
          modid: "storage_overhaul",
          logo: require("~/assets/minecraft/storage_overhaul/logo_storage_overhaul.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/storage-overhaul/files/all",
        },
        {
          name: "fakeblocks",
          description: "fakeblocks_description",
          modid: "fakeblocks",
          logo: require("~/assets/minecraft/fakeblocks/logo_fakeblocks.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/fakeblocks/files/all",
        },
        {
          name: "sleeping_bags",
          description: "sleeping_bags_description",
          modid: "sleeping_bags",
          logo: require("~/assets/minecraft/sleeping_bags/logo_sleeping_bags.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/sleeping-bags/files/all",
        },
        {
          name: "easy_villagers",
          description: "easy_villagers_description",
          modid: "easy_villagers",
          logo: require("~/assets/minecraft/easy_villagers/logo_easy_villagers.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/easy-villagers/files/all",
        },
      ],
    };
  },
};
</script>

<i18n>
{
  "en": {
    "ultimate_car_mod": "Ultimate Car Mod",
    "ultimate_car_mod_description": "This mod brings cars, road construction and biodiesel production into your Minecraft world.",
    "gravestone_mod": "GraveStone Mod",
    "gravestone_mod_description": "Places a gravestone with your inventory items inside when you die.",
    "camera_mod": "Camera Mod",
    "camera_mod_description": "A working Camera in Minecraft!",
    "corpse": "Corpse",
    "corpse_description": "Never lose your items again!",
    "advanced_mining_dimension": "Advanced Mining Dimension",
    "advanced_mining_dimension_description": "Adds a dimension consisting just of caves.",
    "advanced_shulkerboxes": "Advanced Shulkerboxes",
    "advanced_shulkerboxes_description": "This mod makes the Shulker Box more portable.",
    "reap_mod": "Reap Mod",
    "reap_mod_description": "Harvest crops with right clicking.",
    "advanced_tools": "Advanced Tools",
    "advanced_tools_description": "The last set of tools you will EVER need.",
    "better_respawn": "Better Respawn",
    "better_respawn_description": "This mod adds a mechanic that lets you respawn near your death location.",
    "storage_overhaul": "Storage Overhaul",
    "storage_overhaul_description": "A complete overhaul of storage containers.",
    "fakeblocks": "FakeBlocks",
    "fakeblocks_description": "This mod adds a block that can look like every full block, but has no collision.",
    "sleeping_bags": "Sleeping Bags",
    "sleeping_bags_description": "A sleeping bag that does not set your spawnpoint.",
    "easy_villagers": "Easy Villagers",
    "easy_villagers_description": "Never get annoyed by villagers again!"
  },
  "de": {
    "ultimate_car_mod": "Ultimate Car Mod",
    "ultimate_car_mod_description": "This mod brings cars, road construction and biodiesel production into your Minecraft world.",
    "gravestone_mod": "GraveStone Mod",
    "gravestone_mod_description": "Places a gravestone with your inventory items inside when you die.",
    "camera_mod": "Camera Mod",
    "camera_mod_description": "A working Camera in Minecraft!",
    "corpse": "Corpse",
    "corpse_description": "Never lose your items again!",
    "advanced_mining_dimension": "Advanced Mining Dimension",
    "advanced_mining_dimension_description": "Adds a dimension consisting just of caves.",
    "advanced_shulkerboxes": "Advanced Shulkerboxes",
    "advanced_shulkerboxes_description": "This mod makes the Shulker Box more portable.",
    "reap_mod": "Reap Mod",
    "reap_mod_description": "Harvest crops with right clicking.",
    "advanced_tools": "Advanced Tools",
    "advanced_tools_description": "The last set of tools you will EVER need.",
    "better_respawn": "Better Respawn",
    "better_respawn_description": "This mod adds a mechanic that lets you respawn near your death location.",
    "storage_overhaul": "Storage Overhaul",
    "storage_overhaul_description": "A complete overhaul of storage containers.",
    "fakeblocks": "FakeBlocks",
    "fakeblocks_description": "This mod adds a block that can look like every full block, but has no collision.",
    "sleeping_bags": "Sleeping Bags",
    "sleeping_bags_description": "A sleeping bag that does not set your spawnpoint.",
    "easy_villagers": "Easy Villagers",
    "easy_villagers_description": "Never get annoyed by villagers again!"
  }
}
</i18n>
