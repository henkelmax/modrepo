---
titleTemplate: Simple Voice Chat
prev: false
next: false
---

# Get a Support Key

Click the button below to get your support key for the [Discord](https://discord.gg/4dH2zwTmyX).

<button class="button" @click="clickSupportKey">Generate a support key</button>


## Why do I need to do this?

Our support team is very small and we want to avoid as much interaction as possible,
so we require everyone wanting help to at least try to figure out their issue themselves.
The support key itself is to confirm that the [wiki](installation) and the [FAQ](../faq) was actually read.

<Popup title="Please read the wiki and FAQ before requesting a support key!" :showPopup="showNotReadPopup" @close="showNotReadPopup = false">
    Please don't request support if you didn't read the wiki and the FAQ!
    <br/>
    To generate a support key, you must have visited at least the following pages:
    <ul>
        <li><a href="../faq">FAQ</a></li>
        <li><a href="installation">Installation</a></li>
        <li><a href="setup">Setup</a></li>
        <li><a href="troubleshooting">Troubleshooting Problems</a></li>
        <li><a href="configuration">Configuration</a></li>
    </ul>
</Popup>

<Popup title="Did you read the wiki and FAQ?" :acceptButton="true" :showPopup="showReadWikiPopup" @accept="showReadWikiPopup = false; showSupportKeyPopup = true" @close="showReadWikiPopup = false">
    By clicking <b>Accept</b>, you confirm that you really read the wiki and the FAQ and your problem is not listed here.
</Popup>

<Popup title="Your Support Key!" :showPopup="showSupportKeyPopup" @close="showSupportKeyPopup = false">
    Your support key is <code>{{ supportKey }}</code>.
    <br />
    Please provide this key in your support thread on the
    <a href="https://discord.gg/4dH2zwTmyX">Discord server</a>.
</Popup>

<script setup>
    import { ref } from 'vue';

    let supportKey = ref(generateSupportKey());
    let showNotReadPopup = ref(false);
    let showReadWikiPopup = ref(false);
    let showSupportKeyPopup = ref(false);

    function clickSupportKey() {
        if( hasReadWiki() ){
            showReadWikiPopup.value = true;
        } else{
            showNotReadPopup.value = true;
        }
    }

    function hasReadWiki() {
        const visitedTabs = JSON.parse(localStorage.visitedTabs || '[]');
        return visitedTabs.includes("setup") && visitedTabs.includes("troubleshooting") && visitedTabs.includes("faq");
    }

    function generateSupportKey() {
        let numbers = [];
        let sum = 0;
        while (sum <= 60) {
          numbers.push(getRandomInt(1, 9));
          sum = numbers.reduce((e1, e2) => e1 + e2, 0);
        }
        let rest = 69 - sum;
        if (rest > 0) {
          numbers.push(rest);
        }
        return `S-${numbers.join('')}`;
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
</script>

<style scoped>
.button {
    border-radius: 8px;
    background-color: #42b883;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    color: #fff;
}

.button:hover {
    background-color: #3da170;
}
</style>