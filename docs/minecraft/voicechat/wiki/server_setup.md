---
titleTemplate: Simple Voice Chat
---

# Server Setup

Setting up your server for Simple Voice Chat requires a special networking setup.
This is a little more complicated than setting up a *regular* Minecraft mod.

It is absolutely crucial for the voice chat to work, so please follow the steps very carefully and thoroughly!

In case you are using a proxy, please additionally read [this](proxy_setup) to learn how to set it up.

### If you are hosting your server with a Minecraft hosting provider

[Setting Up The Server - Minecraft Hosting Provider](server_setup_mc_hosting)

### If you are self-hosting your Minecraft server

[Setting Up The Server - Self Hosted](server_setup_self_hosted)

## Changing the Voice Chat Port

You can change the port that the voice chat is running on in the server config of the mod.
More information on how to find the config file [here](server_config).

Just set the property `port` to the port you want.
For example `port=24454` to use port `24454`.

## Testing the Voice Chat Connection

### Testing In-Game

You can test the voice chat connection of a specific player by typing the command `/voicechat test <PLAYERNAME>` in-game.

### Testing from the Command Line

You can also test the voice chat connection without having to run your game client.
[This tool](https://github.com/henkelmax/svc-cli-utils) allows you to ping the voice chat server from your command line.
This is especially useful for just testing if the voice chat UDP port is open.
Make sure that the voice chat server is running when using this tool.

::: warning NOTE
Checking for an open voice chat port is not possible with general port checking tools.
UDP is a connectionless protocol and requires the application to actually answer to check if the port is open.
:::

### Testing the Connection Between Minecraft Proxies and Minecraft Servers

::: danger WARNING
This command is experimental and subject to change.
:::

If you are using a proxy with the voice chat plugin, you can only test the connection to the voice chat port of the proxy using the tool mentioned above.

Starting with version `2.6.4` of the proxy plugin, you can test the voice chat connection from the proxy to a backend Minecraft server by typing `/voicechatproxy ping <server name> <voice chat port>` in command line of your proxy.
You can get a list of your backend servers by typing `/voicechatproxy ping`. Note that its important that you provide the correct voice chat port of the backend server as the last argument, as the proxy itself is not aware of the voice chat port of the backend servers.

<ClientOnly>
    <WikiTracker name="setup"/>
</ClientOnly>
