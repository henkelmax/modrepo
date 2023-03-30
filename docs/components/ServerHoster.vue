<template>
  <div>
    <h1>Setup Guide for {{ name }}</h1>

    <!-- Credits -->
    <div v-if="credits && credits.length > 0">
      <span class="credit credit-by">Submitted by </span>
      <template v-for="(credit, i) in credits" :key="i">
        <span class="credit">
          <a
            v-if="credit.url"
            :href="credit.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ credit.name }}
          </a>
          <span v-else>{{ credit.name }}</span>
        </span>
        <span class="credit" v-if="i < credits.length - 1">, </span>
      </template>
    </div>
    <br />

    <!-- Description -->
    <div v-if="description" v-html="description" />

    <!-- Steps -->
    <div v-if="steps && steps.length > 0">
      <h3>Setup Instructions</h3>
      <ul>
        <li v-for="(step, i) in steps" :key="i" v-html="step"></li>
      </ul>
    </div>

    <!-- Official guide -->
    <div v-if="officialGuideUrl">
      <br />
      This hoster provides an official setup guide on their website:
      <br />
      <br />
      <a
        :href="officialGuideUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
      >
        View Official Guide &#x1F855;
      </a>
    </div>

    <!-- Guide -->
    <div v-if="guideUrl">
      <br />
      <a
        :href="guideUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
      >
        View Guide &#x1F855;
      </a>
    </div>
    <br />

    <!-- Footer -->
    <hr />
    <div class="disclaimer">
      <span v-if="lastUpdate"> Last update on {{ lastUpdate }}. </span>
      <span>
        <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer">
          Visit the hoster website &#x1F855;
        </a>
      </span>
      <br />
      <span>These guides are submitted by the community. </span>
      <span>
        We do not take responsibility for the accuracy of the provided
        information.
      </span>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from "vue";

const props = defineProps({
  hoster: {
    type: Object,
    required: true,
  },
});
const name = ref(props.hoster.name);
const url = ref(props.hoster.url);

const steps = ref(props.hoster.steps);
const description = ref(
  Array.isArray(props.hoster.description)
    ? props.hoster.description.join("\n")
    : props.hoster.description
);
const officialGuideUrl = ref(props.hoster.officialGuideUrl);
const guideUrl = ref(props.hoster.guideUrl);
const credits = ref(props.hoster.credits);
const lastUpdate = ref(formatDate(props.hoster.lastUpdate));

function formatDate(dateString) {
  if (!dateString) {
    return null;
  }
  let date = new Date(Date.parse(dateString));
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  let year = String(date.getFullYear());
  return [day, month, year].join(".");
}
</script>

<style scoped>
.disclaimer {
  margin-top: 20px;
  font-size: 14px;
  color: #aaa;
}

.credit {
  font-size: 16px;
  color: #aaa;
}
.credit-by {
  margin-left: 20px;
}

.link {
  display: block;
  border: 1px solid #666;
  border-radius: 8px;
  padding: 11px 16px 13px;
  width: 80%;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  user-select: none;
}
.link:hover {
  background-color: #333;
}
</style>