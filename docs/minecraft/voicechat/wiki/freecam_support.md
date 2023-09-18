---
titleTemplate: Simple Voice Chat
aside: false
prev:
  text: 'Configuration'
  link: './configuration'
next: false
---

# Freecam Support

Simple Voice Chat supports freecam mods out of the box.

When having `freecam_support` enabled in the [client config](configuration#client),
the mod will automatically detect when a player is in freecam mode and play audio from nearby players even if the camera is further away from the player.

If you don't want that, you can disable the `freecam_support` option.
This will make the mod behave the same as if the player would be at the position of the camera, meaning you will not hear players nearby your actual player if you are further away with the free cam.

Note that the mod will only send audio of players that are within the configured `broadcast_range` of the player.
This setting is set to `-1` by default, meaning its the same distance as `max_voice_distance` (`48` blocks by default).
If you want to hear players further away, you can increase the `broadcast_range` value in the servers [config](configuration#server).
But be aware that this will also increase the amount of data that is sent to the client and makes it possible for other players to hear conversations that they normally shouldn't be able to hear.
