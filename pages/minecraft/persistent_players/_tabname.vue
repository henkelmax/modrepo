<template>
  <Mod
    title="Persistent Players"
    description="Players stay in the world when they log out."
    :logo="
      require('~/assets/minecraft/persistent_players/logo_persistent_players.png')
    "
    id="persistent_players"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/persistent-players/files/all"
    sourcelink="https://github.com/henkelmax/persistent-players"
    issueslink="https://github.com/henkelmax/persistent-players/issues"
    :credits="credits"
  >
    <v-container slot="overview">
      <p>Players stay in the world when they log out.</p>
      <br />
      <h2>Features</h2>
      <ul>
        <li>
          If a player dies when logged out, it will drop its inventory items
        </li>
        <li>
          If a player gets moved to another location when logged out it will be
          at that location when logging back in
        </li>
      </ul>
      <br />
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/persistent_players/video_persistent_players_1.mp4')
          "
          type="video/mp4"
        />
      </video>
      <br />
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/persistent_players/video_persistent_players_2.mp4')
          "
          type="video/mp4"
        />
      </video>
      <br />
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/persistent_players/video_persistent_players_3.mp4')
          "
          type="video/mp4"
        />
      </video>
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
          element: { name: "Idea" },
          name: {
            name: "TheRealLeejit",
            link: "https://www.curseforge.com/members/therealleejit",
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
