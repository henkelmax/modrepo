---
titleTemplate: Simple Voice Chat
---

# Compatibility

## Compatibility between mod/plugin versions

Generally it is always recommended that you use the exact same version on the server and client for the best possible experience.


This mod follows [Semantic Versioning](https://semver.org/).
This means version `1.2.3` has a major version of `1`, a minor version of `2` and a patch version of `3`.
So, as a rule of thumb, **only the major and minor versions need to match**.


So if your server has version `1.2.3` of the mod/plugin, your client could also use version `1.2.0` or `1.2.5` to join the server and use the mod.

## Compatibility between Minecraft versions

Simple Voice Chat is compatible between Minecraft versions with the help of tools like
[ViaVersion](https://modrinth.com/plugin/viaversion),
[ViaBackwards](https://modrinth.com/plugin/viabackwards),
[ViaFabric](https://modrinth.com/mod/viafabric)
or
[multiconnect](https://modrinth.com/mod/multiconnect).
Note that you still have to consider the compatibility between the mod versions, as described above.

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

## Operating system compatibility

### Windows

There are no known incompatibilities with any modern version of Windows (Windows 10 or later).

### MacOS

MacOS version `11` or later is required to run Simple Voice Chat on a Mac.
Both Intel and ARM based Macs are supported.

### Linux

Simple Voice Chat is compatible with all major Linux distributions, provided they are kept up to date.
If you encounter any incompatibility on Linux, please let us know.

The only additional requirement beyond Minecraft's usual dependencies is `glibc` version `2.33` or newer.
