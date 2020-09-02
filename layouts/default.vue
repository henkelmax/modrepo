<template>
  <v-app>
    <!-- Desktop Toolbar -->
    <v-app-bar fixed app v-if="isDesktop()">
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
      <client-only>
        <v-icon class="mr-3">mdi-white-balance-sunny</v-icon>
        <div>
          <v-switch hide-details v-model="$global.darkMode" style="padding: 0px;"></v-switch>
        </div>
        <v-icon style="transform: rotate(180deg);">mdi-brightness-2</v-icon>
      </client-only>
    </v-app-bar>
    <!-- End Desktop Toolbar -->

    <!-- Mobile Toolbar -->
    <v-app-bar app v-if="!isDesktop()">
      <v-app-bar-nav-icon @click.stop="drawer = true"></v-app-bar-nav-icon>
      <v-icon class="mr-3 pointer" @click="push('/')">mdi-wrench</v-icon>
      <v-toolbar-title class="headline pointer" @click="push('/')">{{ title }}</v-toolbar-title>
    </v-app-bar>
    <!-- End Mobile Toolbar -->

    <!-- Mobile Drawer -->
    <v-navigation-drawer app v-if="!isDesktop()" v-model="drawer">
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
      <v-switch class="pl-4" hide-details v-model="$global.darkMode" label="Dark Mode"></v-switch>
    </v-navigation-drawer>
    <!-- End Mobile Drawer -->

    <!-- Content -->
    <v-main>
      <nuxt />
      <CookieDialog ref="cookieDialog" />
    </v-main>
    <!-- End Content -->

    <!-- Footer -->
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <span v-if="isDesktop()" class="mr-2 pointer" @click="push('/privacy')">Privacy</span>
      <span v-if="isDesktop()" class="mr-4 pointer" @click="push('/imprint')">Imprint</span>
      <div class="mr-2">&copy; {{ new Date().getFullYear() }} Max Henkel</div>
    </v-footer>
    <!-- End Footer -->
  </v-app>
</template>

<script>
import CookieDialog from "~/components/CookieDialog.vue";

export default {
  components: {
    CookieDialog,
  },
  data() {
    return {
      drawer: true,
      title: "ModRepo",
      items: [
        { title: "Minecraft Mods", path: "/minecraft" },
        { title: "Activity", path: "/minecraft/activity" },
        { title: "Privacy", path: "/privacy", mobileOnly: true },
        { title: "Imprint", path: "/imprint", mobileOnly: true },
      ],
    };
  },
  mounted() {
    this.$global.cookieDialog = this.$refs.cookieDialog;
  },
  methods: {
    isDesktop() {
      return !this.mounted || !this.$vuetify.breakpoint.smAndDown;
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
