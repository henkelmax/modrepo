---
titleTemplate: Simple Voice Chat
aside: false
---

# Client Config File

**Fabric/NeoForge/Forge/Quilt**

`config/voicechat/voicechat-client.properties`


| Config key                          | Description                                                                                                                                                                                                                                                                                                                                                                                               | Default value                                |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `onboarding_finished`               | If the voice chat onboarding process has been finished<br/>See <a href="client_setup">this</a> for more information                                                                                                                                                                                                                                                                                       | `false`                                      |
| `voice_chat_volume`                 | The voice chat volume                                                                                                                                                                                                                                                                                                                                                                                     | `1.0`                                        |
| `voice_activation_threshold`        | The threshold for voice activation in dB                                                                                                                                                                                                                                                                                                                                                                  | `-50.0`                                      |
| `microphone_amplification`          | The voice chat microphone amplification                                                                                                                                                                                                                                                                                                                                                                   | `1.0`                                        |
| `microphone_activation_type`        | Microphone activation type<br/>Possible values are `PTT` and `VOICE`                                                                                                                                                                                                                                                                                                                                      | `PTT`                                        |
| `output_buffer_size`                | The size of the audio output buffer in packets<br/>Higher values mean a higher latency, but less crackles<br/>Increase this value if you have an unstable internet connection                                                                                                                                                                                                                             | `5`                                          |
| `audio_packet_threshold`            | The maximum amount of audio packets that are held back if a packet arrives out of order or gets dropped<br/>This prevents discarding audio packets that are slightly out of order<br/>Set this to `0` to disable                                                                                                                                                                                          | `3`                                          |
| `voice_deactivation_delay`          | The time it takes for the microphone to deactivate when using voice activation<br/>A value of 1 means 20 milliseconds, 2=40 ms, 3=60 ms, ...                                                                                                                                                                                                                                                              | `25`                                         |
| `microphone`                        | The microphone used by the voice chat<br/>Empty for default device                                                                                                                                                                                                                                                                                                                                        | ` `                                          |
| `speaker`                           | The speaker used by the voice chat<br/>Empty for default device                                                                                                                                                                                                                                                                                                                                           | ` `                                          |
| `muted`                             | If the microphone is muted (only when using voice activation)                                                                                                                                                                                                                                                                                                                                             | `true`                                       |
| `disabled`                          | If the voice chat is disabled (sound and microphone off)                                                                                                                                                                                                                                                                                                                                                  | `false`                                      |
| `hide_icons`                        | If the voice chat icons should be hidden                                                                                                                                                                                                                                                                                                                                                                  | `false`                                      |
| `show_group_hud`                    | If the group HUD should be visible                                                                                                                                                                                                                                                                                                                                                                        | `true`                                       |
| `show_own_group_icon`               | If the own icon should be shown when in a group                                                                                                                                                                                                                                                                                                                                                           | `true`                                       |
| `group_hud_icon_scale`              | The scale of the group HUD                                                                                                                                                                                                                                                                                                                                                                                | `2.0`                                        |
| `group_player_icon_orientation`     | The orientation of the player icons in the group HUD<br/>Possible values are `VERTICAL` and `HORIZONTAL`                                                                                                                                                                                                                                                                                                  | `VERTICAL`                                   |
| `group_player_icon_pos_x`           | The X position of the player icons in the group HUD<br/>Negative values mean anchoring to the right                                                                                                                                                                                                                                                                                                       | `4`                                          |
| `group_player_icon_pos_y`           | The Y position of the player icons in the group HUD<br/>Negative values mean anchoring to the bottom                                                                                                                                                                                                                                                                                                      | `4`                                          |
| `hud_icon_pos_x`                    | The X position of the HUD icons<br/>Negative values mean anchoring to the right                                                                                                                                                                                                                                                                                                                           | `16`                                         |
| `hud_icon_pos_y`                    | The Y position of the HUD icons<br/>Negative values mean anchoring to the bottom                                                                                                                                                                                                                                                                                                                          | `-16`                                        |
| `hud_icon_scale`                    | The scale of the HUD icons                                                                                                                                                                                                                                                                                                                                                                                | `1.0`                                        |
| `recording_destination`             | The location where recordings should be saved<br/>Leave empty for default location                                                                                                                                                                                                                                                                                                                        | ` `                                          |
| `recording_quality`                 | The quality of the recorded audio<br/>0 = highest quality, 9 = lowest quality                                                                                                                                                                                                                                                                                                                             | `2`                                          |
| `denoiser`                          | If noise cancellation should be enabled                                                                                                                                                                                                                                                                                                                                                                   | `false`                                      |
| `run_local_server`                  | If voice chat should work in singleplayer/LAN worlds                                                                                                                                                                                                                                                                                                                                                      | `true`                                       |
| `java_microphone_implementation`    | Whether to use the Java implementation of microphone capturing instead of OpenAL                                                                                                                                                                                                                                                                                                                          | `true` for MacOS, `false` for every other OS |
| `macos_check_microphone_permission` | If the mod should check for microphone permissions (MacOS only)                                                                                                                                                                                                                                                                                                                                           | `true`                                       |
| `show_fake_players_disconnected`    | If fake players should have the disconnected icon above their head                                                                                                                                                                                                                                                                                                                                        | `false`                                      |
| `offline_player_volume_adjustment`  | If the volume adjustment GUI should also show offline players                                                                                                                                                                                                                                                                                                                                             | `false`                                      |
| `audio_type`                        | The 3D audio type<br/>Possible values are `NORMAL`, `REDUCED` and `OFF`                                                                                                                                                                                                                                                                                                                                   | `NORMAL`                                     |
| `use_natives`                       | If the mod should load native libraries<br/>If set to false, the Java Opus implementation will be used, the denoiser won't be available and you won't be able to record audio.                                                                                                                                                                                                                            | `true`                                       |
| `freecam_mode`                      | How listening to other players should work when using freecam mods<br/>Possible values:<br/>`CAMERA` You will hear voice chat audio around your camera. Whether you hear distant audio depends on the voice chat broadcast range of the server<br/>`PLAYER` You will hear voice chat audio around your player no matter where your camera is<br/>See <a href="freecam_mode">this</a> for more information | `CAMERA`                                     |
| `mute_on_join`                      | If enabled, you will be automatically muted when joining a world                                                                                                                                                                                                                                                                                                                                          |