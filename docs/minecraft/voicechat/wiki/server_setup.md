---
titleTemplate: Simple Voice Chat
---

# Server Setup

Setting up your server for Simple Voice Chat requires a special networking setup.
This is a little more complicated than setting up a *normal* Minecraft mod.

It is absolutely crucial for the voice chat to work, so please follow the steps very carefully and thoroughly!

### If you are hosting your server with a Minecraft hosting provider

[Setting Up The Server - Minecraft Hosting Provider](server_setup_mc_hosting)

### If you are self-hosting your Minecraft server

[Setting Up The Server - Self Hosted](server_setup_self_hosted)


## Setting it up with a Minecraft proxy

*This only applies when using a proxy like Velocity or BungeeCord.*


First of all, make sure, you have the mod/plugin installed on every Minecraft server that's running behind your proxy.


If the proxy and all Minecraft servers are running on the same machine,
you have to assign a different port for every instance of voice chat on each Minecraft server.
Please also make sure each port is opened in the firewall.


If the proxy and the Minecraft servers are running on different machines,
you need to set `voice_host` in the [voice chat server config](configuration#server)
of each Minecraft server to the public IP address (Without the port) of the server its running on (Not the IP of the proxy).
You also need to make sure each voice port is opened in the firewall of each server.

## Setting it up with a UDP proxy

You need to set `voice_host` to the proxy address in the [voice chat server config](configuration#server).


## Changing the Voice Chat Port

You can change the port that the voice chat is running on in the server config of the mod.
More information on how to find the config file [here](configuration).

Just set the property `port` to the port you want.
For example `port=1234` to use port `1234`.

## Testing the voice chat connection

You can test the voice chat connection of a specific player by typing the command `/voicechat test <PLAYERNAME>`.

<ClientOnly>
    <WikiTracker name="setup"/>
</ClientOnly>
