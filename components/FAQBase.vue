<template>
  <v-expansion-panels accordion multiple hover>
    <v-expansion-panel v-for="(item,i) in faq" :key="i">
      <v-expansion-panel-header class="headline">{{ item.question }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <span v-html="item.answer"></span>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: ["faq"],
  data() {
    return {
      //
    };
  },
  components: {},
};
</script>

<style>
.v-expansion-panel::before {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
}
</style>
