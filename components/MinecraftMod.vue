<template>
  <Mod
    :title="title"
    :description="description"
    :logo="logo"
    :id="id"
    :downloadlink="downloadlink"
    :issueslink="issueslink"
    :sourcelink="sourcelink"
    :images="images"
    :generalFaq="generalFaq"
    :faq="faq"
    :credits="credits"
    parentPath="/minecraft"
    parentTitle="Minecraft Mods"
  >
    <slot slot="versions">
      <v-chip
        v-for="(version, i) in versions"
        :key="i"
        small
        class="mr-1 white--text"
        color="light-blue accent-4"
      >{{ version.gameVersion }}</v-chip>
    </slot>

    <slot slot="sidebar">
      <p class="title text--primary ml-4">Versions</p>
      <v-list>
        <v-list-item>
          <v-list-item-title class="font-italic font-weight-medium">Game Version</v-list-item-title>
          <v-list-item-title class="font-italic font-weight-medium text-right">Mod Version</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="(version, i) in versions" :key="i">
          <v-list-item-title class>{{ version.gameVersion }}</v-list-item-title>
          <v-list-item-title class="text-right">{{ version.version }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </slot>

    <slot slot="update_history">
      <UpdateHistory v-if="id" :modid="id" />
      <Empty v-else />
    </slot>

    <slot slot="overview" name="overview"></slot>
    <slot slot="images" name="images"></slot>
    <slot slot="wiki" name="wiki"></slot>
    <slot slot="faq" name="faq"></slot>
    <slot slot="credits" name="credits"></slot>
    <slot slot="issues" name="issues"></slot>
  </Mod>
</template>

<script>
import Mod from "~/components/Mod.vue";
import UpdateHistory from "~/components/UpdateHistory.vue";
import Empty from "~/components/Empty.vue";

import compareVersions from "compare-versions";

export default {
  props: [
    "title",
    "description",
    "logo",
    "id",
    "downloadlink",
    "sourcelink",
    "issueslink",
    "images",
    "faq",
    "credits",
  ],
  data() {
    return {
      versions: [],
      generalFaq: [],
    };
  },
  components: {
    Mod,
    UpdateHistory,
    Empty,
  },
  created() {
    this.$axios
      .get(`https://update.maxhenkel.de/latest/${this.id}`)
      .then((result) => {
        this.versions = result.data.sort((a, b) => compareVersions(b.gameVersion, a.gameVersion));
      })
      .catch((err) => {});

    this.generalFaq.push({
      question: "Am I allowed to use this mod in a modpack?",
      answer: "Yes. But please make sure to give credit.",
    });
    this.generalFaq.push({
      question: "Where is the config file located?",
      answer: `There are two types of configs.
      The config for the server side is located in your world folder in a subfolder called 'serverconfig'.
      The client side config is located in your '.minecraft' folder inside a subfolder called 'config'.
      Note that the client side and the server side config isn't the same. You can't put stuff from the server config into the client config. If you can't find the option you are looking for in the client config, try looking into the server config.
      There is always a server config, even if you are playing singleplayer, as it also uses an internal server.
      `,
    });
    this.generalFaq.push({
      question: "I found a bug, how do I report it?",
      answer: `Please report any bugs on GitHub. You can find the link in the 'Issues' section on CurseForge.
      Please describe your problem in detail and provide screenshots if possible.
      It is very important that you always provide log files, even if your game didn't crash, this helps a lot narrowing down the source of the problem.`,
    });
    this.generalFaq.push({
      question: "Where can I see the recipes?",
      answer: `For recipes use <a href="https://www.curseforge.com/minecraft/mc-mods/jei" target="_blank">JEI</a>.`,
    });
    this.generalFaq.push({
      question:
        "I translated your mod into another language. How do I send it to you?",
      answer: `Just upload the translation file to something like <a href="https://gist.github.com/" target="_blank">GitHub Gist</a> and open a new issue with the issue template 'Translation'.`,
    });
    this.generalFaq.push({
      question: "Can you port this mod to Fabric?",
      answer: "It it is not already ported, no.",
    });
    this.generalFaq.push({
      question: "Can you port this mod to Minecraft version XYZ?",
      answer: "Please first look into the files section on CurseForge, click on 'View All' and then choose your Minecraft version from the dropdown menu. If the version your searched for is not available, I most likely won't port it to that version (If it is not the latest version).",
    });
    this.generalFaq.push({
      question: "Do I need to install this mod on the client or the server?",
      answer: "All mods need to be installed on the client and the server. Always make sure, you are using the same version on both sides!",
    });
    // this.generalFaq.push({ question: "General1", answer: "AnswerGeneral" });
  },
};
</script>

<style scoped>
.v-list-item {
  min-height: 25px;
}
</style>
