---
titleTemplate: Simple Voice Chat
---

# Compatibility

## Compatibility between mod/plugin versions

For the best experience, use the same mod/plugin version on the server and client when possible.

Versions are written as three numbers (for example `1.2.3`).<br>
Only the **first two numbers need to match** for the mod/plugin to be compatible.

**Example**: If the server is using `1.2.3`, clients running `1.2.0` or `1.2.5` can join.
Clients running `1.1.x `, `1.3.x `or `2.x.x` cannot.

## Compatibility between Minecraft versions

Simple Voice Chat is compatible between Minecraft versions with the help of tools like
[ViaVersion](https://modrinth.com/plugin/viaversion),
[ViaBackwards](https://modrinth.com/plugin/viabackwards),
[ViaFabric](https://modrinth.com/mod/viafabric)
or
[multiconnect](https://modrinth.com/mod/multiconnect).
Note that you still have to consider the compatibility between the mod/plugin versions, as described above.

## Compatibility between mod/plugin loaders

::: danger NOTE
We don't support **hybrid servers**! Please either use only plugins or only mods on your server.
Examples of hybrid servers are **Mohist**, **Arclight**, **Magma** or **Cardboard**.
More information about that topic [here](https://essentialsx.net/do-not-use-mohist.html).
:::

::: warning NOTE
Due to limitations of Forge/NeoForge, clients using **NeoForge** can't connect to **Forge** servers.
:::

Simple Voice Chat is available for Fabric, NeoForge, Forge, Quilt and Bukkit/Spigot/Paper.
All these versions are cross compatible with each other, considering the above limitations.

## Compatibility with other mods and plugins

In case you are using mods or plugins that change the player nametag rendering, Simple Voice Chat won't be able to show any icons next to the player's name.
This is unfortunately nothing we can fix, as it would need special code for every mod or plugin that does this.
This is especially the case for server side plugins that use invisible armor stands or display entities.

Other than that, there are no known incompatibilities with any other mods or plugins, given they are up to date.

## Operating system compatibility

::: info INFO
This section only applies to running the mod on your game, not on servers.
:::

::: danger NOTE
32-bit operating systems are not supported.
:::

### Windows

There are no known incompatibilities with any modern version of Windows (Windows 10 or later).

### MacOS

You need a specific launcher to run Simple Voice Chat on a Mac. More information [here](macos).

MacOS version `13` or later is required to run Simple Voice Chat on a Mac.
Both Intel and ARM based Macs are supported.

### Linux

Simple Voice Chat is compatible with all major Linux distributions, provided they are kept up to date.
If you encounter any incompatibility on Linux, please let us know.

The only additional requirement beyond Minecraft's usual dependencies is `glibc` version `2.33` or newer, as well as ALSA and/or PulseAudio for the Microphone.

### Other Operating Systems

We don't support any other operating systems like Android, ChromeOS, iOS or FreeBSD.
