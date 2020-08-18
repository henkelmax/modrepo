<template>
  <v-container grid-list-md class="mt-4">
    <v-row justify="center">
      <v-col lg="10" xl="8" cols="12">
        <v-breadcrumbs large :items="items" style="padding-left: 0px;">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              href="_"
              :disabled="item.disabled"
              @click.prevent="$eventBus.$emit('push', item.path)"
            >{{ item.text }}</v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
        <div class="d-flex flex-no-wrap">
          <v-avatar class="ma-3" size="100" tile>
            <v-img :src="logo"></v-img>
          </v-avatar>
          <div>
            <v-card-title class="py-6">
              <h1 v-if="$vuetify.breakpoint.lgAndUp" class="font-weight-bold display-3">{{ title }}</h1>
              <h1 v-else class="font-weight-bold headline">{{ title }}</h1>
            </v-card-title>
            <v-card-subtitle>
              <template v-if="description">
                <div class="mb-4">
                  {{ description }}
                  <br />
                </div>
              </template>
              <slot name="versions"></slot>
            </v-card-subtitle>
          </div>
        </div>

        <v-tabs
          v-model="tab"
          color="light-blue accent-4"
          background-color="transparent"
          show-arrows
        >
          <v-tab href="#overview">{{ $t("overview") }}</v-tab>
          <v-tab v-if="!!$slots.images || !!images" href="#images">{{ $t("images") }}</v-tab>
          <v-tab v-if="!!$slots.update_history" href="#update_history">{{ $t("update_history") }}</v-tab>
          <v-tab v-if="!!$slots.wiki" href="#wiki">{{ $t("wiki") }}</v-tab>
          <v-tab v-if="!!$slots.faq || !!faq || !!generalFaq" href="#faq">{{ $t("faq") }}</v-tab>
          <v-tab v-if="!!$slots.credits || !!credits" href="#credits">{{ $t("credits") }}</v-tab>
          <v-tab v-if="issueslink" href="#issues">
            <div
              class="pa-1 pt-3"
              @click.prevent.stop="open(issueslink)"
              style="width: 100%; height: 100%;"
            >
              <v-icon class="mr-2">mdi-open-in-new</v-icon>
              {{ $t("issues") }}
            </div>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" style="background-color: transparent;" touchless>
          <v-tab-item value="overview">
            <v-divider></v-divider>
            <SplitPanel>
              <slot slot="primary" name="overview">
                <Empty />
              </slot>
              <template slot="secondary">
                <slot name="sidebar"></slot>

                <v-container v-if="downloadlink">
                  <v-btn
                    block
                    outlined
                    color="light-blue accent-4"
                    :href="downloadlink"
                    target="_blank"
                  >{{ $t("download") }}</v-btn>
                </v-container>
              </template>
            </SplitPanel>
          </v-tab-item>
          <v-tab-item v-if="!!$slots.images || !!images" value="images">
            <v-divider></v-divider>
            <slot name="images">
              <Images v-if="!!images" :images="images" />
              <Empty v-else />
            </slot>
          </v-tab-item>
          <v-tab-item v-if="!!$slots.update_history" value="update_history">
            <v-divider></v-divider>
            <slot name="update_history">
              <Empty />
            </slot>
          </v-tab-item>
          <v-tab-item v-if="!!$slots.wiki" value="wiki">
            <v-divider></v-divider>
            <slot name="wiki">
              <Empty />
            </slot>
          </v-tab-item>
          <v-tab-item v-if="!!$slots.faq || !!faq || !!generalFaq" value="faq">
            <v-divider></v-divider>
            <slot name="faq">
              <FAQ v-if="!!faq || !!generalFaq" :generalFaq="generalFaq" :faq="faq" />
              <Empty v-else />
            </slot>
          </v-tab-item>
          <v-tab-item v-if="!!$slots.credits || !!credits" value="credits">
            <v-divider></v-divider>
            <slot name="credits">
              <Credits v-if="!!credits" :credits="credits" />
              <Empty v-else />
            </slot>
          </v-tab-item>
          <v-tab-item v-if="issueslink" value="issues"></v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Empty from "~/components/Empty.vue";
import Images from "~/components/Images.vue";
import FAQ from "~/components/FAQ.vue";
import Credits from "~/components/Credits.vue";
import SplitPanel from "~/components/SplitPanel.vue";

export default {
  props: [
    "title",
    "description",
    "logo",
    "id",
    "downloadlink",
    "issueslink",
    "images",
    "faq",
    "generalFaq",
    "credits",
    "parentPath",
    "parentTitle",
  ],
  data() {
    return {
      tab: "overview",
      items: [
        {
          text: "ModRepo",
          disabled: false,
          path: "/",
        },
        {
          text: this.parentTitle,
          disabled: false,
          path: this.parentPath,
        },
        {
          text: this.title,
          disabled: true,
        },
      ],
    };
  },
  components: {
    Empty,
    Images,
    SplitPanel,
    FAQ,
    Credits,
  },
  mounted() {
    this.tab = this.$route.params.tabname;
  },
  methods: {
    open(link) {
      window.open(link);
    },
  },
  watch: {
    tab(tab) {
      history.pushState({}, "", tab);
    },
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
          content: this.description ? this.description : "",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.logo,
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: this.logo,
        },
        {
          hid: "description",
          name: "description",
          content: this.description ? this.description : "",
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
          hid: "itemprop:image",
          itemprop: "image",
          content: this.logo,
        },
        {
          hid: "itemprop:description",
          itemprop: "description",
          content: this.description ? this.description : "",
        },
      ],
    };
  },
};
</script>

<i18n>
{
  "en": {
    "overview": "Overview",
    "images": "Images",
    "update_history": "Update History",
    "wiki": "Wiki",
    "faq": "FAQ",
    "issues": "Issues",
    "download": "Download",
    "credits": "Credits"
  },
  "de": {
    "overview": "Übersicht",
    "images": "Bilder",
    "update_history": "Updateverlauf",
    "wiki": "Wiki",
    "faq": "FAQ",
    "issues": "Issues",
    "download": "Herunterladen",
    "credits": "Credits"
  }
}
</i18n>
