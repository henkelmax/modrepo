---
titleTemplate: Simple Voice Chat
---

# Compatibility

## Compatibility between mod/plugin versions

Generally it is always recommended that you use the exact same version on the server and client for the best possible experience.


This mod follows [Semantic Versioning](https://semver.org/).
This means version `1.2.3` has a major version of `1`, a minor version of `2` and a patch version of `3`.
So, as a rule of thumb, only the major and minor versions need to match.
So for example you can join a server with version `1.2.3`, your client can also have version `1.2.0` or `1.2.5`.

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
We don't support hybrid servers! Please either use only plugins or only mods on your server.
:::

::: warning NOTE
Due to limitations of Forge/NeoForge, clients using **NeoForge** can't connect to **Forge** servers.
:::

Simple Voice Chat is available for Fabric, NeoForge, Forge, Quilt and Bukkit/Spigot/Paper.
All these versions are cross compatible with each other, considering the above limitations.

## Operating system compatibility

### Windows

There are no known incompatibilities with any modern version of Windows (Windows 10 or newer).

### MacOS

MacOS version `10.15` or later is required to run Simple Voice Chat on a Mac.
We support both Intel and ARM based Macs.

### Linux

Simple Voice Chat is compatible with all major Linux distributions, provided they are kept up to date.
If you encounter any incompatibility on Linux, please let us know.

The only additional requirement beyond Minecraft's usual dependencies is `glibc` version `2.29` or newer.
