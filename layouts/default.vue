<template>
  <v-app>
    <!-- Desktop Toolbar -->
    <v-app-bar fixed app v-if="!mobile">
      <v-icon class="mr-3 pointer" @click="$eventBus.$emit('push', '/')">mdi-wrench</v-icon>
      <v-toolbar-title
        class="headline mr-4 pointer"
        @click="$eventBus.$emit('push', '/')"
      >{{ $t("title") }}</v-toolbar-title>
      <v-btn
        v-for="(item, i) in items.filter(e => !e.mobileOnly)"
        :key="i"
        class="ml-0 case-sensitive subtitle-1"
        rounded
        text
        @click="$eventBus.$emit('push', item.path)"
      >
        <span>{{ $t(item.title) }}</span>
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
    <v-app-bar app v-if="mobile">
      <v-app-bar-nav-icon @click.stop="drawer = true"></v-app-bar-nav-icon>
      <v-icon class="mr-3 pointer" @click="$eventBus.$emit('push', '/')">mdi-wrench</v-icon>
      <v-toolbar-title
        class="headline pointer"
        @click="$eventBus.$emit('push', '/')"
      >{{ $t("title") }}</v-toolbar-title>
    </v-app-bar>
    <!-- End Mobile Toolbar -->

    <!-- Mobile Drawer -->
    <v-navigation-drawer app v-if="mobile" v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="headline"
            @click="drawer = false; $eventBus.$emit('push', '/')"
          >{{ $t("title") }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list dense nav class="pt-0">
        <v-divider></v-divider>
        <template v-for="(item, i) in items">
          <v-list-item
            :key="item.title"
            @click="$eventBus.$emit('push', item.path); drawer = false"
          >
            <v-list-item-content>
              <div class="headline font-weight-light pl-2">{{ $t(item.title) }}</div>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="i"></v-divider>
        </template>
      </v-list>
      <v-switch class="pl-4" hide-details v-model="dark" :label="$t('dark_mode')"></v-switch>
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

      <span
        v-if="!mobile"
        class="mr-2 pointer"
        @click="$eventBus.$emit('push', '/privacy')"
      >{{$t('privacy')}}</span>

      <span
        v-if="!mobile"
        class="mr-4 pointer"
        @click="$eventBus.$emit('push', '/imprint')"
      >{{$t('imprint')}}</span>
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
      items: [
        { title: "minecraft_mods", path: "/minecraft" },
        // { title: "onset_packages", path: "/onset" },
        { title: "activity", path: "/minecraft/activity" },
        { title: "privacy", path: "/privacy", mobileOnly: true },
        { title: "imprint", path: "/imprint", mobileOnly: true },
      ],
      language: "en",
      // https://github.com/lipis/flag-icon-css/tree/master/flags/4x3
      // 28 x 21
      langs: [
        /*{
          name: "English",
          value: "en-gb",
          flag:
            "iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACxklEQVRIicXTe0hTcRQH8O+uM1dErgjTQMGZhVbrj9IKmo+YldgbR0wlyQoprT+kosiZllIJEYE0KbIplNHT9A9xKWmozab43jTNV0Sl6TQDp9vu6Y/lauTyhloH7h/38Lvnw73nfnk872MEDpWcGI6UWAnqVgTb9dfVFeGGug3nMgu4jAGjTJfDa/kSTodnUh5urrieHAkmPkqCty9TMVfwJNSQGg5p/l0wo9V1mOfMx2zDk1B96g5I83PQJT8BYi1gdBFx0O85iqlgT4/FM4a65SdBLItVD7OwpvQeGJ87mTD1D0IXEQf97iN2cEd5Gm5e4gZPBwnDJCAA8A1JodxHVTTwtIQaN+8njVBMul2H6WtVLU3W+ISJ3jT0kOmLgTRCsd019q6XtI099Lm4nFqk0aQRiql5q5wM6ldELEtERCzL0v1CLfmHpRHPbLZYY8EDGABgf6aE58QAPJ7t3jw4PGUsBN6eIAs75XNEZB1J1rn892evct6PecjwW6/nzGUIvL04z+BphGJOwZ+tYv4l9l9A/lJZBOfDpiEDRsqq7XoLN6z9ux0SEecdOvxLRdxBRhSkQFZeBYzjJlvzW20z2mUJ0LoHoHmLDIMFaujaPzgcou/8BMsvsRitaUDbvnho3QPQEnwAA4UvcDu/EitDLwBjxglbwEe1TdQWeZw0QjE1rN9J/Q+KKP9ZDa3edpEU1wodBv+KsoR8Q1JI9fg1mc0W+pF2GinXUOv2g6QRiqlJIqP+52piBC7OtjdqDYuBsbsPouwM6JMVCM2pR1SSCrqOj9N+qs7eARw6nQc/aRpyn2hgYQmLgjfCv1gFv4JbcFowH12xp8BvlyVguLQSAh8viLIzUObihmhlCSfkT3BGVjHOJ4YjZm+gFQ4KxEhFDfjG7j6IlOkoEyybEcQFdg3ZBL4+WTGr0HQwPypJNSeQI/g7S6mvbgMAIVYAAAAASUVORK5CYII="
        },*/
        {
          name: "English",
          value: "en",
          flag:
            "iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApQAAAKUBcMTeVQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAL+SURBVEiJvdPdT5NnHMbx7/08VSd2JbSI86WlKrMIropVNCIO8DUqLNsQ4xYJGOM/4l+hW+LMIDoXyszCIOAL4GTlwICvKExQCp20UB4Gjr48ve+devp40Ov8l0+uK/kJ9+4mtX5dHuHILHm5dqRSLPz7Hs/GtUTexQH4rCCPqX9myXc6SCbTLL5fxr0hn9l3c/xgj2AlNoBSXyFxY4mC/FykVJhmhlKfh9jcAgAlPg/zC0usdeWSSptIpdhRXMi96Lzc3Nw4YAUU63eeVytsOvW1B7ndFQKg7vg+2joG8G/3kjZNRkbDNNRVEvxjAE3TOH20nGDHQ3RdZ3zwR0sNhbf8gjr31SGu/3qPgL8IKSVDz8ZpajhMa3svmtA4U1tBS1sv5WXbSCRSPBl5Q1PDYW4G+2Twy3XPLTcEuHDuKC1t9xFC8N3XVVy72cP+gI9kMs3Qs3Eufn+c67/cwWbTOVtXyU+37rJCoG7t/OStJbBwb7NqqK2kpe0+AX8Rppnh8YsJGs/UcOO3fjRNUH+qgtZgL/sDPhaXlnn+apLz9dW0d4YYfXjFiofYsKtRrVxp49ihMu48GEYIQc1BPz39w2zbspFUKs1EeIYTVQG6+4bQdY3qii/o6R9GmlKGLp99YAn07GlW+3b7GHs9jd2+mkxG8t9yAt/WTTx9+QaBoNTnYWw8Qq5jDYlkiuVEiuKiTTx6NMLVnGlLDW2mmSEaM3A6P2XeWALA5XQQnTXIWb0K08wwEzNwOR3EjUWUgnyng5mYQUbTVU1ft2EJVEoRnTPYXuTmbTiKlAqvu4CXf0/hsOcgEMTiC5R87mFyOoppSrzuAl69nkJJpRLR6JgVUHj2NKvTR/bS3vkXO4oLkVLxYnSSb04e4PfuQTRd40R1gNtdIfwlXtLpDCNjYb49dYDOrhBX11ibVNxo7Ri1dPFBdF1TtVVlliYVSsr4x4IfE3G38ojKKhjp6OzNKqiUym7DwaZLE9kEbatcrsVsglmf1DZx7ec/swlm/S3+B2DtTJ8frilLAAAAAElFTkSuQmCC",
        },
        {
          name: "Deutsch",
          value: "de",
          flag:
            "iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAM0lEQVRIiWNkYGD4z0BHwERPy0YtHLWQLMByl84WDv8gHbVw6FvI+P/caG0xauGohagAAADwBNMZeaZHAAAAAElFTkSuQmCC",
        },
      ],
    };
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
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
    this.language = this.$i18n.locale;
  },
  watch: {
    dark(dark) {
      if (process.browser) {
        localStorage.dark = dark;
        this.$vuetify.theme.dark = dark;
      }
    },
    language(language) {
      this.$moment.locale(language);
      this.$router.push({ path: this.switchLocalePath(language) });
    },
  },
};
</script>

<i18n>
{
  "en": {
    "title": "ModRepo",
    "privacy": "Privacy",
    "imprint": "Imprint",
    "dark_mode": "Dark Mode",
    "minecraft_mods": "Minecraft Mods",
    "onset_packages": "Onset Packages",
    "activity": "Activity"
  },
  "de": {
    "title": "ModRepo",
    "privacy": "Datenschutz",
    "imprint": "Impressum",
    "dark_mode": "Dunkler Modus",
    "minecraft_mods": "Minecraft Mods",
    "onset_packages": "Onset Packages",
    "activity": "Aktivitäten"
  }
}
</i18n>

<style>
.case-sensitive {
  text-transform: none !important;
}

.pointer {
  cursor: pointer;
}
</style>
