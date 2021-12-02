<template>
  <Mod
    title="Dynamic Render Distance"
    description="Dynamically adjusts the render distance based on the servers performance."
    :logo="require('~/assets/minecraft/renderdistance/logo_renderdistance.png')"
    id="renderdistance"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/dynamic-render-distance/files/all"
    sourcelink="https://github.com/henkelmax/dynamic-render-distance"
    issueslink="https://github.com/henkelmax/dynamic-render-distance/issues"
    :faq="faq"
    :credits="credits"
  >
    <v-container slot="overview">
      <p>
        <span
          >This is a server side only fabric mod, that dynamically adjusts the
          render distance based on the servers performance.</span
        >
      </p>
      <br />
      <h2>Commands</h2>
      <br />
      <p>
        <code>/renderdistance current</code> shows you the current
        simulation and render distance (Can be executed by non OP players
        as well)
      </p>
      <p>
        <code>/renderdistance fixed ratio|render|simulation &lt;value&gt;|auto</code>
        sets the render/simulation distance or ratio to a fixed value
      </p>
      <p>
        <code>/renderdistance limit render|simulation &lt;min&gt; &lt;max&gt;</code>
        sets minimum and maximum render/simulation distance
      </p>
      <p>
        <code>/renderdistance mspt</code>
        shows the average MSPT over the last interval
      </p>
      <p>
        <code>/renderdistance tps</code>
        shows the average TPS over the last interval
      </p>
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
          question: "Does this mod need to be installed on client and server?",
          answer: "No. This mod only needs to be installed on the server.",
        },
      ],
      credits: [
        {
          element: { name: "Simulation/Render distance ratio" },
          name: {
            name: "GotoFinal",
            link: "https://github.com/GotoFinal",
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
