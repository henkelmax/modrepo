---
titleTemplate: Ultimate Car Mod
aside: false
---

# FAQ

<br/>
<br/>

<FAQ :faq="faq"/>

# General FAQ

<br/>
<br/>

<GeneralFAQ/>

<script setup>
const faq = [
  {
    question:
      "I can't find or craft the windshield / axle / control unit",
    answer: `These items were removed in newer versions (1.14+) of this mod. For recipes use <a href="https://www.curseforge.com/minecraft/mc-mods/jei" target="_blank">JEI</a>.`,
  },
  {
    question: "How do I fill the tank container?",
    answer: `You can fill the tank container by right-clicking it with a bucket.`,
  },
  {
    question: "Is version 1.12.2 or lower still supported?",
    answer: `No. I moved on to newer Minecraft versions. These versions won't get any bug fix or feature updates.`,
  },
];
</script>
