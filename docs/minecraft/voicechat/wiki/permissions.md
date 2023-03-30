---
titleTemplate: Simple Voice Chat
aside: false
---

# Permissions

Simple Voice Chat has permissions for the [Bukkit permission system](https://bukkit.fandom.com/wiki/Understanding_Permissions),
the [Forge permission API](https://mcforge.readthedocs.io/en/1.12.x/utilities/permissionapi/) and the [Fabric Permissions API](https://github.com/lucko/fabric-permissions-api).

Note that the permission system for Forge was added in version `2.2.21` and the permission system for Fabric was added in version `2.2.33`.

::: danger NOTE
We don't support hybrid servers! Please either use only plugins or only mods on your server.
:::


| Permission Node         | Default                           | Description                                                                                                               |
| ----------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `voicechat.listen`      | Granted for everyone              | If players should be able to hear audio from the voice chat.<br/>**Added in version `2.3.13`.**                           |
| `voicechat.speak`       | Granted for everyone              | If players should be able to transmit audio.                                                                              |
| `voicechat.groups`      | Granted for everyone              | If players should be able to join groups.                                                                                 |
| `voicechat.admin`       | Only granted for server operators | For administrative purposes like the `/voicechat test` command.                                                           |
| ~~`voicechat.connect`~~ | Granted for everyone              | If players should be able to connect to the voice chat.<br/>*Removed in version `2.3.13` in favor of `voicechat.listen`.* |
