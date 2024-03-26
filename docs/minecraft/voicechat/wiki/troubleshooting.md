---
titleTemplate: Simple Voice Chat
aside: false
---

# Troubleshooting problems

## Voice chat not connected / Plug icon

If you are hosting your server with a Minecraft hosting provider, please make sure you followed [this guide](server_setup_mc_hosting).
If you are self-hosting your Minecraft server, make sure you followed [these steps](server_setup_self_hosted).

The most likely cause of this is that you didn't open your port correctly.

If you are running your server behind a proxy like BungeeCord or Velocity make sure you followed [these instructions](proxy_setup).


Some servers have a DDoS protection that prevents the voice chat from working.
If this is the case, please ask your hoster to either disable it or to create an exception for the voice chat.

If you are using Docker, make sure you specified `24454:24454/udp` for the port.
Just doing `24454:24454` will not work as it is only TCP.


## The config file is empty (This config has been moved to ...)

Starting with version `2.4.0` of the Forge version of the mod, the config location was changed.
For more information where to find the configs, read [this](configuration).

The mod automatically migrates your settings and deletes all config entries from the old config.
The following is an example moved config.
The first line tells you where the new config can be found.

*Example moved config*
``` toml
# This config has been moved to config/voicechat/voicechat-client.properties
moved = true
```


## Other people can't be heard

Please make sure you followed the onboarding setup guide and selected the correct sound output device.

If you already set up the mod, you can select your sound device in the voice chat settings by clicking on the `Select Speaker` button and choosing the correct device.

You can test if it works by clicking the `Enable microphone testing` button.


## Other people can't hear me

Please make sure you followed the onboarding setup guide and selected the correct microphone.

If you already set up the mod, you can select your microphone in the voice chat settings by clicking on the `Select Microphone` button and choosing the correct device.


You can test if it works by clicking the `Enable microphone testing` button.


If you are using MacOS, read [this](macos)!


If you are on Windows or Linux, you can try setting `java_microphone_implementation` to `true` in the [client config](client_config) of the mod.
Note that this is not guaranteed to work in all cases.


## The voice chat is constantly disconnecting and reconnecting

This might be caused by a bad or unstable internet connection.


## The Server Crashes on Startup (Failed to bind to address)

This is mostly caused by not binding to the correct IP address.
Please leave `bind_address` empty if you don't explicitly get told to set it.


If the bind address is already empty, please take a look at [this](#the-server-crashes-on-startup-address-already-in-use).


## The Server Crashes on Startup (Address already in use)

Another program is already using the voice chat port.

Please do the following:

- Check if there are any other instances of the voice chat mod/plugin running that use the same port.
- If you are using other mods/plugins that need a UDP port like GeyserMC, make sure they are using a different port than the voice chat.
- Make sure the server query is not running on the same port as the voice chat. You can find the query port in your server.properties (`query.port`).


## Mod 'Simple Voice Chat' (voicechat) requires version XXX or later of mod fabric, which is missing!

You need to install the latest version of the [Fabric API](https://modrinth.com/mod/fabric-api/versions).

Technically the mod has all required Fabric API modules installed, but if you have an outdated version installed, it won't work.


## Could not find required mod: voicechat requires \{fabricloader ...\}

You need to install the latest version of the [Fabric Loader](https://fabricmc.net/use/).


## Jar at /mods/voicechat-fabric-X.X.X-X.X.X.jar is corrupted, please redownload it

Please make sure you actually download the mod from [official sources](../downloads).
If you already did that, please double-check that the file has not been modified in any way or re-download it.


## The mods config file does not exist

Make sure the mod is actually installed, and you started the client/server at least once with the mod added to it.

If you don't know where the config files are located, read [this](configuration).


## The changed config values are not affecting the game

Make sure you actually restarted the client/server after changing anything in the config, for it to take effect.


## Microphone unavailable

First of all, make sure your audio drivers are up to date.

If this doesn't help, try restarting your computer and start your launcher as an administrator.


## Players can be heard far away/Proximity is not working

You are most likely just in a group. Leave the group and proximity will work fine.


## I can't find the voice chat port in the 'server.properties' file

This option is **not** located in the `server.properties` file. It is located in the mods server config. For more information read [this](server_config).


## The voice chat does not connect all of a sudden without anything having been changed

If you are renting a server with a Minecraft hosting provider, it is very likely that they have changed something with their networking.
Please double check that you really didn't change anything on your server and then contact your hosters support.


## Mixin config voicechat.mixins.json requires mixin subsystem version 0.8 but 0.7.x was found. The mixin config will not be applied.

This is caused by another mod shipping with an older mixin version.
You can fix this issue by installing [this mod](https://modrinth.com/mod/mixincompat).


<ClientOnly>
    <WikiTracker name="troubleshooting"/>
</ClientOnly>
