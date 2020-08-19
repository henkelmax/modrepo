import Vue from 'vue';
import { ObserveVisibility } from 'vue-observe-visibility';

Vue.directive('observe-visibility', ObserveVisibility);

Vue.mixin({
  data() {
    return {
      darkMode: null,
      mounted: false
    };
  },
  mounted() {
    this.mounted = true;
    if (process.browser) {
      this.darkMode = this.isDarkMode();
      this.$vuetify.theme.dark = this.darkMode;
    }
  },
  watch: {
    darkMode(dark) {
      if (process.browser) {
        localStorage.dark = dark;
        this.$vuetify.theme.dark = dark;
        function update(vue) {
          vue.darkMode = dark;
          for (let child of vue.$children) {
            update(child);
          }
        }
        update(this.$root);
      }
    }
  },
  methods: {
    push(path) {
      if (path !== this.$router.currentRoute.path) {
        this.$router.push(path);
      }
      window.scrollTo(0, 0);
    },
    isDarkMode() {
      if (localStorage.dark) {
        return JSON.parse(localStorage.dark);
      } else {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    },
    translateReleaseType(type) {
      switch (type) {
        case "alpha":
          return "Alpha";
        case "beta":
          return "Beta";
        case "release":
          return "Release";
        default:
          return type;
      }
    },
    translateTag(tag) {
      switch (tag) {
        case "recommended":
          return "Recommended";
        default:
          return tag;
      }
    }
  }
});
