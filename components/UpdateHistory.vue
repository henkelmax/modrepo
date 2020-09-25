<template>
  <v-card outlined class="pa-2 mt-3">
    <v-list two-line>
      <div v-for="(version, index) in versions" :key="index">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>[{{ version.gameVersion }}] {{ version.version }}</v-list-item-title>
            <v-list-item-subtitle class="text--primary">
              <v-chip
                v-for="(tag, i) in version.tags"
                :key="'tag' + i"
                x-small
                class="mr-1 white--text"
                color="green"
              >{{ translateTag(tag) }}</v-chip>
            </v-list-item-subtitle>
            <v-list-item-subtitle
              v-for="(message, i) in version.updateMessages"
              :key="'msg' + i"
              v-text="message"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-action-text v-text="$moment(version.publishDate).fromNow()"></v-list-item-action-text>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <div v-on="on">
                  <v-icon v-if="version.releaseType==='alpha'" color="red">mdi-alpha-a-circle</v-icon>
                  <v-icon v-else-if="version.releaseType==='beta'" color="blue">mdi-alpha-b-circle</v-icon>
                  <v-icon v-else color="green">mdi-alpha-r-circle</v-icon>
                </div>
              </template>
              <span>{{ translateReleaseType(version.releaseType) }}</span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>

        <v-divider v-if="index + 1 < versions.length"></v-divider>
      </div>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ["modid"],
  data() {
    return {
      versions: [],
    };
  },
  components: {},
  created() {
    this.$axios
      .get(`https://update.maxhenkel.de/updates/${this.modid}?amount=16`)
      .then((result) => {
        this.versions = result.data;
      })
      .catch((err) => {});
  },
};
</script>
