---
titleTemplate: Simple Voice Chat
aside: false
---

# Permissions

The following permission systems are supported by Simple Voice Chat:

| Mod Loader          | Permission System                                                                                                                                                                                               |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fabric              | [lucko/fabric-permissions-api](https://github.com/lucko/fabric-permissions-api) <br/> [fabric-permission-api-v1](https://github.com/FabricMC/fabric-api/tree/26.1.2/fabric-permission-api-v1) (Minecraft 26.2+) |
| NeoForge            | [NeoForge permission API](https://github.com/neoforged/NeoForge/tree/26.1.x/src/main/java/net/neoforged/neoforge/server/permission)                                                                             |
| Forge               | [Forge permission API](https://mcforge.readthedocs.io/en/1.12.x/utilities/permissionapi/)                                                                                                                       |
| Bukkit/Spigot/Paper | [Bukkit permission system](https://bukkit.fandom.com/wiki/Understanding_Permissions)                                                                                                                            |


::: danger NOTE
We don't support **hybrid servers**! Please either use only plugins or only mods on your server.

If you for some reason don't have permission for something that is granted to everyone by default, you might have misconfigured your permissions manager or are using a hybrid server.
:::


| Permission Node    | Default                           | Description                                                     |
| ------------------ | --------------------------------- | --------------------------------------------------------------- |
| `voicechat.listen` | Granted for everyone              | If players should be able to hear audio from the voice chat.    |
| `voicechat.speak`  | Granted for everyone              | If players should be able to transmit audio.                    |
| `voicechat.groups` | Granted for everyone              | If players should be able to join groups.                       |
| `voicechat.admin`  | Only granted for server operators | For administrative purposes like the `/voicechat test` command. |
