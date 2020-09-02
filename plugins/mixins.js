import Vue from 'vue';
import { ObserveVisibility } from 'vue-observe-visibility';

Vue.directive('observe-visibility', ObserveVisibility);

Vue.prototype.$global = new Vue({
  data() {
    return {
      darkMode: null,
      cookieDialog: null
    };
  },
  created() {
    if (process.browser) {
      this.darkMode = this.isDarkMode();
    }
  },
  watch: {
    darkMode(dark) {
      if (process.browser && this.cookieDialog) {
        if (this.isCookiesAllowed()) {
          localStorage.dark = dark;
        } else {
          this.cookieDialog.open().then((result) => {
            if (result) {
              localStorage.cookies = true;
              localStorage.dark = dark;
            }
          });
        }
      }
    }
  },
  methods: {
    isDarkMode() {
      if (localStorage.dark) {
        return JSON.parse(localStorage.dark);
      } else {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    },
    isCookiesAllowed() {
      if (localStorage.cookies) {
        return JSON.parse(localStorage.cookies);
      } else {
        return false;
      }
    }
  }
});

Vue.mixin({
  data() {
    return {
      mounted: false
    };
  },
  mounted() {
    this.mounted = true;
  },
  beforeUpdate() {
    this.$vuetify.theme.dark = this.$global.darkMode;
  },
  methods: {
    push(path) {
      if (path !== this.$router.currentRoute.path) {
        this.$router.push(path);
      }
      window.scrollTo(0, 0);
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
