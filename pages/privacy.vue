<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex cols="12">
        <v-card>
          <v-card-text>
            <div :class="{ privacyDark: dark, privacy: !dark }">
              <h1>Datenschutzerklärung</h1>
              <br />
              <p>
                Auf dieser Website werden keine personenbezogenen Daten erhoben, gespeichert oder verarbeitet.
                <br />Diese Website wird über GitHub Pages gehostet. Mehr Informationen auf
                <a
                  href="https://docs.github.com/en/github/site-policy/global-privacy-practices"
                  target="_blank"
                  rel="nofollow noopener"
                >GitHub Global Privacy Practices</a>.
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
    };
  },
  mounted() {
    this.dark = this.$vuetify.theme.dark;
  },
};
</script>

<style scoped>
.privacy {
  color: black;
}
.privacyDark {
  color: white;
}
a {
  text-decoration: none;
}
</style>
