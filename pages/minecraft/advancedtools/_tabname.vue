<template>
  <Mod
    title="Advanced Tools"
    description="The last set of tools you will EVER need."
    :logo="require('~/assets/minecraft/advancedtools/logo_advancedtools.png')"
    id="advancedtools"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/advanced_tools/files/all"
    sourcelink="https://github.com/henkelmax/advanced-tools"
    issueslink="https://github.com/henkelmax/advanced-tools/issues"
    :images="images"
    :credits="credits"
  >
    <v-container slot="overview">
      <h2>Features</h2>
      <ul>
        <li>Tools are indestructibe</li>
        <li>Tool materials can be upgraded</li>
        <li>Tools can be repaired</li>
        <li>Tools track statistics</li>
        <li>Tools have modifiable enchantments</li>
        <li>
          Full
          <a href="https://www.curseforge.com/minecraft/mc-mods/jei" target="_blank">JEI</a> compatibility
        </li>
      </ul>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_1.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_2.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_3.png')"></v-img>
      <br />
      <h2>Recipes</h2>
      <h3>Crafting</h3>
      <p>The recipes of these tools are equal to all vanilla tools, just flipped upside down.</p>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_4.png')"></v-img>
      <br />
      <h3>Repairing</h3>
      <p>Every tool can be repaired with its corresponding material.</p>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_5.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_6.png')"></v-img>
      <br />
      <h3>Change Material</h3>
      <p>
        The material of every tool can be changed to a better or worse one.
        Just combine it with the right amount in the crafting grid.
      </p>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_7.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_8.png')"></v-img>
      <br />
      <h3>Convert Books</h3>
      <p>
        You can convert enchanted books to enchantment templates.
        These can be used to add enchantments to your tool.
      </p>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_9.png')"></v-img>
      <br />
      <h3>Enchanting</h3>
      <p>You can combine any tool with a compatible enchantment template to apply the enchantment.</p>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_10.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_11.png')"></v-img>
      <br />
      <h3>Remove Enchantments</h3>
      <p>
        You can remove any enchantment from your tool with the enchantment remover.
        Just right-click the enchantment remover until you see the enchanment you wish to remove and then put it togehter with the tool you want to remove the enchantment from in a crafting grid.
      </p>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_12.png')"></v-img>
      <br />
      <h3>Convert Enchantments</h3>
      <p>You can put the enchantments back on books by combining the enchantment template with a book in the crafting grid.</p>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_13.png')"></v-img>
      <br />
      <h3>Combine Enchantments</h3>
      <p>Like with enchanted books in the anvil, you can combine two equal enchantments to a higher enchantment level, by putting them together in the crafting grid.</p>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_14.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_15.png')"></v-img>
      <br />
      <h3>Split Enchantments</h3>
      <p>You can split an enchantment into two lower level enchantments by putting the enchantment template into the crafting grid.</p>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_16.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_17.png')"></v-img>
      <br />
      <h3>Converting Vanilla Tools</h3>
      <p>Vanilla tools can be converted to advanced tools by just placing them into the crafting grid.</p>
      <br />
      <v-img :src="require('~/assets/minecraft/advancedtools/image_advancedtools_18.png')"></v-img>
      <br />
      <h2>Config Options</h2>
      <p>
        <code>tool_items_never_despawn</code> If tool items should never despawn
      </p>
      <p>
        <code>tool_items_indestructible</code> If tool items should be indestructible
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
        require("~/assets/minecraft/advancedtools/image_advancedtools_1.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_2.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_3.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_4.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_5.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_6.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_7.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_8.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_9.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_10.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_11.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_12.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_13.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_14.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_15.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_16.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_17.png"),
        require("~/assets/minecraft/advancedtools/image_advancedtools_18.png"),
      ],
      credits: [
        {
          element: { name: "Pliers texture" },
          name: {
            name: "usernameye",
            link: "https://github.com/usernameye",
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
