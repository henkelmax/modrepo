---
titleTemplate: Simple Voice Chat
aside: false
---

# Troubleshooting problems

## Voice chat unavailable / Voice chat not connected / Plug icon

The most likely cause of this is that you didn't forward your port correctly.
Please double check your setup.


If you are running your server behind a proxy like BungeeCord or Velocity,
you may also need to set `voice_host` to the public IP of the server the voice chat is running on.


Some servers have a DDoS protection that prevents the voice chat from working.
If this is the case, please ask your hoster to either disable it or to create an exception for the voice chat.

## Other people can't be heard

If you can't hear other people talking, you might haven't selected the correct sound output device.


You can select your sound device in the voice chat menu by clicking on the `Select Speaker` button and choosing the correct device.


You can test if it works by clicking the `Enable microphone testing<` button.

## Other people can't hear me

If other people can't hear you, you might haven't selected the correct microphone.


You can select your microphone in the voice chat menu by clicking on the `Select Microphone` button and choosing the correct device.


You can test if it works by clicking the `Enable microphone testing` button.


If you are using MacOS, read [this](macos.md)!


If you are on Linux, you can try setting `java_microphone_implementation` to `true` in the [client config](configuration.md) of the mod.
Note that this is not guaranteed to work in all cases.

## The voice chat is constantly reconnecting

This is mostly caused by not binding to the correct IP address.
See `bind_address` in [Configuration](configuration.md).

If you are hosting the server in your own network, you should always connect to the Minecraft server via the internal IP, not your public IP.

## The Server Crashes on Startup (Failed to bind to address)

This is mostly caused by not binding to the correct IP address.
Please try the default setting of an empty string or `0.0.0.0` before using a specific address.


If the bind address is already empty or set to `0.0.0.0`, please take a look at [this](#the-server-crashes-on-startup-address-already-in-use)).

## The Server Crashes on Startup (Address already in use)

Another program is already using the voice chat port.
Make sure you don't already have your Minecraft server running and change the voice chat port in the mods server config.


If you are running multiple servers with voice chat on the same machine, you need to select a different voice chat port for every server.


Please also make sure you are not running mods or plugins that require a UDP port (Like Geyser) on the voice chat port.

## Mod 'Simple Voice Chat' (voicechat) requires version XXX or later of mod fabric, which is missing!

You need to install the latest version of the [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all).

Technically the mod has all required Fabric API modules installed, but if you have an outdated version installed, it won't work.

## Could not find required mod: voicechat requires {fabricloader ...}

You need to install the latest version of the [Fabric Loader](https://fabricmc.net/use/).

## Jar at /mods/voicechat-fabric-X.X.X-X.X.X.jar is corrupted, please redownload it

Please make sure you actually download the mod from CurseForge or Modrinth.
If you already did that, please double check that the file has not been modified in any way.

## The mods config file does not exist

Make sure the mod is actually installed and you started the client/server at least once with the mod added to it.

If you don't know where the config files are located, read [this](configuration.md).

## The changed config values are not affecting the game

Make sure you actually restarted the client/server after changing anything in the config, for it to take effect.

## Microphone unavailable

Try starting your launcher as an administrator. If this doesn't work,
restart your computer and don't start any other programs other than Minecraft,
that can use your microphone.

## Players can be heard far away/Proximity is not working

You are most likely just in a group. Leave the group and proximity will work fine.

## I can't find the voice chat port in the 'server.properties' file

This option is **not** located in the `server.properties` file. It is located in the mods server config. For more information read [this](configuration.md).


<ClientOnly>
    <WikiTracker name="troubleshooting"/>
</ClientOnly>
