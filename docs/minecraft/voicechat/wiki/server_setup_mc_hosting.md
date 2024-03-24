---
titleTemplate: Simple Voice Chat
aside: false
prev:
  text: 'Server Setup'
  link: './server_setup'
next: false
---

# Setting Up The Server - Minecraft Hosting Provider

If you are hosting your server with a Minecraft hosting provider, please look if a guide for your hoster exists in the list below.

::: warning NOTE
If no guide exists, please ask the support of your hoster for help.

Please don't ask us for help before you contacted your hoster!
:::

::: danger WARNING
Do **not** follow guides that are not for your specific hoster!
This will most likely break your setup!
:::

## Guides for Minecraft Hosting Providers

<ServerHosting :index="index"></ServerHosting>

---

*[Want to submit a guide?](submit_hoster)*

<script setup>
import { ref } from 'vue'
import { data } from './server_hosting/search_index.data'

const index = ref(data)
</script>

<ClientOnly>
    <WikiTracker name="setup"/>
</ClientOnly>