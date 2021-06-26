<template>
  <Mod
    title="Simple Voice Chat"
    description="A working voice chat in Minecraft!"
    :logo="require('~/assets/minecraft/voicechat/logo_voicechat.png')"
    id="voicechat"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/all"
    sourcelink="https://github.com/henkelmax/simple-voice-chat"
    issueslink="https://github.com/henkelmax/simple-voice-chat/issues"
    discordlink="https://discord.gg/4dH2zwTmyX"
    :images="images"
    :faq="faq"
    :credits="credits"
  >
    <v-container slot="overview">
      <p>
        <span>
          This mod adds a proximity voice chat to your Minecraft server. You can
          choose between push to talk (PTT) or voice activation. The default PTT
          key is <code>CAPS LOCK</code>, but it can be changed in the controls.
          You can access the voice chat settings by pressing the
          <code>V</code> key.
        </span>
      </p>
      <br />
      <h2>Features</h2>
      <ul>
        <li><span>Proximity voice chat</span></li>
        <li><span>Group chats</span></li>
        <li>
          <span><a href="https://opus-codec.org/">Opus Codec</a></span>
        </li>
        <li><span>Push to talk</span></li>
        <li><span>Voice activation</span></li>
        <li><span>Configurable PTT key</span></li>
        <li><span>Test microphone playback</span></li>
        <li>
          <span>Indicator on the screen when you are talking</span>
        </li>
        <li>
          <span>Indicator next to players names when they are talking</span>
        </li>
        <li><span>Configurable distance</span></li>
        <li><span>Mute other players</span></li>
        <li>
          <span>Adjust the volume of other players</span>
        </li>
        <li><span>Microphone amplification</span></li>
        <li><span>Semi 3D sound</span></li>
        <li><span>AES encryption</span></li>
        <li><span>Configurable voice quality</span></li>
        <li>
          <span>Configurable network port</span>
        </li>
      </ul>
      <br />
      <h2>Icons</h2>
      <p>
        <span>
          When other players talk in the voice chat, you see a little speaker
          icon next to their name.
        </span>
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_1.png')"
      ></v-img>
      <br />
      <p>
        <span>
          When you are talking (Either PTT or voice activation), you see a
          little microphone icon in the bottom left corner of your screen.
        </span>
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_2.png')"
      ></v-img>
      <br />
      <p>
        <span>
          If a player deactivated their voice chat, you see a striked out icon
          next to their name.
        </span>
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_3.png')"
      ></v-img>
      <br />
      <p>
        <span>
          You are seeing the same icon in the bottom left corner of your screen
          if you deactivate the voice chat yourself.
        </span>
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_4.png')"
      ></v-img>
      <br />
      <p>
        <span>
          If you mute your microphone (Voice activation only), you will also see
          an indicator icon on your screen.
        </span>
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_5.png')"
      ></v-img>
      <br />
      <p>
        <span
          >If you or another player loses the connection to the voice chat they
          will have an icon indicating that. You will also see this icon if a
          player does not have this mod installed.
        </span>
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_6.png')"
      ></v-img>
      <br />
      <h2>Key Bindings</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Default Key</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Voice Chat GUI</td>
            <td><code>V</code></td>
            <td>Opens the voice chat GUI.</td>
          </tr>
          <tr>
            <td>Voice Chat Settings</td>
            <td><i>Not bound by default</i></td>
            <td>Opens the voice chat settings.</td>
          </tr>
          <tr>
            <td>Group Chats</td>
            <td><code>G</code></td>
            <td>Opens the group chat GUI.</td>
          </tr>
          <tr>
            <td>Push To Talk</td>
            <td><code>CAPS LOCK</code></td>
            <td>
              The push to talk key (Only when using activation
              type&nbsp;<code>PTT</code>).
            </td>
          </tr>
          <tr>
            <td>Mute Microphone</td>
            <td><code>M</code></td>
            <td>
              The mute button (Only when using voice activation
              type&nbsp;<code>Voice</code>).
            </td>
          </tr>
          <tr>
            <td>Disable Voice Chat</td>
            <td><code>N</code></td>
            <td>
              This button disables the voice chat. Other people can't hear you
              and you can't hear them.
            </td>
          </tr>
          <tr>
            <td>Hide Voice Chat Icons</td>
            <td><code>H</code></td>
            <td>
              This button hides all icons related to the voice chat. This does
              not affect any other functionalities.
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <h2>The GUI</h2>
      <p>
        <span>
          You can open the voice chat GUI by pressing the <code>V</code> key.
          This allows you to open the settings, group chats, mute yourself,
          disable the voice chat and hide all icons.
        </span>
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_9.png')"
      ></v-img>
      <br />
      <h2>Group Chats</h2>
      <p>
        <span>
          Group chats allow you to talk to players that are not in your
          vicinity. To open the group chat interface, either press the group
          button in the voice chat GUI or just press the <code>G</code> key.
        </span>
      </p>
      <p>
        <span>
          To create a new group, just type a name in the text field and press
          the button next to it.
        </span>
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_10.png')"
      ></v-img>
      <p>
        <span>
          To join an already existing group, click the group in the list below
          the text field.
        </span>
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_11.png')"
      ></v-img>
      <p>
        <span>
          Creating or joining a group will bring you into the group chat
          interface. You will also see the heads of the group members in the top
          left corner of your screen. Talking players will be outlined. You can
          disable these icons by pressing the third button from the left.
        </span>
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_12.png')"
      ></v-img>
      <p>
        <span>
          Players that are not in a group will see a group icon next to your
          head, indicating that they can't talk to you. You can invite players
          to your group chat by entering the command
          <code>/voicechat invite &lt;playername&gt;</code>.
        </span>
      </p>
      <br />
      <h2>Settings</h2>
      <p>
        <span>
          You can access the voice chat GUI by pressing the <code>V</code> key
          and pressing the settings button.
        </span>
      </p>
      <p>
        <span>
          This menu offers the ability to change the general voice chat volume
          and your microphone amplification. In addition, there is the
          possibility to specify the recording and playback device.
        </span>
      </p>
      <p>
        <span>
          By clicking the 'Enable microphone testing' button, you can hear your
          own voice and adjust the activation level of the voice activation.
        </span>
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_7.png')"
      ></v-img>
      <p>
        <span>
          By pressing the 'Adjust player volumes' in the voice chat settings,
          you can adjust the individual volumes of each player.
        </span>
      </p>
      <v-img
        :src="require('~/assets/minecraft/voicechat/image_voicechat_8.png')"
      ></v-img>
      <br />
      <h2>Important Notes</h2>
      <p>
        <span>
          You need to open a port on the server. This is port
          <code>24454/udp</code> by default. Without opening this port, the
          voice chat will not work. This port can be changed in the server
          config.
        </span>
      </p>
      <p>
        <span>
          This mod does only work when connected to a dedicated server. You need
          to have this mod installed on the server and the client for it to
          work.
        </span>
      </p>
      <p>
        <span>
          The Fabric version of this mod allows you to join with vanilla
          clients, but you won't be able to use the voice chat features.</span
        >
      </p>
      <p>
        <span>
          The voice chat is encrypted, but I don't guarantee the security of it.
          Use at your own risk!
        </span>
      </p>
    </v-container>
    <template slot="wiki">
      <Wiki :tabs="tabs">
        <template slot="setup">
          <Setup class="pa-6" />
        </template>
        <template slot="troubleshooting">
          <Troubleshooting class="pa-6" />
        </template>
        <template slot="configuration">
          <Configuration class="pa-6" />
        </template>
        <template slot="help">
          <Help class="pa-6" />
        </template>
        <template slot="icons">
          <Icons class="pa-6" />
        </template>
      </Wiki>
    </template>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";
import Wiki from "~/components/Wiki.vue";
import Setup from "~/pages/minecraft/voicechat/Setup.vue";
import Troubleshooting from "~/pages/minecraft/voicechat/Troubleshooting.vue";
import Help from "~/pages/minecraft/voicechat/Help.vue";
import Configuration from "~/pages/minecraft/voicechat/Configuration.vue";
import Icons from "~/pages/minecraft/voicechat/Icons.vue";

export default {
  data() {
    return {
      images: [
        require("~/assets/minecraft/voicechat/image_voicechat_1.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_2.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_3.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_4.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_5.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_6.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_7.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_8.png"),
      ],
      faq: [
        {
          question:
            "I can't use the voice chat/There is a message 'Voice chat unavailable'",
          answer:
            "You may have not opened the voice chat port on your server. You sometimes also need to bind the voice chat server to a specific IP, but that depends on your server hoster. Read the wiki for more information.",
        },
        {
          question: "I forwarded the port and it still does not work.",
          answer:
            "You sometimes also need to bind the voice chat server to a specific IP. In this case you have to ask your server hoster. You can set the IP to bind to in the server config of the mod. Read the wiki for more information.",
        },
        {
          question: "How do I open the voice chat port?",
          answer:
            "If you are hosting a server you should already know that. Ask your server hoster or use the internet to search for a solution.",
        },
        {
          question: "Does this work on Bukkit/Spigot/Paper?",
          answer:
            "No. But there are plenty of projects that allow you to install Forge or Fabric mods alongside with Bukkit/Spigot/Paper plugins.",
        },
        {
          question:
            "Can vanilla clients still join when the voice chat mod is installed on the server?",
          answer:
            "For the Fabric version, yes. But the Forge version needs the mod to be installed on the client and the server.",
        },
        {
          question:
            "I can't find the voice chat port in the 'server.properties'.",
          answer:
            "This option is NOT located in the 'server.properties'. It is located in the mods server config. For more information read the FAQ entry on how to find the mod configs.",
        },
        {
          question:
            "Can I use the Fabric client on a Forge server?/Can I use the Forge client on a Fabric server?",
          answer: "No. This doesn't work.",
        },
        {
          question: "Does this work with LAN worlds?",
          answer: "No. It only works with dedicated servers.",
        },
        {
          question:
            "Can you make a tutorial video on how to set up the voice chat?",
          answer:
            "No. What you need to do is different for every setup/server hoster. The best way to get it to work is to read the wiki.",
        },
        {
          question:
            "Does the mod also need to be installed on the server?",
          answer:
            "Yes!",
        },
        {
          question:
            "Does the mod also need to be installed on the client?",
          answer:
            "Yes!",
        },
        {
          question:
            "Can I join with a Fabric client on a Forge server or with a Forge client on a Fabric server?",
          answer:
            "No. The server and the client need the same mod version and the same mod loader.",
        },
        {
          question:
            "Does this work on Realms?",
          answer:
            "No. Realms can't be modded.",
        },
        {
          question:
            "Does this work on Bedrock edition?",
          answer:
            "No. Only on Java edition.",
        },
        {
          question:
            "Does this mod require something like Discord or Mumble installed?",
          answer:
            "No. It works completely standalone.",
        },
        {
          question:
            "Are different mod versions compatible with each other?",
          answer:
            "Sometimes yes. But to have the best experience, it is recommended to use the exact same version on all clients and the server.",
        },
      ],
      credits: [
        {
          element: { name: "Icons" },
          name: {
            name: "Stridey",
            link: "https://www.planetminecraft.com/member/stridey/",
          },
        },
        {
          element: {
            name: "Opus Codec",
            link: "https://opus-codec.org/",
          },
          license: {
            name: "3-Clause BSD License",
            link: "https://opus-codec.org/license/",
          },
        },
        {
          element: { name: "Brazilian Portuguese translation" },
          name: {
            name: "Allomere",
            link: "https://github.com/Allomere",
          },
        },
        {
          element: { name: "Italian translation" },
          name: {
            name: "UknownGino",
            link: "https://github.com/UknownGino",
          },
        },
        {
          element: { name: "Dutch translation" },
          name: {
            name: "emielderckx",
            link: "https://github.com/emielderckx",
          },
        },
        {
          element: { name: "Chinese Simplified (China) translation" },
          name: {
            name: "MikhailTapio",
            link: "https://github.com/MikhailTapio",
          },
        },
        {
          element: { name: "Russian translation" },
          name: {
            name: "Strongleong",
            link: "https://github.com/Strongleong",
          },
        },
        {
          element: { name: "Catalan translation" },
          name: {
            name: "JoanVC100",
            link: "https://github.com/JoanVC100",
          },
        },
        {
          element: { name: "Polish translation" },
          name: {
            name: "RDKRACZ",
            link: "https://github.com/RDKRACZ",
          },
        },
        {
          element: { name: "Spanish translation" },
          name: {
            name: "zeedif",
            link: "https://github.com/zeedif",
          },
        },
      ],
      tabs: [
        { id: "setup", title: "Voice Chat Setup" },
        { id: "troubleshooting", title: "Troubleshooting Problems" },
        { id: "configuration", title: "Configuration" },
        { id: "help", title: "Help Setting Up Voicechat" },
        { id: "icons", title: "Icons" },
      ],
    };
  },
  components: {
    Mod,
    Wiki,
    Setup,
    Help,
    Configuration,
    Icons,
    Troubleshooting,
  },
};
</script>
