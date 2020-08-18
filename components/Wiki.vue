<template>
  <SplitPanel v-observe-visibility="visibilityChanged">
    <template slot="primary">
      <v-tabs
        v-model="wikitab"
        fixed-tabs
        background-color="light-blue accent-4"
        color="white"
        dark
        show-arrows
      >
        <v-tab v-for="(tab, index) in tabs" :key="index" :href="'#' + tab.id">{{ tab.title }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="actualTab" style="background-color: transparent;" touchless>
        <v-tab-item v-for="(tab, index) in tabs" :key="index" :value="tab.id">
          <slot :name="tab.id"></slot>
        </v-tab-item>
      </v-tabs-items>
    </template>
    <template slot="secondary">
      <v-card-title>Table of contents</v-card-title>
      <v-list>
        <v-list-item-group>
          <template v-for="(tab, index) in tabs">
            <v-list-item :key="index" @click="wikitab = tab.id">
              <v-list-item-title>{{ tab.title }}</v-list-item-title>
            </v-list-item>
            <v-divider :key="'tab' + index" v-if="index + 1 < tabs.length"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </template>
  </SplitPanel>
</template>

<script>
import SplitPanel from "~/components/SplitPanel.vue";

export default {
  props: ["tabs"],
  data() {
    return {
      wikitab: null,
    };
  },
  components: {
    SplitPanel,
  },
  mounted() {
    this.wikitab = this.$route.query.t || null;
  },
  watch: {
    wikitab(wikitab) {
      if (wikitab) {
        this.fixTab();
      }
    },
  },
  computed: {
    actualTab() {
      return this.wikitab ? this.wikitab : this.tabs[0].id;
    },
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        if (this.wikitab) {
          this.fixTab();
        }
      }
    },
    fixTab() {
      this.$router.push({
        path: window.location.pathname,
        query: { ...this.$route.query, t: this.wikitab },
      });
    },
  },
};
</script>
