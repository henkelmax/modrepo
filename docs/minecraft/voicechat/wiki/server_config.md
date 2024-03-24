---
titleTemplate: Simple Voice Chat
aside: false
---

# Server Config File

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
| `allow_pings`                 | If the voice chat server should reply to pings                                                                                                                                                 | `true`        |
