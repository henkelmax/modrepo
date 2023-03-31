<template>
  <div>
    <form class="searchboxform">
      <input
        class="searchbox"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        enterkeyhint="go"
        spellcheck="false"
        autofocus="true"
        placeholder="Search hosters"
        type="search"
        v-model="search"
      />
    </form>
    <br />
    <div v-if="filteredHosters.length > 0">
      <div v-for="(hoster, i) in filteredHosters" :key="i">
        <a :href="`server_hosting/${hoster.id}`">{{ hoster.name }}</a>
      </div>
    </div>
    <div v-else>No results found</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  index: {
    type: Array,
    required: true,
  },
});

const search = ref("");
const hosters = ref(props.index.sort((a, b) => a.name.localeCompare(b.name)));

const filteredHosters = computed(() => {
  if (search.value === "") {
    return hosters.value;
  }
  return hosters.value.filter((hoster) => {
    return hoster.name.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<style scoped>
.searchboxform {
  border: 2px solid #059669;
  align-items: center;
  background-color: #313136;
  border-radius: 4px;
  display: flex;
  height: 56px;
  margin: 0;
  padding: 0 12px;
  position: relative;
  width: 100%;
}
.searchbox {
  appearance: none;
  background: transparent;
  border: 0;
  color: #fff;
  flex: 1;
  font: inherit;
  font-size: 1.2em;
  height: 100%;
  outline: none;
  padding: 0 0 0 8px;
  width: 80%;
}
</style>