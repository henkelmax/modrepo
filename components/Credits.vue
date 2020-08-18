<template>
  <v-card outlined class="pa-2 mt-3">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">{{ $t("name") }}</th>
            <th class="text-left">{{ $t("license") }}</th>
            <th class="text-left">{{ $t("by") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in credits" :key="index">
            <td class="pointer" @click="open(item.element ? item.element.link : undefined)">
              <div v-if="item.element">
                <v-icon v-if="item.element.link" size="15">mdi-open-in-new</v-icon>
                {{ item.element.name }}
              </div>
            </td>
            <td class="pointer" @click="open(item.license ? item.license.link : undefined)">
              <div v-if="item.license">
                <v-icon v-if="item.license.link" size="15">mdi-open-in-new</v-icon>
                {{ item.license.name }}
              </div>
            </td>
            <td class="pointer" @click="open(item.name ? item.name.link : undefined)">
              <div v-if="item.name">
                <v-icon v-if="item.name.link" size="15">mdi-open-in-new</v-icon>
                {{ item.name.name }}
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  props: ["credits"],
  methods: {
    open(link) {
      if (link) {
        window.open(link);
      }
    },
  },
};
</script>

<i18n>
{
  "en": {
    "name": "Name",
    "license": "License",
    "by": "By"
  },
  "de": {
    "name": "Name",
    "license": "Lizenz",
    "by": "Von"
  }
}
</i18n>
