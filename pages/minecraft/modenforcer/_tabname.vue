<template>
  <Mod
    title="Mod Enforcer"
    description="Ensures that players have the same mods as the server."
    :logo="require('~/assets/minecraft/modenforcer/logo_modenforcer.png')"
    id="modenforcer"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/mod-enforcer/files/all"
    sourcelink="https://github.com/henkelmax/mod-enforcer"
    issueslink="https://github.com/henkelmax/mod-enforcer/issues"
    :faq="faq"
    :images="images"
  >
    <v-container slot="overview">
      <p>Ensures that players have the same mods as the server.</p>
      <p>
        This mod has to be installed on the client and the server.
        This mod sends a list of installed mods to the server.
        The server then checks if the mods and mod versions match.
        If this isn't the case it kicks the player with a message that shows the missing mods or mismatching versions.
        If the client hasn't installed this mod at all, the server kicks the client after a specific amount of time when not sending the mod list to the server.
      </p>
      <br />
      <v-img :src="require('~/assets/minecraft/modenforcer/image_modenforcer_1.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/modenforcer/image_modenforcer_2.png')"></v-img>
      <br />
    </v-container>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";

export default {
  data() {
    return {
      faq: [
        {
          question: "Is this mod server side only?",
          answer:
            "No. This mod has to be installed on the server and the client.",
        },
      ],
      images: [
        require("~/assets/minecraft/modenforcer/image_modenforcer_1.png"),
        require("~/assets/minecraft/modenforcer/image_modenforcer_2.png"),
      ],
    };
  },
  components: {
    Mod,
  },
};
</script>
