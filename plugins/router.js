export default {
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
}
