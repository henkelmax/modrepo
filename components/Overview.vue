<template>
  <v-row justify="center" class="ma-2">
    <v-col lg="3" xl="3" md="4" sm="6" cols="12" v-for="(mod, i) in mods" :key="i">
      <ModCard
        :name="mod.name"
        :description="mod.description"
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
          name: "Ultimate Car Mod",
          description:
            "This mod brings cars, road construction and biodiesel production into your Minecraft world.",
          modid: "car",
          logo: require("~/assets/minecraft/car/logo_car.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/ultimate-car-mod/files/all",
        },
        {
          name: "GraveStone Mod",
          description:
            "Places a gravestone with your inventory items inside when you die.",
          modid: "gravestone",
          logo: require("~/assets/minecraft/gravestone/logo_gravestone.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/gravestone-mod/files/all",
        },
        {
          name: "Camera Mod",
          description: "A working Camera in Minecraft!",
          modid: "camera",
          logo: require("~/assets/minecraft/camera/logo_camera.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/camera-mod/files/all",
        },
        {
          name: "Corpse",
          description: "Never lose your items again!",
          modid: "corpse",
          logo: require("~/assets/minecraft/corpse/logo_corpse.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/corpse/files/all",
        },
        {
          name: "Advanced Mining Dimension",
          description: "Adds a dimension consisting just of caves.",
          modid: "mining_dimension",
          logo: require("~/assets/minecraft/mining_dimension/logo_mining_dimension.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/advanced-mining-dimension/files/all",
        },
        {
          name: "Advanced Shulkerboxes",
          description: "This mod makes the Shulker Box more portable.",
          modid: "shulkerbox",
          logo: require("~/assets/minecraft/shulkerbox/logo_shulkerbox.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/advanced-shulkerboxes/files/all",
        },
        {
          name: "Reap Mod",
          description: "Harvest crops with right clicking.",
          modid: "reap",
          logo: require("~/assets/minecraft/reap/logo_reap.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/reap-mod/files/all",
        },
        {
          name: "Advanced Tools",
          description: "The last set of tools you will EVER need.",
          modid: "advancedtools",
          logo: require("~/assets/minecraft/advancedtools/logo_advancedtools.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/advanced_tools/files/all",
        },
        {
          name: "Better Respawn",
          description:
            "This mod adds a mechanic that lets you respawn near your death location.",
          modid: "better_respawn",
          logo: require("~/assets/minecraft/better_respawn/logo_better_respawn.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/better-respawn/files/all",
        },
        {
          name: "Storage Overhaul",
          description: "A complete overhaul of storage containers.",
          modid: "storage_overhaul",
          logo: require("~/assets/minecraft/storage_overhaul/logo_storage_overhaul.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/storage-overhaul/files/all",
        },
        {
          name: "FakeBlocks",
          description:
            "This mod adds a block that can look like every full block, but has no collision.",
          modid: "fakeblocks",
          logo: require("~/assets/minecraft/fakeblocks/logo_fakeblocks.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/fakeblocks/files/all",
        },
        {
          name: "Sleeping Bags",
          description: "A sleeping bag that does not set your spawnpoint.",
          modid: "sleeping_bags",
          logo: require("~/assets/minecraft/sleeping_bags/logo_sleeping_bags.png"),
          downloadLink:
            "https://www.curseforge.com/minecraft/mc-mods/sleeping-bags/files/all",
        },
        {
          name: "Easy Villagers",
          description: "Never get annoyed by villagers again!",
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
