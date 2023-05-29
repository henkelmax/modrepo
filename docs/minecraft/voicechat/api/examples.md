---
titleTemplate: Simple Voice Chat
---

# Examples

For simplicity, all examples are using [official mappings](https://minecraft.fandom.com/wiki/Obfuscation_map).

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

    public static String MUSIC_DISC_CATEGORY = "music_discs"; // This ID must be unique. If a category with the same ID already exists, the category will be replaced

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
channel.setCategory(MUSIC_DISC_CATEGORY); // The category of the audio channel (Registered in the previous code snippet)
channel.setDistance(100); // The distance in which the audio channel can be heard
```

## Audio Senders

Audio senders act as a player that is sending audio to the server.
This only works for players that don't actually have the mod installed.
Only one audio sender can be registered per player.
The registration of the audio sender will fail if the player already has an audio sender registered or the player is using the voice chat mod.

**Registering an audio sender and sending audio**

```java
VoicechatServerApi api = ...;
VoicechatConnection connection = ...; // The connection of the player that should act as the sender of the audio

AudioSender sender = api.createAudioSender(connection);

if (!api.registerAudioSender(sender)) {
    // The audio sender could not be registered
    return; 
}

sender.whispering(true); // Acts as the player would be whispering

if (!sender.canSend()) {
    // The audio sender can not send audio
    // This either means the player has the voice chat mod installed or the player already has an audio sender registered
    return;
}

while (...) {
    byte[] opusEncodedAudioData = ...; // The opus encoded audio samples
    
    if (!sender.send(opusEncodedAudioData)) {
        break; // The audio sender can not send audio
    }

    // Wait for the next audio packet to be sent
    // You need to time the audio packets yourself
    // If you send audio packets too fast, some packets may be discarded by the client
}

sender.reset(); // Resets the audio sender, indicating to the client that the end of a continuous audio stream was reached

...

api.unregisterAudioSender(sender); // Unregisters the audio sender. If if its not unregistered, no other plugins can register an audio sender for this player
```
