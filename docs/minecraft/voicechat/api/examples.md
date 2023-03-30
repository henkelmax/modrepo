---
titleTemplate: Simple Voice Chat
---

# Examples

For simplicity, all examples are written in for Fabric using [official mappings](https://minecraft.fandom.com/wiki/Obfuscation_map).

## Groups

**Creating a group**

```java
VoicechatServerApi api = ...;

Group group = api.groupBuilder()
        .setPersistent(true) // Doesn't remove the group once all players left
        .setName(group.getName()) // The name of the group
        .setPassword(group.getPassword()) // The password of the group
        .setType(Group.Type.ISOLATED) // The type of the group (NORMAL, OPEN, ISOLATED)
        .build();
```

If the group is set to be persistent, the group will be created once the `.build()` method is called.
If the group is not persistent, the group will be created once the first player is added.

**Adding a player to a group**

```java
VoicechatServerApi api = ...;
Group group = ...;
Player player = ...;

VoicechatConnection connection = api.getConnectionOf(player.getUUID());
if (connection == null) {
    return; // Player is not connected to voice chat
}
if (connection.getGroup() != null) {
    return; // Player is already in a group
}
connection.setGroup(group); // Add player to the group
```

## Audio Channels

**Creating a static audio channel**

```java
VoicechatServerApi api = ...;
ServerLevel level = ...;
ServerPlayer player = ...;
Vec3 pos = ...;
String category = ...; // The category needs to be registered - See "Registering a volume category"
UUID channelID = UUID.randomUUID();

VoicechatConnection playerConnection = api.getConnectionOf(player.getUUID());

StaticAudioChannel channel = api.createStaticAudioChannel(channelID, api.fromServerLevel(level), playerConnection);
if (channel == null) {
    return;
}
channel.setCategory(category); // The category of the audio channel
```

This will create a static audio channel that can be heard by the player that was provided in the `.createStaticAudioChannel(...)` method.
Static audio channel audio is the same as the audio in groups.


**Creating a locational audio channel**

```java
VoicechatServerApi api = ...;
ServerLevel level = ...;
Vec3 pos = ...;
String category = ...; // The category needs to be registered - See "Registering a volume category"
UUID channelID = UUID.randomUUID();

LocationalAudioChannel channel = api.createLocationalAudioChannel(channelID, api.fromServerLevel(level), api.createPosition(pos.x, pos.y, pos.z));
if (channel == null) {
    return;
}
channel.setCategory(category); // The category of the audio channel
channel.setDistance(100); // The distance in which the audio channel can be heard
```

This will create a locational audio channel that can be heard by all players in the range that was defined by `.setDistance(distance)`.


**Creating an entity audio channel**

```java
VoicechatServerApi api = ...;
ServerLevel level = ...;
Entity entity = ...;
String category = ...; // The category needs to be registered - See "Registering a volume category"
UUID channelID = UUID.randomUUID();

EntityAudioChannel channel = api.createEntityAudioChannel(channelID, api.fromEntity(entity));
if (channel == null) {
    return;
}
channel.setCategory(category); // The category of the audio channel
channel.setDistance(100); // The distance in which the audio channel can be heard
```

This will create an entity audio channel that can be heard by all players in the range that was defined by `.setDistance(distance)`.
The source of the audio channel will be the entity that was provided in the `.createEntityAudioChannel(...)` method.

**Playing audio to audio channels**

```java
VoicechatServerApi api = ...;
LocationalAudioChannel channel = ...; // Can also be a StaticAudioChannel or EntityAudioChannel
short[] audio = ...; // The audio samples in 48kHz 16-bit PCM format

AudioPlayer player = api.createAudioPlayer(channel, api.createEncoder(), audio);
player.startPlaying();

...

player.stopPlaying(); // Stop playing the audio
player.isPlaying(); // Returns true if the audio is currently playing
player.isStopped(); // Returns true if the audio is finished playing or was stopped

player.setOnStopped(() -> {
    // This will be called once the audio is finished playing or was stopped
});
```

This will play the audio to the audio channel in a separate thread.
This thread will automatically send the audio packets and will respect the audio pace.

## Volume Categories

**Registering a volume category**

```java
public class Plugin implements VoicechatPlugin {

    public static String MUSIC_DISC_CATEGORY = "music_discs";

    ...

    @Override
    public void registerEvents(EventRegistration registration) {
        registration.registerEvent(VoicechatServerStartedEvent.class, this::onServerStarted);
    }

    private void onServerStarted(VoicechatServerStartedEvent event) {
        VoicechatServerApi api = event.getVoicechat();
        VolumeCategory musicDiscs = api.volumeCategoryBuilder()
                .setId(MUSIC_DISC_CATEGORY)
                .setName("Music discs")
                .setDescription("The volume of all custom music discs")
                .setIcon(getIcon("category_music_discs.png"))
                .build();

        api.registerVolumeCategory(musicDiscs);
    }

    @Nullable
    private int[][] getIcon(String path) {
        try {
            Enumeration<URL> resources = Plugin.class.getClassLoader().getResources(path);
            while (resources.hasMoreElements()) {
                BufferedImage bufferedImage = ImageIO.read(resources.nextElement().openStream());
                if (bufferedImage.getWidth() != 16) {
                    continue;
                }
                if (bufferedImage.getHeight() != 16) {
                    continue;
                }
                int[][] image = new int[16][16];
                for (int x = 0; x < bufferedImage.getWidth(); x++) {
                    for (int y = 0; y < bufferedImage.getHeight(); y++) {
                        image[x][y] = bufferedImage.getRGB(x, y);
                    }
                }
                return image;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    ...

}
```

**Setting the category in an audio channel**

```java
VoicechatServerApi api = ...;
ServerLevel level = ...;
Vec3 pos = ...;
UUID channelID = UUID.randomUUID();

LocationalAudioChannel channel = api.createLocationalAudioChannel(channelID, api.fromServerLevel(level), api.createPosition(pos.x, pos.y, pos.z));
if (channel == null) {
    return;
}
channel.setCategory(MUSIC_DISC_CATEGORY); // The category of the audio channel (registered in the previous code snippet)
channel.setDistance(100); // The distance in which the audio channel can be heard
```