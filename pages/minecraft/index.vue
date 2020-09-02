<template>
  <Overview />
</template>

<script>
import Overview from "~/components/Overview.vue";

export default {
  components: {
    Overview,
  },
  data() {
    return {
      title: "Mod Overview",
      description: "",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: this.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title,
        },
        {
          hid: "itemprop:name",
          itemprop: "name",
          content: this.title,
        },
        {
          hid: "itemprop:description",
          itemprop: "description",
          content: this.description,
        },
      ],
    };
  },
};
</script>
