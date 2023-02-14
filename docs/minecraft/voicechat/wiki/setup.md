---
titleTemplate: Simple Voice Chat
---

# Setup

::: danger NOTE
If you are hosting your server with a Minecraft hosting provider,
please look if there is a guide for your specific hoster in the text channel `#server-hosting`
on the [Simple Voice Chat Discord server](https://discord.gg/4dH2zwTmyX).
If no guide for your hoster exists, ask the support of the hoster for help.


**Please don't ask us for help before you contacted your hoster!**
:::

If you are hosting your Minecraft server on your PC or on a VPS/root server, follow these steps:

- Make sure you opened the voice chat port on your server (`24454` `UDP` by default)
    - Opening the port for the voice chat is the same process as opening the normal Minecraft port. You just have to use UDP instead of TCP for the protocol.
    - You can change the port in the server config of the mod (`port`).
        - On Fabric/Quilt the server config file is located in `config/voicechat/voicechat-server.properties`
        - On Forge the server config file is located in `<Your world folder>/serverconfig/voicechat-server.toml`
        - On Bukkit/Spigot/Paper config file is located in `plugins/voicechat/voicechat-server.properties`
    - If you are hosting the server on your own computer,
    you have to make sure that the port is open in your firewall,
    as well as in your router.
    In most cases you also need to select your computer/IP address as the destination of this port,
    so the packets arrive on your machine.
    - Opening ports is different for every setup. It depends on your OS, your router, your ISP, your hoster and many other things.
    Please don't ask us how to do it.

## Setting it up with a proxy

*This only applies when using a proxy like Velocity or BungeeCord.*


First of all, make sure, you have the mod/plugin installed on every Minecraft server that's running behind your proxy.


If the proxy and all Minecraft servers are running on the same machine,
you have to assign a different port for every instance of voice chat on each Minecraft server.
Please also make sure each port is opened in the firewall.


If the proxy and the Minecraft servers are running on different machines,
you need to set `voice_host` in the voice chat config
of each Minecraft server to the public IP address (Without the port) of the server its running on (Not the IP of the proxy).
You also need to make sure each voice port is opened in the firewall of each server.

## Testing the voice chat connection

You can test the voice chat connection of a specific player by typing the command `/voicechat test <PLAYERNAME>`.


<ClientOnly>
    <WikiTracker name="setup"/>
</ClientOnly>
