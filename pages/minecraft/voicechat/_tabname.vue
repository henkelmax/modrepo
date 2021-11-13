<template>
  <v-container>
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
            This mod adds a proximity voice chat to your Minecraft server. You
            can choose between push to talk (PTT) or voice activation. The
            default PTT key is <kbd>CAPS LOCK</kbd>, but it can be changed in
            the controls. You can access the voice chat settings by pressing the
            <kbd>V</kbd> key.
          </span>
        </p>
        <br />
        <h2>Features</h2>
        <ul>
          <li><span>Proximity voice chat</span></li>
          <li><span>Password protected group chats</span></li>
          <li>
            <span><a href="https://opus-codec.org/">Opus Codec</a></span>
          </li>
          <li>
            <span
              ><a href="https://jmvalin.ca/demo/rnnoise/">RNNoise</a> recurrent
              neural network noise suppression</span
            >
          </li>
          <li><span>OpenAL Audio</span></li>
          <li>
            <span
              >Cross compatibility between Fabric, Forge, Bukkit, Spigot and
              Paper</span
            >
          </li>
          <li>
            <span>
              Compatibility with
              <a
                href="https://www.curseforge.com/minecraft/mc-mods/sound-physics-remastered"
              >
                Sound Physics Remastered
              </a>
            </span>
          </li>
          <li>
            <span>
              Compatibility with
              <a
                href="https://www.curseforge.com/minecraft/mc-mods/sound-physics-fabric"
              >
                Sound Physics Fabric
              </a>
              (Not recommended)
            </span>
          </li>
          <li>
            <span>
              Compatibility with
              <a href="https://www.curseforge.com/minecraft/mc-mods/modmenu">
                ModMenu</a
              >

              (Use
              <a
                href="https://www.curseforge.com/minecraft/mc-mods/cloth-config"
              >
                ClothConfig</a
              >
              for a better configuration UI)
            </span>
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
          <li><span>Configurable voice distance</span></li>
          <li><span>Whispering</span></li>
          <li><span>Mute other players</span></li>
          <li>
            <span>Adjust the volume of other players</span>
          </li>
          <li><span>Microphone amplification</span></li>
          <li><span>3D sound</span></li>
          <li><span>AES encryption</span></li>
          <li>
            <span>Configurable network port</span>
          </li>
          <li><span>Audio recording</span></li>
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
            You are seeing the same icon in the bottom left corner of your
            screen if you deactivate the voice chat yourself.
          </span>
        </p>
        <v-img
          :src="require('~/assets/minecraft/voicechat/image_voicechat_4.png')"
        ></v-img>
        <br />
        <p>
          <span>
            If you mute your microphone (Voice activation only), you will also
            see an indicator icon on your screen.
          </span>
        </p>
        <v-img
          :src="require('~/assets/minecraft/voicechat/image_voicechat_5.png')"
        ></v-img>
        <br />
        <p>
          <span
            >If you or another player loses the connection to the voice chat
            they will have an icon indicating that. You will also see this icon
            if a player does not have this mod installed.
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
              <td><kbd>V</kbd></td>
              <td>Opens the voice chat GUI.</td>
            </tr>
            <tr>
              <td>Voice Chat Settings</td>
              <td><i>Not bound by default</i></td>
              <td>Opens the voice chat settings.</td>
            </tr>
            <tr>
              <td>Group Chats</td>
              <td><kbd>G</kbd></td>
              <td>Opens the group chat GUI.</td>
            </tr>
            <tr>
              <td>Push To Talk</td>
              <td><kbd>CAPS LOCK</kbd></td>
              <td>
                The push to talk key (Only when using activation
                type&nbsp;<kbd>PTT</kbd>).
              </td>
            </tr>
            <tr>
              <td>Mute Microphone</td>
              <td><kbd>M</kbd></td>
              <td>
                The mute button (Only when using voice activation
                type&nbsp;<kbd>Voice</kbd>).
              </td>
            </tr>
            <tr>
              <td>Disable Voice Chat</td>
              <td><kbd>N</kbd></td>
              <td>
                This button disables the voice chat. Other people can't hear you
                and you can't hear them.
              </td>
            </tr>
            <tr>
              <td>Hide Voice Chat Icons</td>
              <td><kbd>H</kbd></td>
              <td>
                This button hides all icons related to the voice chat. This does
                not affect any other functionalities.
              </td>
            </tr>
            <tr>
              <td>Toggle Recording</td>
              <td><i>Not bound by default</i></td>
              <td>Toggles voice chat audio recording.</td>
            </tr>
            <tr>
              <td>Whisper</td>
              <td><i>Not bound by default</i></td>
              <td>Hold down to whisper.</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h2>The GUI</h2>
        <p>
          <span>
            You can open the voice chat GUI by pressing the <kbd>V</kbd> key.
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
            button in the voice chat GUI or just press the <kbd>G</kbd> key.
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
            interface. You will also see the heads of the group members in the
            top left corner of your screen. Talking players will be outlined.
            You can disable these icons by pressing the third button from the
            left.
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
            You can access the voice chat GUI by pressing the <kbd>V</kbd> key
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
            By clicking the 'Enable microphone testing' button, you can hear
            your own voice and adjust the activation level of the voice
            activation.
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
            <code>24454</code> <code>UDP</code> by default. Without opening this
            port, the voice chat will not work. This port can be changed in the
            server config.
          </span>
        </p>
        <p>
          <span>
            The voice chat is encrypted, but I don't guarantee the security of
            it. Use at your own risk!
          </span>
        </p>
      </v-container>
      <template slot="wiki">
        <Wiki :tabs="tabs" @tab="tabChanged">
          <template slot="installation">
            <Installation class="pa-6" />
          </template>
          <template slot="setup">
            <Setup class="pa-6" />
          </template>
          <template slot="troubleshooting">
            <Troubleshooting class="pa-6" />
          </template>
          <template slot="configuration">
            <Configuration class="pa-6" />
          </template>
          <template slot="compatibility">
            <Compatibility class="pa-6" />
          </template>
          <template slot="help">
            <Help class="pa-6" />
          </template>
          <template slot="icons">
            <Icons class="pa-6" />
          </template>
          <template slot="sidebar">
            <v-card-title>Support</v-card-title>
            <div class="text-center">
              <v-btn
                class="mx-2 mb-2"
                outlined
                color="light-blue accent-4"
                small
                depressed
                @click="showSupportKey"
              >
                Generate Support Key
              </v-btn>
            </div>
          </template>
        </Wiki>
      </template>
    </Mod>
    <v-dialog v-model="notReadDialog" max-width="800">
      <v-card color="secondary">
        <v-card-title class="text-h5">
          Please read the wiki before requesting a support key!
        </v-card-title>
        <v-card-text>
          Almost everything you need to know is here.
          <br />
          Please don't request support if you didn't read the wiki or didn't
          understand it.
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="supportKeyDialog" max-width="800">
      <v-card color="secondary">
        <v-card-title class="text-h5"> Your Support Key! </v-card-title>
        <v-card-text>
          Your support key is <code>{{ supportKey }}</code
          >.
          <br />
          Please provide this key in the support template on the
          <a href="https://discord.gg/4dH2zwTmyX">Discord server</a>.
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="confirmDialog" max-width="800">
      <v-card color="secondary">
        <v-card-title class="text-h5"> Did you read the wiki? </v-card-title>
        <v-card-text>
          By clicking 'Accept', you confirm that you really read the wiki and
          your problem is not listed here.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="confirmDialog = false">
            Cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="
              confirm();
              confirmDialog = false;
            "
          >
            Accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";
import Wiki from "~/components/Wiki.vue";
import Installation from "~/pages/minecraft/voicechat/Installation.vue";
import Setup from "~/pages/minecraft/voicechat/Setup.vue";
import Troubleshooting from "~/pages/minecraft/voicechat/Troubleshooting.vue";
import Compatibility from "~/pages/minecraft/voicechat/Compatibility.vue";
import Help from "~/pages/minecraft/voicechat/Help.vue";
import Configuration from "~/pages/minecraft/voicechat/Configuration.vue";
import Icons from "~/pages/minecraft/voicechat/Icons.vue";

export default {
  data() {
    return {
      notReadDialog: false,
      confirmDialog: false,
      supportKeyDialog: false,
      supportKey: null,
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
            "I can't use the voice chat/There is a message 'Voice chat unavailable'/'Voice chat not connected'",
          answer:
            'You may have not opened the voice chat port on your server. You sometimes also need to bind the voice chat server to a specific IP, but that depends on your server hoster. Read the <a href="/minecraft/voicechat/wiki?t=setup">wiki</a> for more information.',
        },
        {
          question: "I forwarded the port and it still does not work.",
          answer:
            'You sometimes also need to bind the voice chat server to a specific IP. In this case you have to ask your server hoster. You can set the IP to bind to in the server config of the mod. Read the <a href="/minecraft/voicechat/wiki?t=setup">wiki</a> for more information.',
        },
        {
          question: "How do I open the voice chat port?",
          answer: `
If you are hosting your server with a Minecraft hosting provider, please take look at the <a href=\"https://discord.gg/4dH2zwTmyX\">Simple Voice Chat Discord Server</a> in the text channel <code>#SERVER-HOSTING</code>.
If your hoster is not listed here, please ask the support of your hoster for help.
<br/>
If you are hosting the server on your local machine take a look at <a href="https://www.wikihow.com/Open-Ports">this guide</a>.
`,
        },
        {
          question:
            "Can vanilla clients still join when the voice chat mod is installed on the server?",
          answer:
            "Yes, But in versions older than 2.1.0, the Forge version only works with the mod installed on the client and the server.",
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
          answer: "Yes, this works in versions 2.1.0 and newer.",
        },
        {
          question: "Does this work with LAN worlds/singleplayer?",
          answer:
            "Yes, starting from version 2.1.1, you can use the voice chat in singleplayer and in LAN worlds.",
        },
        {
          question:
            "Is there a tutorial video on how to set up the voice chat?",
          answer:
            'There are some videos, but the setup is different for every hoster, so you need to look for videos that apply to your setup. You can find the videos in the <a href="https://discord.gg/4dH2zwTmyX">Simple Voice Chat Discord Server</a> in the text channels <code>#SERVER-HOSTING</code> and <code>#VIDEOS</code>.',
        },
        {
          question:
            "Does the mod also need to be installed on the server for it to work?",
          answer: "Yes!",
        },
        {
          question:
            "Does the mod also need to be installed on the client for it to work?",
          answer: "Yes!",
        },
        {
          question:
            "Can I join with a Fabric client on a Forge server or with a Forge client on a Fabric server?",
          answer:
            "Yes, but in versions older than 2.1.0, the server and the client need the same mod loader.",
        },
        {
          question: "Does this work on Realms?",
          answer: "No. Realms can't be modded.",
        },
        {
          question: "Does this work on Bedrock edition?",
          answer: "No. Only on Java edition.",
        },
        {
          question:
            "Does this mod require something like Discord or Mumble installed?",
          answer: "No. It works completely standalone.",
        },
        {
          question: "Are different mod versions compatible with each other?",
          answer:
            'Sometimes yes. But to have the best experience, it is recommended to use the exact same version on all clients and the server. For more information read <a href="/minecraft/voicechat/wiki?t=compatibility">this</a>.',
        },
        {
          question: "Does every player need to open the voice chat port?",
          answer: "No. Only the server needs to have the port open.",
        },
        {
          question: "Does this work with ngrok?",
          answer: "No. Ngrok does not support UDP.",
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
          element: { name: "Opus natives for ARM based macs" },
          name: {
            name: "jason-green-io",
            link: "https://github.com/jason-green-io",
          },
        },
        {
          element: {
            name: "RNNoise",
            link: "https://jmvalin.ca/demo/rnnoise/",
          },
          license: {
            name: 'BSD 3-Clause "New" or "Revised" License',
            link: "https://gitlab.xiph.org/xiph/rnnoise/-/blob/master/COPYING",
          },
        },
        {
          element: {
            name: "RNNoise natives",
            link: "https://github.com/mjwells2002/rnnoise-bin",
          },
          name: {
            name: "mjwells2002",
            link: "https://github.com/mjwells2002",
          },
        },
        {
          element: {
            name: "adventure",
            link: "https://github.com/KyoriPowered/adventure",
          },
          license: {
            name: "MIT",
            link: "https://github.com/KyoriPowered/adventure/blob/master/license.txt",
          },
        },
        {
          element: {
            name: "dd-plist",
            link: "https://github.com/3breadt/dd-plist",
          },
          license: {
            name: "Custom",
            link: "https://github.com/3breadt/dd-plist/blob/master/LICENSE.txt",
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
        {
          element: { name: "Russian translation" },
          name: {
            name: "DrHesperus",
            link: "https://github.com/DrHesperus",
          },
        },
        {
          element: { name: "Swedish translation" },
          name: {
            name: "TechnicProblem",
            link: "https://github.com/TechnicProblem",
          },
        },
        {
          element: { name: "Ukrainian translation" },
          name: {
            name: "ProSplash1",
            link: "https://www.curseforge.com/members/prosplash1",
          },
        },
        {
          element: { name: "Japanese translation" },
          name: {
            name: "shonkei",
            link: "https://github.com/shonkei",
          },
        },
      ],
      tabs: [
        { id: "installation", title: "Installation" },
        { id: "setup", title: "Voice Chat Setup" },
        { id: "troubleshooting", title: "Troubleshooting Problems" },
        { id: "configuration", title: "Configuration" },
        { id: "compatibility", title: "Compatibility" },
        { id: "help", title: "Help Setting Up Voicechat" },
        { id: "icons", title: "Icons" },
      ],
    };
  },
  components: {
    Mod,
    Wiki,
    Installation,
    Setup,
    Compatibility,
    Help,
    Configuration,
    Icons,
    Troubleshooting,
  },
  methods: {
    showSupportKey() {
      if (!this.hasReadWiki()) {
        this.notReadDialog = true;
        return;
      }
      this.confirmDialog = true;
    },
    confirm() {
      this.supportKey = this.generateSupportKey();
      this.supportKeyDialog = true;
    },
    tabChanged(tab) {
      let tabs = this.getVisitedTabs();
      if (!tabs.includes(tab)) {
        tabs.push(tab);
        localStorage.visitedTabs = JSON.stringify(tabs);
      }
    },
    getVisitedTabs() {
      let str = localStorage.visitedTabs;
      return str ? JSON.parse(str) : [];
    },
    hasReadWiki() {
      let tabs = this.getVisitedTabs();
      return tabs.includes("setup") && tabs.includes("troubleshooting");
    },
    generateSupportKey() {
      let numbers = [];
      let sum = 0;
      while (sum <= 60) {
        numbers.push(this.getRandomInt(1, 9));
        sum = numbers.reduce((e1, e2) => e1 + e2, 0);
      }

      let rest = 69 - sum;
      if (rest > 0) {
        numbers.push(rest);
      }

      return `S-${numbers.join("")}`;
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>
