---
titleTemplate: Simple Voice Chat
aside: false
---

# Forcing Bukkit/Paper Compatibility

::: warning NOTE
We do not provide support for forcing Bukkit/Paper version compatibility.

Forcing version compatibility could lead to issues - Use at your own risk!
:::

The plugin version of Simple Voice Chat allows forcing compatibility with a specific version of Bukkit/Paper.
This is especially helpful for servers that don't strictly follow the Bukkit versioning scheme or if the plugin fails to detect the Bukkit or Paper versioning schema.

## Usage

To force compatibility with a specific version of Bukkit or Paper, set the java property `voicechat.compatibility` to the Bukkit or Paper version of your choice.

*Example for Bukkit `26.1.2`*

```sh
java -Dvoicechat.compatibility="26.1.2-R0.1-SNAPSHOT" -jar bukkit.jar
```


*Example for Paper `26.1.2`*

```sh
java -Dvoicechat.compatibility="26.1.2.build.7-alpha" -jar paper.jar
```
