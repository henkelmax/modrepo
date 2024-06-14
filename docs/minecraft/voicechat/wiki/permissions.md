---
titleTemplate: Simple Voice Chat
aside: false
---

# Permissions

Simple Voice Chat has permissions for the [Bukkit permission system](https://bukkit.fandom.com/wiki/Understanding_Permissions),
the [Forge permission API](https://mcforge.readthedocs.io/en/1.12.x/utilities/permissionapi/) and the [Fabric Permissions API](https://github.com/lucko/fabric-permissions-api).

::: danger NOTE
We don't support hybrid servers! Please either use only plugins or only mods on your server.

If you for some reason don't have permission for something that is granted to everyone by default, you might have misconfigured your permissions manager or are using a hybrid server.
:::


| Permission Node    | Default                           | Description                                                     |
| ------------------ | --------------------------------- | --------------------------------------------------------------- |
| `voicechat.listen` | Granted for everyone              | If players should be able to hear audio from the voice chat.    |
| `voicechat.speak`  | Granted for everyone              | If players should be able to transmit audio.                    |
| `voicechat.groups` | Granted for everyone              | If players should be able to join groups.                       |
| `voicechat.admin`  | Only granted for server operators | For administrative purposes like the `/voicechat test` command. |
