---
titleTemplate: Gravestone Mod
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
    question: "I can't find the gravestone after I died.",
    answer:
      "If you died in a wall, there is a high chance that the gravestone is placed at the next free spot above your death location.",
  },
  {
    question: "How can I get rid of the beacon on my death location?",
    answer:
      "There is no beacon in this mod. This is most likely from a minimap mod.",
  },
];
</script>
