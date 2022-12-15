<template>
  <table>
    <tr>
      <th class="text-left">Name</th>
      <th class="text-left">License</th>
      <th class="text-left">By</th>
    </tr>
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
      <td>
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
  </table>
</template>
  
<script setup>
defineProps({
  credits: {
    type: Array,
    required: true,
  },
});
</script>