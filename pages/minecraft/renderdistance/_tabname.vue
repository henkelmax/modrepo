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
  >
    <v-container slot="overview">
      <p>
        <span
          >This is a server side only fabric mod, that dynamically adjusts the
          render distance based on the servers performance.</span
        >
      </p>
      <br />
      <br />
      <h2>Config Options</h2>
      <br />
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Default Value</th>
            <th class="text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>min_mspt</td>
            <td><code>30</code></td>
            <td>
              The lower threshold in mspt when the mod starts increasing the
              render distance
            </td>
          </tr>
          <tr>
            <td>max_mspt</td>
            <td>
              <code>40</code>
            </td>
            <td>
              The upper threshold in mspt when the mod starts decreasing the
              render distance
            </td>
          </tr>
          <tr>
            <td>tick_interval</td>
            <td><code>200</code></td>
            <td>The interval of the mspt check</td>
          </tr>
          <tr>
            <td>min_render_distance</td>
            <td><code>10</code></td>
            <td>The minimum render distance the server can have</td>
          </tr>
          <tr>
            <td>max_render_distance</td>
            <td><code>32</code></td>
            <td>The maximum render distance the server can have</td>
          </tr>
          <tr>
            <td>fixed_render_distance</td>
            <td><code>0</code></td>
            <td>The fixed render distance; 0 means dynamic render distance</td>
          </tr>
        </tbody>
      </v-simple-table>
      <br />
      <h2>Commands</h2>
      <br />
      <p>
        <code>/renderdistance current</code> shows you the current render
        distance (Can be executed by non OP players as well)
      </p>
      <p>
        <code>/renderdistance set &lt;number&gt;</code> sets the render distance
        to a fixed value
      </p>
      <p>
        <code>/renderdistance set auto</code> lets the mod dynamically change
        the render distance again
      </p>
      <p>
        <code>/renderdistance mspt</code> shows the average MSPT over the last interval
      </p>
      <p>
        <code>/renderdistance tps</code> shows the average TPS over the last interval
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
    };
  },
  components: {
    Mod,
  },
};
</script>
