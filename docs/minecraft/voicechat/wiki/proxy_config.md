---
titleTemplate: Simple Voice Chat
aside: false
---

# Proxy Config File

**Velocity/BungeeCord/Waterfall**

`plugins/voicechat/voicechat-proxy.properties`


| Config key     | Description                                                                                                                                                                                    | Default value |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `port`         | The port of the voice chat proxy server<br/>Setting this to `-1` sets the port to the proxies port                                                                                             | `-1`          |
| `bind_address` | The IP address to bind the voice chat proxy server on<br/>Leave empty to use the proxies bind address<br/>To bind to the wildcard address, use `*`                                             | ` `           |
| `voice_host`   | The host name that clients should use to connect to the voice chat<br/>This may also include a port, e.g. 'example.com:24454'<br/>Don't change this value if you don't know what you are doing | ` `           |
| `allow_pings`  | If the voice chat proxy server should reply to pings                                                                                                                                           | `true`        |
