<template>
  <Mod
    title="Anti Mob Griefing"
    description="Fully customizable mob griefing rules."
    :logo="
      require('~/assets/minecraft/antimobgriefing/logo_antimobgriefing.png')
    "
    id="antimobgriefing"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/anti-mob-griefing/files/all"
    sourcelink="https://github.com/henkelmax/anti-mob-griefing"
    issueslink="https://github.com/henkelmax/anti-mob-griefing/issues"
  >
    <v-container slot="overview">
      <p>This mod adds fully customizable mob griefing rules.</p>
      <br />
      <h2>Config Options</h2>
      <table>
        <thead>
          <tr>
            <th><strong>Name</strong></th>
            <th><strong>Default Value</strong></th>
            <th><strong>Description</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>disable_crop_trampling</td>
            <td><code>false</code></td>
            <td>Disable crop trampling</td>
          </tr>
          <tr>
            <td>disable_wither_rose_placing</td>
            <td><code>false</code></td>
            <td>Disable placing a Wither Rose when a mob dies from a wither</td>
          </tr>
          <tr>
            <td>creeper.disable_damage</td>
            <td><code>false</code></td>
            <td>Disable Creeper damage</td>
          </tr>
          <tr>
            <td>creeper.disable_explosion_block_damage</td>
            <td><code>true</code></td>
            <td>Disable Creeper block griefing</td>
          </tr>
          <tr>
            <td>creeper.lingering_effects.enabled</td>
            <td><code>false</code></td>
            <td>
              If creepers should spawn a lingering effect cloud upon exploding
            </td>
          </tr>
          <tr>
            <td>creeper.lingering_effects.effects</td>
            <td><code>["{Duration:200,Id:9b,Amplifier:1b}"]</code></td>
            <td>The potion effects that the creeper spawns upon exploding</td>
          </tr>
          <tr>
            <td>creeper.firework.enabled</td>
            <td><code>false</code></td>
            <td>Disable crop trampling</td>
          </tr>
          <tr>
            <td>creeper.firework.colors</td>
            <td>
              <code
                >["white", "orange", "magenta", "light_blue", "yellow", "lime",
                "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown",
                "green", "red", "black"]</code
              >
            </td>
            <td>The colors that the firework contains</td>
          </tr>
          <tr>
            <td>creeper.knockback.enabled</td>
            <td><code>false</code></td>
            <td>If players should be knocked back when a Creeper explodes</td>
          </tr>
          <tr>
            <td>creeper.knockback.factor</td>
            <td><code>2.5</code></td>
            <td>The amount of speed applied to the player when knocked back</td>
          </tr>
          <tr>
            <td>enderman.disable_block_pickup</td>
            <td><code>true</code></td>
            <td>Disable Endermen picking up blocks</td>
          </tr>
          <tr>
            <td>ravager.disable_block_breaking</td>
            <td><code>true</code></td>
            <td>Disable Ravager breaking blocks</td>
          </tr>
          <tr>
            <td>silverfish.disable_block_merging</td>
            <td><code>false</code></td>
            <td>
              Disable Silverfishes getting into blocks and destroying blocks
            </td>
          </tr>
          <tr>
            <td>fox.disable_berry_harvesting</td>
            <td><code>false</code></td>
            <td>Disable Foxes harvesting berries</td>
          </tr>
          <tr>
            <td>rabbit.disable_carrot_harvesting</td>
            <td><code>false</code></td>
            <td>Disable Rabbits breaking carrot crops</td>
          </tr>
          <tr>
            <td>zombie.disable_door_breaking</td>
            <td><code>false</code></td>
            <td>Disable Zombies breaking doors</td>
          </tr>
          <tr>
            <td>wither.disable_block_damage</td>
            <td><code>true</code></td>
            <td>Disable Withers breaking blocks</td>
          </tr>
          <tr>
            <td>snow_golem.disable_snow_placing</td>
            <td><code>false</code></td>
            <td>Disable Snow Golems placing snow layers</td>
          </tr>
          <tr>
            <td>blaze.disable_fire</td>
            <td><code>false</code></td>
            <td>Disable Blazes creating fire with fireballs</td>
          </tr>
          <tr>
            <td>ghast.disable_fireball_block_damage</td>
            <td><code>false</code></td>
            <td>Disable Ghast fireball block damage</td>
          </tr>
          <tr>
            <td>villager.disable_crop_farming</td>
            <td><code>false</code></td>
            <td>Disable Villager crop farming</td>
          </tr>
          <tr>
            <td>sheep.disable_grass_eating</td>
            <td><code>false</code></td>
            <td>Disable Sheep grass eating</td>
          </tr>
          <tr>
            <td>evoker.disable_sheep_converting</td>
            <td><code>false</code></td>
            <td>Disable Evoker Sheep color converting</td>
          </tr>
        </tbody>
      </table>
    </v-container>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";

export default {
  data() {
    return {
      //
    };
  },
  components: {
    Mod,
  },
};
</script>
