---
titleTemplate: Simple Voice Chat
---

# Setting Up The Server - Minecraft Hosting Provider

If you are hosting your server with a Minecraft hosting provider, please look if a guide for your hoster exists in the list below.

::: danger NOTE
**If no guide exists, please ask the support of your hoster for help.**

**Please don't ask us for help before you contacted your hoster!**
:::

## Guides for Minecraft Hosting Providers

<ServerHosting :index="index"></ServerHosting>

<script setup>
import { ref } from 'vue'
import { data } from './server_hosting/search_index.data'

const index = ref(data)
</script>

<ClientOnly>
    <WikiTracker name="setup"/>
</ClientOnly>