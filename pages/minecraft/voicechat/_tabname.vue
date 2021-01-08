<template>
  <Mod
    title="Simple Voice Chat"
    description="A working voice chat in Minecraft!"
    :logo="require('~/assets/minecraft/voicechat/logo_voicechat.png')"
    id="voicechat"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/all"
    sourcelink="https://github.com/henkelmax/simple-voice-chat"
    issueslink="https://github.com/henkelmax/simple-voice-chat/issues"
    :images="images"
    :faq="faq"
    :credits="credits"
  >
    <v-container slot="overview">
      <p>
        This mod adds a voice chat to your Minecraft server. You can choose
        between push to talk (PTT) or voice activation. The default PTT key is
        <b>CAPS LOCK</b>, but it can be changed in the controls. When using
        voice activation, you can mute your microphone by pressing the
        <b>M</b> key. You can access the voice chat settings by pressing the
        <b>V</b> key.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Proximity voice chat</li>
        <li>Push to talk</li>
        <li>Voice activation</li>
        <li>Configurable PTT key</li>
        <li>Test microphone playback</li>
        <li>Indicator on the screen when you are talking</li>
        <li>Indicator next to players names when they are talking</li>
        <li>Configurable distance</li>
        <li>Mute other players</li>
        <li>Adjust the volume of other players</li>
        <li>Microphone amplification</li>
        <li>Semi 3D sound</li>
        <li>Configurable sample rate</li>
        <li>Configurable network port</li>
      </ul>
      <br />
      <h2>Voice indicator icons</h2>
      <p>
        When other players talk in the voice chat, you see a little speaker icon
        next to their name.
      </p>
      <p>
        When you are talking (Either PTT or voice activation), you see a little
        microphone icon in the bottom left corner of your screen.
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_1.png')"
      ></v-img>
      <br />
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_2.png')"
      ></v-img>
      <br />
      <h2>Settings</h2>
      <p>
        By clicking the 'Enable microphone testing' button, you can hear your
        own voice and adjust the activation level of the voice activation.
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_3.png')"
      ></v-img>
      <br />
      <p>
        By pressing the 'Adjust player volumes' in the voice chat settings, you
        can adjust the individual volumes of each player.
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_4.png')"
      ></v-img>
      <br />
      <h2>Important Notes</h2>
      <p>
        You need to open a port on the server. This is port
        <b>24454/udp</b> by default. Without opening this port, the voice chat
        will not work. This port can be changed in the server config.
      </p>
      <p>
        This mod does only work when connected to a dedicated server. You need
        to have this mod installed on the server and the client.
      </p>
      <p>The voice chat is NOT encrypted. Use at your own risk!</p>
    </v-container>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";

export default {
  data() {
    return {
      images: [
        require("~/assets/minecraft/voicechat/image_voicechat_1.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_2.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_3.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_4.png"),
      ],
      faq: [
        {
          question:
            "I can't use the voice chat/There is a message 'Voice chat unavailable'",
          answer:
            "You may have not opened the voice chat port on your server. You sometimes also need to bind the voice chat server to a specific IP, but that depends on your server hoster.",
        },
      ],
      credits: [
        {
          element: { name: "Brazilian Portuguese translation" },
          name: {
            name: "Allomere",
            link: "https://github.com/Allomere",
          },
        },
      ],
    };
  },
  components: {
    Mod,
  },
};
</script>
