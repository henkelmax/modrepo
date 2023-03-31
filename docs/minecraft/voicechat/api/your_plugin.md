---
titleTemplate: Simple Voice Chat
aside: false
---

# Your Plugin

<br/>

> Make sure you set up your workspace as shown in [Getting Started](getting_started)!

<br/>

As already shown in [Getting Started](getting_started),
the main entrypoint for all mod loaders and plugin loaders (Fabric/Forge/Quilt/Bukkit/Spigot/Paper) is the `VoicechatPlugin` interface.

```java
package com.example.yourmod;

import de.maxhenkel.voicechat.api.VoicechatPlugin;

public class TestPlugin implements VoicechatPlugin {
    ...
}
```

The only mandatory method you need to implement is `getPluginId`.
Make sure your plugin ID is unique.
Best practice is to use the mod ID/plugin ID of your mod/plugin.

```java
@Override
public String getPluginId() {
    return "my_plugin";
}
```

Once your plugin is loaded by the voice chat, the `initialize` method of your plugin gets called.
Here you get access to the [VoicechatApi](https://voicechat.modrepo.de/de/maxhenkel/voicechat/api/VoicechatApi.html) class.

```java
@Override
public void initialize(VoicechatApi api) {
    ...
}
```
