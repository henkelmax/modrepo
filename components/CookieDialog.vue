<template>
  <v-container>
    <v-dialog persistent scrollable v-model="active" max-width="500">
      <v-card>
        <v-card-title class="headline">Accept Cookies and LocalStorage</v-card-title>
        <v-card-text>
          To perform this action you need to accept the use of Cookies and the LocalStorage.
          To find out more about our use of cookies and the LocalStorage, please see our
          <nuxt-link to="/privacy">Privacy Policy</nuxt-link>.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="submit()">Accept</v-btn>
          <v-btn text @click="cancel()">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    active: false,
    resolve: null,
    reject: null,
  }),
  methods: {
    open() {
      this.active = true;
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    submit() {
      this.active = false;
      this.resolve(true);
    },
    cancel() {
      this.active = false;
      this.resolve(false);
    },
  },
};
</script>
