---
titleTemplate: Simple Voice Chat
---

# FAQ

<br/>
<br/>

<FAQ :faq="faq"/>

<script setup>
const faq = [
  {
    question:
      "Voice chat not connected",
    answer:
      'You may have not opened the voice chat port on your server. You sometimes also need to bind the voice chat server to a specific IP, but that depends on your server hoster. Read the <a href="/minecraft/voicechat/wiki/setup">wiki</a> for more information.',
  },
  {
    question: "I forwarded the port and it still does not work.",
    answer:
      'You sometimes also need to bind the voice chat server to a specific IP. In this case you have to ask your server hoster. You can set the IP to bind to in the server config of the mod. Read the <a href="/minecraft/voicechat/wiki/setup">wiki</a> for more information.',
  },
  {
    question: "How do I open the voice chat port?",
    answer: `
If you are hosting your server with a Minecraft hosting provider, please take look at the <a href="https://discord.gg/4dH2zwTmyX">Simple Voice Chat Discord Server</a> in the text channel <code>#SERVER-HOSTING</code>.
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
    question: "I can't find the voice chat port in the 'server.properties'.",
    answer:
      "This option is NOT located in the 'server.properties'. It is located in the mods server config. For more information read the FAQ entry on how to find the mod configs.",
  },
  {
    question:
      "Can I use the Fabric client on a Forge server? / Can I use the Forge client on a Fabric server?",
    answer: "Yes, this works in versions 2.1.0 and newer.",
  },
  {
    question: "Does this work with LAN worlds/singleplayer?",
    answer:
      "Yes, starting from version 2.1.1, you can use the voice chat in singleplayer and in LAN worlds.",
  },
  {
    question: "Is there a tutorial video on how to set up the voice chat?",
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
    question: "Does this work with Mohist?",
    answer: `No. We generally don't support any hybrid servers. For more information read <a href="https://essentialsx.net/do-not-use-mohist.html">this</a>.`,
  },
  {
    question: "Does this work with Magma?",
    answer: `No. We generally don't support any hybrid servers.`,
  },
  {
    question: "Does this work with Cardboard?",
    answer: `No.`,
  },
  {
    question: "Does this work with hybrid servers?",
    answer: `No. We generally don't support any hybrid servers.`,
  },
  {
    question: "Can I use this mod with Lunar Client?",
    answer: `No.`,
  },
  {
    question: "Does this mod work with TCPShield?",
    answer: `No. TCPShield only supports TCP.`,
  },
  {
    question: "Does the voice chat activate Sculk sensors?",
    answer: `Not by default. You need to install an <a href="https://modrinth.com/mod/voice-chat-interaction">additional mod</a> to add this feature.`,
  },
  {
    question: "Can I request new features?",
    answer: `If you consider this feature to be essential enough to be included in the base mod, you can suggest it on GitHub or on the Discord server. In all other cases you can use the <a href="https://github.com/henkelmax/simple-voice-chat/blob/1.19.3/api/readme.md">API</a> to add this feature.`,
  },
  {
    question: "Can you add compatibility with mod XY?",
    answer: `The base mod will not add any integration with other mods. With the <a href="https://github.com/henkelmax/simple-voice-chat/blob/1.19.3/api/readme.md">API</a>, everyone can create an addon mod.`,
  },
];
</script>
