<template v-for="(element, i) in faq" :key="i">
  <FAQ :faq="faq" />
</template>

<script setup>
import { ref } from "vue";

const faq = ref([
  {
    question: "Am I allowed to use your mods in a modpack?",
    answer: "Yes. But please make sure to give credit.",
  },
  {
    question: "Where is the config file located? (For NeoForge mods)",
    answer: `There are two types of configs - client and server configs.
            The configs are located in your <code>.minecraft</code> or server folder inside a subfolder called <code>config</code>.
            Note that the client side and the server side config isn't the same. You can't put stuff from the server config into the client config. If you can't find the option you are looking for in the client config, try looking into the server config.
            There is always a server config, even if you are playing singleplayer, as it also uses an internal server.
            `,
  },
  {
    question: "Where is the config file located? (For Forge mods)",
    answer: `There are two types of configs.
            The config for the server side is located in your world folder in a subfolder called <code>serverconfig</code>.
            The client side config is located in your <code>.minecraft</code> folder inside a subfolder called <code>config</code>.
            Note that the client side and the server side config isn't the same. You can't put stuff from the server config into the client config. If you can't find the option you are looking for in the client config, try looking into the server config.
            There is always a server config, even if you are playing singleplayer, as it also uses an internal server.
            `,
  },
  {
    question: "Where is the config file located? (For Fabric/Quilt mods)",
    answer: `The configs for a Fabric/Quilt mod are located in your <code>.minecraft</code> or server folder in a subfolder called <code>config</code>.
            In there you can see a folder that is named like the mods ID. This folder contains the configs for the server and client.`,
  },
  {
    question: "I found a bug, how do I report it?",
    answer: `Please report any bugs on the GitHub page of the mod.
            Please describe your problem in detail and provide screenshots if possible.
            It is very important that you always provide log files, even if your game didn't crash, this helps a lot narrowing down the source of the problem.`,
  },
  {
    question: "How can I contact you?",
    answer: `If you want to report a bug or submit a translation, please use the respective issue tracker on GitHub.
    For questions or help, please check the mod description page.
    If theres no way to get help on the mod page and its really important,
    you can <a href="https://www.curseforge.com/members/henkelmax" target="_blank">DM me on CurseForge</a>,
    but please avoid this if possible, as my time is very limited.
    `,
  },
  {
    question: "Where can I see crafting recipes?",
    answer: `For recipes use <a href="https://modrinth.com/mod/jei" target="_blank">JEI</a>.`,
  },
  {
    question:
      "I translated your mod into another language. How do I send it to you?",
    answer: `Just open a ticket on the mods GitHub issue tracker and use the template <code>Translation</code>.`,
  },
  {
    question: "Do I need to install this mod on the client or the server?",
    answer:
      "All mods need to be installed on the client and the server unless stated otherwise. Always make sure, you are using the same version on both sides!",
  },
  {
    question: "What does 'client' mean?",
    answer: "In the context of Minecraft, client means your game.",
  },
]);
</script>
