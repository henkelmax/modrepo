<template>
  <v-app>
    <!-- Desktop Toolbar -->
    <v-app-bar fixed app v-if="$device.isDesktopOrTablet">
      <v-icon class="mr-3 pointer" @click="push('/')">mdi-wrench</v-icon>
      <v-toolbar-title class="headline mr-4 pointer" @click="push('/')">{{ title }}</v-toolbar-title>
      <v-btn
        v-for="(item, i) in items.filter(e => !e.mobileOnly)"
        :key="i"
        class="ml-0 case-sensitive subtitle-1"
        rounded
        text
        @click="push(item.path)"
      >
        <span>{{ item.title }}</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-icon class="mr-3">mdi-white-balance-sunny</v-icon>
      <div>
        <v-switch hide-details v-model="dark" style="padding: 0px;"></v-switch>
      </div>
      <v-icon style="transform: rotate(180deg);">mdi-brightness-2</v-icon>
    </v-app-bar>
    <!-- End Desktop Toolbar -->

    <!-- Mobile Toolbar -->
    <v-app-bar app v-if="!$device.isDesktopOrTablet">
      <v-app-bar-nav-icon @click.stop="drawer = true"></v-app-bar-nav-icon>
      <v-icon class="mr-3 pointer" @click="push('/')">mdi-wrench</v-icon>
      <v-toolbar-title class="headline pointer" @click="push('/')">{{ title }}</v-toolbar-title>
    </v-app-bar>
    <!-- End Mobile Toolbar -->

    <!-- Mobile Drawer -->
    <v-navigation-drawer app v-if="!$device.isDesktopOrTablet" v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline" @click="drawer = false; push('/')">{{ title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list dense nav class="pt-0">
        <v-divider></v-divider>
        <template v-for="(item, i) in items">
          <v-list-item :key="item.title" @click="push(item.path); drawer = false">
            <v-list-item-content>
              <div class="headline font-weight-light pl-2">{{ item.title }}</div>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="i"></v-divider>
        </template>
      </v-list>
      <v-switch class="pl-4" hide-details v-model="dark" label="Dark Mode"></v-switch>
    </v-navigation-drawer>
    <!-- End Mobile Drawer -->

    <!-- Content -->
    <v-main>
      <nuxt />
    </v-main>
    <!-- End Content -->

    <!-- Footer -->
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <v-menu top>
        <template v-slot:activator="{ on }">
          <div
            class="mr-4"
            style="width: 28px; height: 21px; display: inline-block; vertical-align: middle;"
          >
            <img class="pointer" v-on="on" :src="`data:image/gif;base64,${flag}`" />
          </div>
          <span class="mr-2 pointer" v-on="on">{{ languageName }}</span>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in langs" :key="i" @click="language=item.value">
            <img class="mr-2" :src="`data:image/gif;base64,${item.flag}`" />
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <span v-if="$device.isDesktopOrTablet" class="mr-2 pointer" @click="push('/privacy')">Privacy</span>

      <span v-if="$device.isDesktopOrTablet" class="mr-4 pointer" @click="push('/imprint')">Imprint</span>
      <div class="mr-2">&copy; {{ new Date().getFullYear() }} Max Henkel</div>
    </v-footer>
    <!-- End Footer -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
      drawer: true,
      title: "ModRepo",
      language: "en",
      items: [
        { title: "Minecraft Mods", path: "/minecraft" },
        { title: "Activity", path: "/minecraft/activity" },
        { title: "Privacy", path: "/privacy", mobileOnly: true },
        { title: "Imprint", path: "/imprint", mobileOnly: true },
      ],
      langs: [
        {
          name: "English",
          value: "en",
          flag:
            "iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApQAAAKUBcMTeVQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAL+SURBVEiJvdPdT5NnHMbx7/08VSd2JbSI86WlKrMIropVNCIO8DUqLNsQ4xYJGOM/4l+hW+LMIDoXyszCIOAL4GTlwICvKExQCp20UB4Gjr48ve+devp40Ov8l0+uK/kJ9+4mtX5dHuHILHm5dqRSLPz7Hs/GtUTexQH4rCCPqX9myXc6SCbTLL5fxr0hn9l3c/xgj2AlNoBSXyFxY4mC/FykVJhmhlKfh9jcAgAlPg/zC0usdeWSSptIpdhRXMi96Lzc3Nw4YAUU63eeVytsOvW1B7ndFQKg7vg+2joG8G/3kjZNRkbDNNRVEvxjAE3TOH20nGDHQ3RdZ3zwR0sNhbf8gjr31SGu/3qPgL8IKSVDz8ZpajhMa3svmtA4U1tBS1sv5WXbSCRSPBl5Q1PDYW4G+2Twy3XPLTcEuHDuKC1t9xFC8N3XVVy72cP+gI9kMs3Qs3Eufn+c67/cwWbTOVtXyU+37rJCoG7t/OStJbBwb7NqqK2kpe0+AX8Rppnh8YsJGs/UcOO3fjRNUH+qgtZgL/sDPhaXlnn+apLz9dW0d4YYfXjFiofYsKtRrVxp49ihMu48GEYIQc1BPz39w2zbspFUKs1EeIYTVQG6+4bQdY3qii/o6R9GmlKGLp99YAn07GlW+3b7GHs9jd2+mkxG8t9yAt/WTTx9+QaBoNTnYWw8Qq5jDYlkiuVEiuKiTTx6NMLVnGlLDW2mmSEaM3A6P2XeWALA5XQQnTXIWb0K08wwEzNwOR3EjUWUgnyng5mYQUbTVU1ft2EJVEoRnTPYXuTmbTiKlAqvu4CXf0/hsOcgEMTiC5R87mFyOoppSrzuAl69nkJJpRLR6JgVUHj2NKvTR/bS3vkXO4oLkVLxYnSSb04e4PfuQTRd40R1gNtdIfwlXtLpDCNjYb49dYDOrhBX11ibVNxo7Ri1dPFBdF1TtVVlliYVSsr4x4IfE3G38ojKKhjp6OzNKqiUym7DwaZLE9kEbatcrsVsglmf1DZx7ec/swlm/S3+B2DtTJ8frilLAAAAAElFTkSuQmCC",
        } /*,
        {
          name: "Deutsch",
          value: "de",
          flag:
            "iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAM0lEQVRIiWNkYGD4z0BHwERPy0YtHLWQLMByl84WDv8gHbVw6FvI+P/caG0xauGohagAAADwBNMZeaZHAAAAAElFTkSuQmCC",
        }*/,
      ],
    };
  },
  computed: {
    flag() {
      return this.langs.find((e) => e.value === this.language).flag;
    },
    languageName() {
      return this.langs.find((e) => e.value === this.language).name;
    },
  },
  created() {
    if (process.browser) {
      this.dark = JSON.parse(localStorage.dark ? localStorage.dark : false);
      this.$vuetify.theme.dark = this.dark;
    }
  },
  watch: {
    dark(dark) {
      if (process.browser) {
        localStorage.dark = dark;
        this.$vuetify.theme.dark = dark;
      }
    },
  },
};
</script>

<style>
.case-sensitive {
  text-transform: none !important;
}

.pointer {
  cursor: pointer;
}
</style>
