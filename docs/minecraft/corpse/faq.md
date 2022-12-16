---
titleTemplate: Corpse
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
    question: "I can't find the corpse after I died.",
    answer:
      "The corpse is able to float in water and can get washed away.",
  },
  {
    question: "How can I get rid of the beacon on my death location?",
    answer:
      "There is no beacon in this mod. This is most likely from a minimap mod.",
  },
];
</script>
