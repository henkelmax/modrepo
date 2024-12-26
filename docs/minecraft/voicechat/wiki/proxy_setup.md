---
titleTemplate: Simple Voice Chat
---

# Proxy Setup

## Minecraft Proxy Setup

*This only applies when using a proxy that is designed for Minecraft servers like Velocity or BungeeCord.*

::: danger NOTE
You need to have the mod/plugin installed on every Minecraft server that's running behind your proxy.
:::

If the proxy and all Minecraft servers are running on the same machine,
you have to assign a different port for every instance of voice chat on each Minecraft server.

### Velocity/BungeeCord/Waterfall

Download and install the [Simple Voice Chat Velocity Plugin](/minecraft/voicechat/downloads#velocity) or the [Simple Voice Chat BungeeCord/Waterfall Plugin](/minecraft/voicechat/downloads#bungeecord-waterfall) respectively.

The plugin will automatically detect the port of each voice chat server and will forward everything to the correct destination.

Note that when using voice chat through the proxy, the `voice_host` config option of each voice chat server is ignored - the proxy plugin will automatically detect the address and port of each server.
Use the `voice_host` config option in the [voice chat proxy config](proxy_config) instead, if you want to change where clients are trying to connect to.

You only need to open a single UDP port for the proxy server.
By default this is the same port as the Minecraft server port of the proxy.
So by default for velocity, your voice chat port will be `25577`.
You can change the port in the [voice chat proxy config](proxy_config).

### Other Minecraft Proxies

::: info NOTE
This also applies if you are using Velocity, BungeeCord or Waterfall, but you don't want to install the plugin on the proxy.
:::

Make sure each voice chat port of each Minecraft server is opened to the public in the firewall.

If the proxy and the Minecraft servers are running on different machines,
you need to set `voice_host` in the [voice chat server config](server_config)
of each Minecraft server to the public IP address (Without the port) of the server its running on (Not the IP of the proxy).
You also need to make sure each voice port is opened in the firewall of each server.

## Generic UDP Proxy Setup

You need to set `voice_host` to the proxy address in the [voice chat server config](server_config).