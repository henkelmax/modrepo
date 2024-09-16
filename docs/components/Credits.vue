<template>
  <table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th v-if="displayLicense" class="text-left">License</th>
        <th class="text-left">By</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in credits" :key="index">
        <td>
          <span v-if="item.element">
            <a v-if="item.element.link" :href="item.element.link" target="_blank">
              {{ item.element.name }}
            </a>
            <p v-else>
              {{ item.element.name }}
            </p>
          </span>
        </td>
        <td v-if="displayLicense">
          <span v-if="item.license">
            <a v-if="item.license.link" :href="item.license.link" target="_blank">
              {{ item.license.name }}
            </a>
            <p v-else>
              {{ item.license.name }}
            </p>
          </span>
        </td>
        <td>
          <span v-if="item.name">
            <a v-if="item.name.link" :href="item.name.link" target="_blank">
              {{ item.name.name }}
            </a>
            <p v-else>
              {{ item.name.name }}
            </p>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  credits: {
    type: Array,
    required: true,
  },
  displayLicense: {
    type: Boolean,
    default: true,
  },
});
</script>