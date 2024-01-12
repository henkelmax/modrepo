---
titleTemplate: Simple Voice Chat
aside: false
---


# Configuration

::: danger NOTE
If you are using older versions of the mod (older than 2.4.0), please check out [this](old_configuration).
:::

## Troubleshooting Config Issues

While editing configuration files, make sure the client/server is stopped. If the config values keep resetting, this is most likely the problem.

If you can't find the config files, make sure the client/server was started at least once, so that the files are generated.

## Server

**Fabric/NeoForge/Forge/Quilt**

`config/voicechat/voicechat-server.properties`

**Bukkit/Spigot/Paper**

`plugins/voicechat/voicechat-server.properties`


| Config key                    | Description                                                                                                                                                                                    | Default value |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `port`                        | The port of the voice chat server<br/>Setting this to `-1` sets the port to the Minecraft servers port (Not recommended)                                                                       | `24454`       |
| `bind_address`                | The IP address to bind the voice chat server on<br/>Leave empty to use `server-ip` of server.properties<br/>To bind to the wildcard address, use `*`                                           | ` `           |
| `max_voice_distance`          | The distance to where the voice can be heard                                                                                                                                                   | `48`          |
| `crouch_distance_multiplier`  | The multiplier of the voice distance when crouching                                                                                                                                            | `1.0`         |
| `whisper_distance_multiplier` | The multiplier of the voice distance when whispering                                                                                                                                           | `0.5`         |
| `codec`                       | The opus codec<br/>Possible values are `VOIP`, `AUDIO` and `RESTRICTED_LOWDELAY`                                                                                                               | `VOIP`        |
| `mtu_size`                    | The maximum size in bytes that voice packets are allowed to have                                                                                                                               | `1024`        |
| `keep_alive`                  | The frequency at which keep alive packets are sent<br/>Setting this to a higher value may result in timeouts                                                                                   | `1000`        |
| `enable_groups`               | If group chats are allowed                                                                                                                                                                     | `true`        |
| `voice_host`                  | The host name that clients should use to connect to the voice chat<br/>This may also include a port, e.g. 'example.com:24454'<br/>Don't change this value if you don't know what you are doing | ` `           |
| `allow_recording`             | If players are allowed to record the voice chat                                                                                                                                                | `true`        |
| `spectator_interaction`       | If spectators are allowed to talk to other players                                                                                                                                             | `false`       |
| `spectator_player_possession` | If spectators can talk to players they are spectating                                                                                                                                          | `false`       |
| `force_voice_chat`            | If players without the mod should get kicked from the server                                                                                                                                   | `false`       |
| `login_timeout`               | The amount of milliseconds, the server should wait to check if the player has the mod installed<br/>Only active when force_voice_chat is set to true                                           | `10 000`      |
| `broadcast_range`             | The range where the voice chat should broadcast audio to<br/>A value <0 means `max_voice_distance`                                                                                             | `-1.0`        |


## Client

**Fabric/NeoForge/Forge/Quilt**

`config/voicechat/voicechat-client.properties`


| Config key                          | Description                                                                                                                                                                                                      | Default value                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `voice_chat_volume`                 | The voice chat volume                                                                                                                                                                                            | `1.0`                                        |
| `voice_activation_threshold`        | The threshold for voice activation in dB                                                                                                                                                                         | `-50.0`                                      |
| `microphone_amplification`          | The voice chat microphone amplification                                                                                                                                                                          | `1.0`                                        |
| `microphone_activation_type`        | Microphone activation type<br/>Possible values are `PTT` and `VOICE`                                                                                                                                             | `PTT`                                        |
| `output_buffer_size`                | The size of the audio output buffer in packets<br/>Higher values mean a higher latency, but less crackles<br/>Increase this value if you have an unstable internet connection                                    | `5`                                          |
| `audio_packet_threshold`            | The maximum amount of audio packets that are held back if a packet arrives out of order or gets dropped<br/>This prevents discarding audio packets that are slightly out of order<br/>Set this to `0` to disable | `3`                                          |
| `voice_deactivation_delay`          | The time it takes for the microphone to deactivate when using voice activation<br/>A value of 1 means 20 milliseconds, 2=40 ms, 3=60 ms, ...                                                                     | `25`                                         |
| `microphone`                        | The microphone used by the voice chat<br/>Empty for default device                                                                                                                                               | ` `                                          |
| `speaker`                           | The speaker used by the voice chat<br/>Empty for default device                                                                                                                                                  | ` `                                          |
| `muted`                             | If the microphone is muted (only when using voice activation)                                                                                                                                                    | `false`                                      |
| `disabled`                          | If the voice chat is disabled (sound and microphone off)                                                                                                                                                         | `false`                                      |
| `hide_icons`                        | If the voice chat icons should be hidden                                                                                                                                                                         | `false`                                      |
| `show_group_hud`                    | If the group HUD should be visible                                                                                                                                                                               | `true`                                       |
| `show_own_group_icon`               | If the own icon should be shown when in a group                                                                                                                                                                  | `true`                                       |
| `group_hud_icon_scale`              | The scale of the group HUD                                                                                                                                                                                       | `2.0`                                        |
| `group_player_icon_orientation`     | The orientation of the player icons in the group HUD<br/>Possible values are `VERTICAL` and `HORIZONTAL`                                                                                                         | `VERTICAL`                                   |
| `group_player_icon_pos_x`           | The X position of the player icons in the group HUD<br/>Negative values mean anchoring to the right                                                                                                              | `4`                                          |
| `group_player_icon_pos_y`           | The Y position of the player icons in the group HUD<br/>Negative values mean anchoring to the bottom                                                                                                             | `4`                                          |
| `hud_icon_pos_x`                    | The X position of the HUD icons<br/>Negative values mean anchoring to the right                                                                                                                                  | `16`                                         |
| `hud_icon_pos_y`                    | The Y position of the HUD icons<br/>Negative values mean anchoring to the bottom                                                                                                                                 | `-16`                                        |
| `hud_icon_scale`                    | The scale of the HUD icons                                                                                                                                                                                       | `1.0`                                        |
| `recording_destination`             | The location where recordings should be saved<br/>Leave empty for default location                                                                                                                               | ` `                                          |
| `recording_quality`                 | The quality of the recorded audio<br/>0 = highest quality, 9 = lowest quality                                                                                                                                    | `2`                                          |
| `denoiser`                          | If noise cancellation should be enabled                                                                                                                                                                          | `false`                                      |
| `run_local_server`                  | If voice chat should work in singleplayer/LAN worlds                                                                                                                                                             | `true`                                       |
| `java_microphone_implementation`    | Whether to use the Java implementation of microphone capturing instead of OpenAL                                                                                                                                 | `true` for MacOS, `false` for every other OS |
| `macos_check_microphone_permission` | If the mod should check for microphone permissions (MacOS only)                                                                                                                                                  | `true`                                       |
| `show_fake_players_disconnected`    | If fake players should have the disconnected icon above their head                                                                                                                                               | `false`                                      |
| `offline_player_volume_adjustment`  | If the volume adjustment GUI should also show offline players                                                                                                                                                    | `false`                                      |
| `audio_type`                        | The 3D audio type<br/>Possible values are `NORMAL`, `REDUCED` and `OFF`                                                                                                                                          | `NORMAL`                                     |
| `use_natives`                       | If the mod should load native libraries<br/>If set to false, the Java Opus implementation will be used, the denoiser won't be available and you won't be able to record audio.                                   | `true`                                       |
| `freecam_support`                   | This lets you hear players near you, even though you are further away with your freecam<br/>See <a href="freecam_support">this</a> for more information                                                          | `true`                                       |
| `mute_on_join`                      | If enabled, you will be automatically muted when joining a world                                                                                                                                                 | `false`                                      |
