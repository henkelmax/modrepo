<template>
  <v-card outlined class="pa-2 mt-3">
    <template v-if="!!generalFaq">
      <h1 class="display-1 text-center mt-4 mb-2">General Questions</h1>
      <FAQBase :faq="generalFaq" />
    </template>
    <template v-if="!!faq">
      <h1 class="display-1 text-center mt-4 mb-2">Mod Specific Questions</h1>
      <FAQBase :faq="faq" />
    </template>
  </v-card>
</template>

<script>
import FAQBase from "~/components/FAQBase.vue";

export default {
  props: ["generalFaq", "faq"],
  data() {
    return {
      //
    };
  },
  components: {
    FAQBase,
  },
};
</script>
