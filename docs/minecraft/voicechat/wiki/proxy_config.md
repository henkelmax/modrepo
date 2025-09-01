---
titleTemplate: Simple Voice Chat
aside: false
---

# Proxy Config File

**Velocity/BungeeCord/Waterfall**

`plugins/voicechat/voicechat-proxy.properties`


| Config key     | Description                                                                                                                                                                                                                                                                                          | Default value |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `port`         | The port number to use for the voice chat communication.<br/>Audio packets are always transmitted via the UDP protocol on the port number specified here, independently of other networking used for the game server.<br/>Set this to `-1` to use the same port number as the one used by the proxy. | `-1`          |
| `bind_address` | The proxy IP address to bind the voice chat to<br/>Leave blank to use the proxy bind address<br/>To bind to the wildcard IP address, use `*`                                                                                                                                                         | ` `           |
| `voice_host`   | The hostname that clients should use to connect to the voice chat<br/>This may also include a port, e.g. 'example.com:24454' or just a port, e.g. '24454'<br/>Do **NOT** change this value if you don't know what you're doing                                                                       | ` `           |
| `allow_pings`  | If the voice chat proxy server should reply to external pings                                                                                                                                                                                                                                        | `true`        |
