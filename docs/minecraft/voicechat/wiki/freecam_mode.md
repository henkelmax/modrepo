---
titleTemplate: Simple Voice Chat
aside: false
prev:
  text: 'Configuration'
  link: './configuration'
next: false
---

# Freecam Mode

Simple Voice Chat supports freecam mods out of the box.
There are currently two different modes that let you decide how the voice chat will behave if you are using the freecam.

## Mode `CAMERA`

By default the mode is set to `CAMERA`, meaning you will hear voice chat audio around your camera.
Whether you hear distant audio depends on the voice chat broadcast range of the server:

The mod will only send audio of players that are within the configured `broadcast_range` of the player.
This setting is set to `-1` by default, meaning its the same distance as `max_voice_distance` (`48` blocks by default).
If you want to hear players further away, you can increase the `broadcast_range` value in the servers [config](server_config).
But be aware that this will also increase the amount of data that is sent to the client and makes it possible for other players to hear audio that they normally shouldn't be able to hear.

## Mode `PLAYER`

With the mode set to `PLAYER`, you will hear voice chat audio around your player no matter where your camera is.
The mod will automatically detect when a player is in freecam mode and play audio from nearby players even if the camera is further away from the player.
