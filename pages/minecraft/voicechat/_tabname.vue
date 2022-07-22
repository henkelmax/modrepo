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
          This mod adds a proximity voice chat to your Minecraft server. You can
          choose between push to talk (PTT) or voice activation. The default PTT
          key is <kbd>CAPS LOCK</kbd>, but it can be changed in the key bind
          settings. You can access the voice chat settings by pressing the
          <kbd>V</kbd> key.
        </p>
        <p>
          ⚠️ <strong>NOTE</strong> This mod requires special setup on the server
          in order to work. Please read the
          <a href="/minecraft/voicechat/wiki?t=setup">wiki</a>
          for more information.
        </p>

        <h2 id="features">Features</h2>
        <ul>
          <li>Proximity voice chat</li>
          <li>Password protected group chats</li>
          <li><a href="https://opus-codec.org/">Opus codec</a></li>
          <li>
            <a href="https://jmvalin.ca/demo/rnnoise/">RNNoise</a> recurrent
            neural network noise suppression
          </li>
          <li>OpenAL audio</li>
          <li>
            Cross compatibility between Fabric, Forge, Bukkit, Spigot and Paper
          </li>
          <li>
            Compatibility with
            <a href="https://www.curseforge.com/minecraft/mc-mods/modmenu"
              >ModMenu</a
            >
            (Use
            <a href="https://www.curseforge.com/minecraft/mc-mods/cloth-config"
              >ClothConfig</a
            >
            for a better configuration UI)
          </li>
          <li>Push to talk</li>
          <li>Voice activation</li>
          <li>Configurable push to talk key</li>
          <li>Microphone test playback</li>
          <li>Configurable voice distance</li>
          <li>Whispering</li>
          <li>Individual player volume adjustment</li>
          <li>Microphone amplification</li>
          <li>3D sound</li>
          <li>AES encryption</li>
          <li>Audio recording with separate audio tracks</li>
          <li>A powerful <a href="https://github.com/henkelmax/simple-voice-chat/blob/1.19/api/readme.md">API</a></li>
        </ul>
        <br/>

        <h2 id="addons">Addons</h2>

        <v-simple-table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AudioPlayer</td>
              <td>Allows putting custom audio files on music discs</td>
              <td>
                <a
                  href="https://www.curseforge.com/minecraft/mc-mods/audioplayer"
                  >CurseForge</a
                >, <a href="https://modrinth.com/mod/audioplayer">Modrinth</a>,
                <a href="https://github.com/Navoei/CustomDiscs"
                  >Third party Bukkit port</a
                >
              </td>
            </tr>
            <tr>
              <td>Voice Chat Interaction</td>
              <td>Voice chat skulk sensor activation and warden detection</td>
              <td>
                <a href="https://modrinth.com/mod/voice-chat-interaction"
                  >Modrinth</a
                >,
                <a href="https://github.com/henkelmax/voicechat-interaction"
                  >GitHub</a
                >,
                <a
                  href="https://github.com/iGalaxyYT/voicechat-interaction-paper"
                  >Third party Paper port</a
                >
              </td>
            </tr>
            <tr>
              <td>Sound Physics Remastered</td>
              <td>Sound Physics for Simple Voice Chat</td>
              <td>
                <a
                  href="https://www.curseforge.com/minecraft/mc-mods/sound-physics-remastered"
                  >CurseForge</a
                >,
                <a href="https://modrinth.com/mod/sound-physics-remastered"
                  >Modrinth</a
                >
              </td>
            </tr>
            <tr>
              <td>Replay Voice Chat</td>
              <td>
                A compatibility mod to record Simple Voice Chat with ReplayMod
              </td>
              <td>
                <a
                  href="https://www.curseforge.com/minecraft/mc-mods/replay-voice-chat"
                  >CurseForge</a
                >,
                <a href="https://modrinth.com/mod/replay-voice-chat"
                  >Modrinth</a
                >
              </td>
            </tr>
            <tr>
              <td>Voice Chat Broadcast</td>
              <td>Broadcast your voice to everyone</td>
              <td>
                <a
                  href="https://github.com/henkelmax/voicechat-broadcast-plugin"
                  >GitHub</a
                >
              </td>
            </tr>
            <tr>
              <td>Simple Voice Chat Instant Groups</td>
              <td>Adds nearby players to a group</td>
              <td>
                <a href="https://github.com/henkelmax/instant-group">GitHub</a>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
        <br/>

        <h2 id="icons">Icons</h2>
        <table>
          <thead>
            <tr>
              <th style="text-align: center">Icon</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center">
                <v-img
                  :src="
                    require('~/assets/minecraft/voicechat/image_voicechat_1.png')
                  "
                ></v-img>
              </td>
              <td>You are talking</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <v-img
                  :src="
                    require('~/assets/minecraft/voicechat/image_voicechat_2.png')
                  "
                ></v-img>
              </td>
              <td>You are whispering</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <v-img
                  :src="
                    require('~/assets/minecraft/voicechat/image_voicechat_3.png')
                  "
                ></v-img>
              </td>
              <td>Player is talking</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <v-img
                  :src="
                    require('~/assets/minecraft/voicechat/image_voicechat_4.png')
                  "
                ></v-img>
              </td>
              <td>Player is whispering</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <v-img
                  :src="
                    require('~/assets/minecraft/voicechat/image_voicechat_5.png')
                  "
                ></v-img>
              </td>
              <td>Microphone muted</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <v-img
                  :src="
                    require('~/assets/minecraft/voicechat/image_voicechat_6.png')
                  "
                ></v-img>
              </td>
              <td>Voice chat disabled</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <v-img
                  :src="
                    require('~/assets/minecraft/voicechat/image_voicechat_7.png')
                  "
                ></v-img>
              </td>
              <td>Voice chat not connected<br />Voice chat not installed</td>
            </tr>
          </tbody>
        </table>
        <br/>

        <h2 id="the-gui">The GUI</h2>
        <p>
          You can open the voice chat GUI by pressing the <kbd>V</kbd> key. This
          allows you to open the settings, group chats, mute yourself, disable
          the voice chat, start/stop a recording and hide all icons.
        </p>
        <p>
          <v-img
            :src="require('~/assets/minecraft/voicechat/image_voicechat_8.png')"
          ></v-img>
        </p>
        <h3 id="group-chats">Group Chats</h3>
        <p>
          Group chats allow you to talk to players that are not in your
          vicinity. To open the group chat interface, either press the group
          button in the voice chat GUI or just press the <kbd>G</kbd> key.
        </p>
        <p>
          To create a new group, just type a name in the text field and press
          the button next to it.
        </p>
        <p>
          <v-img
            :src="require('~/assets/minecraft/voicechat/image_voicechat_9.png')"
          ></v-img>
        </p>
        <p>
          Creating or joining a group will bring you into the group chat
          interface. You will also see the heads of the group members in the top
          left corner of your screen. Talking players will be outlined. You can
          disable these icons by pressing the third button from the left.
        </p>
        <p>
          <v-img
            :src="
              require('~/assets/minecraft/voicechat/image_voicechat_10.png')
            "
          ></v-img>
        </p>
        <p>
          Players that are not in a group will see a group icon next to your
          head, indicating that they can&#39;t talk to you.
        </p>
        <p>
          You can invite players to your group chat by entering the command
          <code>/voicechat invite &lt;playername&gt;</code>.
        </p>
        <h3 id="settings">Settings</h3>
        <p>
          You can access the voice chat GUI by pressing the <kbd>V</kbd> key and
          pressing the settings button.
        </p>
        <p>
          This menu offers the ability to change the general voice chat volume
          and your microphone amplification. In addition, there is the
          possibility to specify the recording and playback device.
        </p>
        <p>
          By clicking the &#39;Enable microphone testing&#39; button, you can
          hear your own voice and adjust the activation level of the voice
          activation.
        </p>
        <p>
          <v-img
            :src="
              require('~/assets/minecraft/voicechat/image_voicechat_11.png')
            "
          ></v-img>
        </p>
        <h2 id="key-bindings">Key Bindings</h2>
        <v-simple-table>
          <thead>
            <tr>
              <th>Name</th>
              <th style="text-align: center">Default Key</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Voice Chat GUI</td>
              <td style="text-align: center"><kbd>V</kbd></td>
              <td>Opens the voice chat GUI.</td>
            </tr>
            <tr>
              <td>Voice Chat Settings</td>
              <td style="text-align: center"><em>Not bound by default</em></td>
              <td>Opens the voice chat settings.</td>
            </tr>
            <tr>
              <td>Group Chats</td>
              <td style="text-align: center"><kbd>G</kbd></td>
              <td>Opens the group chat GUI.</td>
            </tr>
            <tr>
              <td>Push To Talk</td>
              <td style="text-align: center"><kbd>CAPS LOCK</kbd></td>
              <td>
                The push to talk key (Only when using activation type
                <code>PTT</code>).
              </td>
            </tr>
            <tr>
              <td>Mute Microphone</td>
              <td style="text-align: center"><kbd>M</kbd></td>
              <td>
                The mute button (Only when using voice activation type
                <code>Voice</code>).
              </td>
            </tr>
            <tr>
              <td>Disable Voice Chat</td>
              <td style="text-align: center"><kbd>N</kbd></td>
              <td>
                This button disables the voice chat. Other people can&#39;t hear
                you and you can&#39;t hear them.
              </td>
            </tr>
            <tr>
              <td>Hide Voice Chat Icons</td>
              <td style="text-align: center"><kbd>H</kbd></td>
              <td>This button hides all icons related to the voice chat.</td>
            </tr>
            <tr>
              <td>Toggle Recording</td>
              <td style="text-align: center"><em>Not bound by default</em></td>
              <td>Toggles voice chat audio recording.</td>
            </tr>
            <tr>
              <td>Whisper</td>
              <td style="text-align: center"><em>Not bound by default</em></td>
              <td>Hold down to whisper.</td>
            </tr>
          </tbody>
        </v-simple-table>
        <p>
          You can change every key binding in the Minecraft key binding
          settings.
        </p>
        <h2 id="important-notes">Important Notes</h2>
        <p>
          You need to open a port on the server. This is port
          <code>24454</code> <code>UDP</code> by default. Without opening this
          port, the voice chat will not work. This port can be changed in the
          server config. More information
          <a href="/minecraft/voicechat/wiki?t=setup">here</a>.
        </p>
        <p>
          The voice chat is encrypted, but we don&#39;t guarantee the security
          of it. Use at your own risk!
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
          <template slot="supported_versions">
            <SupportedVersions class="pa-6" />
          </template>
          <template slot="commands">
            <Commands class="pa-6" />
          </template>
          <template slot="permissions">
            <Permissions class="pa-6" />
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
          Please don't request support if you didn't read the wiki.
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
import Configuration from "~/pages/minecraft/voicechat/Configuration.vue";
import SupportedVersions from "~/pages/minecraft/voicechat/SupportedVersions.vue";
import Commands from "~/pages/minecraft/voicechat/Commands.vue";
import Permissions from "~/pages/minecraft/voicechat/Permissions.vue";
import Icons from "~/pages/minecraft/voicechat/Icons.vue";

export default {
  data() {
    return {
      notReadDialog: false,
      confirmDialog: false,
      supportKeyDialog: false,
      supportKey: null,
      images: [
        require("~/assets/minecraft/voicechat/image_voicechat_8.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_9.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_10.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_11.png"),
        require("~/assets/minecraft/voicechat/image_voicechat_12.png"),
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
        {
          question: "Does this work with MohistMC?",
          answer: `No. For more information read <a href="https://essentialsx.net/do-not-use-mohist.html">this</a>.`,
        },
        {
          question: "Does this work with Cardboard?",
          answer: `No.`,
        },
        {
          question: "Can you use this mod with Lunar Client?",
          answer: `No.`,
        },
        {
          question: "Does the voice chat activate Sculk sensors?",
          answer: `Not by default. You need to install an <a href="https://modrinth.com/mod/voice-chat-interaction">additional mod</a> to add this feature.`,
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
            name: "Opus natives",
            link: "https://github.com/mjwells2002/libopus-bin",
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
          element: {
            name: "commodore",
            link: "https://github.com/lucko/commodore",
          },
          license: {
            name: "MIT",
            link: "https://github.com/lucko/commodore/blob/master/LICENSE.txt",
          },
        },
        {
          element: {
            name: "Concentus",
            link: "https://github.com/lostromb/concentus",
          },
          license: {
            name: "Custom",
            link: "https://github.com/lostromb/concentus/blob/master/LICENSE",
          },
        },
        {
          element: {
            name: "MacOS microphone workaround",
          },
          name: {
            name: "mjwells2002",
            link: "https://github.com/mjwells2002",
          },
        },
        {
          element: {
            name: "MacOS microphone workaround",
          },
          name: {
            name: "cbyrneee",
            link: "https://github.com/cbyrneee",
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
        {
          element: { name: "Chinese Simplified (China) translation" },
          name: {
            name: "XmLinkia",
            link: "https://github.com/XmLinkia",
          },
        },
        {
          element: { name: "Korean translation" },
          name: {
            name: "gyular",
            link: "https://github.com/gyular",
          },
        },
        {
          element: { name: "Polish translation" },
          name: {
            name: "joker876",
            link: "https://github.com/joker876",
          },
        },
        {
          element: { name: "Czech translation" },
          name: {
            name: "HonzaVinCZ",
            link: "https://github.com/HonzaVinCZ",
          },
        },
        {
          element: { name: "Chinese Simplified (China) translation" },
          name: {
            name: "IceBingQI",
            link: "https://github.com/IceBingQI",
          },
        },
        {
          element: { name: "Brazilian Portuguese translation" },
          name: {
            name: "Sanadriell",
            link: "https://github.com/Sanadriell",
          },
        },
        {
          element: { name: "Russian translation" },
          name: {
            name: "Syorito Hatsuki",
            link: "https://github.com/syorito-hatsuki",
          },
        },
      ],
      tabs: [
        { id: "installation", title: "Installation" },
        { id: "setup", title: "Voice Chat Setup" },
        { id: "troubleshooting", title: "Troubleshooting Problems" },
        { id: "configuration", title: "Configuration" },
        { id: "compatibility", title: "Compatibility" },
        { id: "supported_versions", title: "Supported Versions" },
        { id: "commands", title: "Commands" },
        { id: "permissions", title: "Permissions" },
        { id: "icons", title: "Icons" },
      ],
    };
  },
  components: {
    Mod,
    Wiki,
    Installation,
    Setup,
    Troubleshooting,
    Compatibility,
    Configuration,
    SupportedVersions,
    Commands,
    Permissions,
    Icons,
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
