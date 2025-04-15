---
titleTemplate: Simple Voice Chat
aside: false
---

# Forcing Bukkit Compatibility

::: warning NOTE
We do not provide support for forcing Bukkit version compatibility.

Forcing version compatibility could lead to issues - Use at your own risk!
:::

Starting with version `2.5.30`, the plugin allows forcing compatibility with a specific version of Bukkit.
This is especially helpful for servers that don't strictly follow the bukkit versioning scheme or if the plugin fails to detect the bukkit version.

## Usage

To force compatibility with a specific version of Bukkit, set the java property `voicechat.compatibility` to the bukkit version of your choice.

*Example for version `1.21.5`*

```sh
java -Dvoicechat.compatibility="1.21.5-R0.1-SNAPSHOT" -jar bukkit.jar
```
