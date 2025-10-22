---
titleTemplate: Simple Voice Chat
aside: false
---

# FAQ

<br/>
<br/>

<FAQ :faq="faq"/>

<ClientOnly>
    <WikiTracker name="faq"/>
</ClientOnly>

<script setup>
const faq = [
  {
    question: "How do I get my logs?",
    answer: 'Read <a href="/minecraft/how_to_get_logs">this</a>.',
  },
  {
    question: "Why am I getting 'Voice chat not connected'?",
    answer: 'You may have not opened the voice chat port on your server. If you are renting a Minecraft server you may need some special configuration. Read the <a href="/minecraft/voicechat/wiki/setup">wiki</a> for more information.',
  },
  {
    question: "I opened the port. Why is it still not working?",
    answer: 'Most hosters require a special setup besides port forwarding. Read the <a href="/minecraft/voicechat/wiki/setup">wiki</a> for more information.',
  },
  {
    question: "How do I open the voice chat port?",
    answer: `
If you are hosting your server with a Minecraft hosting provider, please take look at <a href="/minecraft/voicechat/wiki/server_setup_mc_hosting">this</a>.
If your hoster is not listed here, please ask the support of your hoster for help.
<br/>
If you are hosting the server on your local machine or a self hosted server, take a look at <a href="/minecraft/voicechat/wiki/server_setup_self_hosted">this</a>.
`,
  },
  {
    question: "How can I submit a setup guide for a specific server hoster?",
    answer: 'Read <a href="/minecraft/voicechat/wiki/submit_hoster">this</a>.',
  },
  {
    question: "Can vanilla clients still join when the voice chat mod is installed on the server?",
    answer: "Yes, vanilla clients can join the server, as long as you haven't enabled the option <code>force_voice_chat</code> in the voice chat server config.",
  },
  {
    question: "Does this work with LAN worlds/singleplayer?",
    answer: "Yes, you can use the voice chat in singleplayer and in LAN worlds. But it's recommended to use a dedicated server if you want to play with other people.",
  },
  {
    question: "Am I allowed to use this mod in a modpack?",
    answer: "Yes. But please make sure to give credit.",
  },
  {
    question: "Does the mod/plugin also need to be installed on the server for it to work?",
    answer: "Yes! You can still join servers without the mod installed on your server, but you won't be able to use any of the mod's features.",
  },
  {
    question: "Does the mod also need to be installed on the client for it to work?",
    answer: "You can still join servers without the mod installed on your client, but you won't be able to use any of the mod's features.",
  },
  {
    question: "Can I join a server that uses another mod loader than my client?",
    answer: "Yes, all mod/plugin loaders are cross compatible.",
  },
  {
    question: "Does this work on Realms?",
    answer: "No. Realms can't be modded.",
  },
  {
    question: "Does this work on Bedrock edition?",
    answer: "No. Only on Java edition. It is impossible to implement a voice chat in bedrock edition due to technical limitations.",
  },
  {
    question: "Does this mod require something like Discord or Mumble installed?",
    answer: "No. It works completely standalone.",
  },
  {
    question: "Are different mod/plugin versions compatible with each other?",
    answer: 'Sometimes yes. But to have the best experience, it is recommended to use the exact same version on all clients and the server. For more information read <a href="/minecraft/voicechat/wiki/compatibility">this</a>.',
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
    question: "Does this work with Mohist/Arclight/Magma/Cardboard or any other hybrid server?",
    answer: `We generally don't provide support any hybrid servers. For more information read <a href="https://essentialsx.net/do-not-use-mohist.html">this</a>.`,
  },
  {
    question: "Are custom clients like Feather or Lunar supported?",
    answer: `No, we do not provide <b>any</b> support for custom clients.<br>Report all issues you have directly to their support. Also see <a href="https://www.lunarclient.com/news/how-to-add-your-own-mods-to-lunar-client">lunars</a> and <a href="https://news.feathermc.com/how-to-debug-crashing-client-issues/">feathers</a> pages about dealing with adding mods to their clients.<br><b>Do NOT contact the Simple Voice Chat support if you are using a custom client!</b>`,
  },
  {
    question: "Does this work with tunneling or world hosting services like playit.gg, Essential, e4mc, World Host or Localtonet?",
    answer: `These services are not officially supported by us, as these setups are overly complex, require advanced technical expertise, and are prone to configuration errors.`,
  },
  {
    question: "Does this mod work with TCPShield?",
    answer: `Yes, but only with their paid plan and you need to contact their support.`,
  },
  {
    question: "Does the voice chat activate Sculk sensors?",
    answer: `Not by default. You need to install an <a href="https://modrinth.com/mod/voice-chat-interaction">additional mod</a> to add this feature.`,
  },
  {
    question: "Can I request new features?",
    answer: `If you consider this feature to be essential enough to be included in the base mod, you can suggest it on the Discord server. In all other cases you can use the <a href="/minecraft/voicechat/api/overview">API</a> to add this feature yourself.`,
  },
  {
    question: "Can you add compatibility with mod XY?",
    answer: `The base mod will not add any integration with other mods. With the <a href="/minecraft/voicechat/api/overview">API</a>, everyone can create an addon mod or integrate the API into an existing mod.`,
  },
  {
    question: "Is it possible to host the voice chat server standalone?",
    answer: `No. The voice chat needs to use Minecrafts builtin networking to exchange some information, the voice chat server also requires information thats only present on the server.`,
  },
  {
    question: "Are vanish plugins compatible with the voice chat?",
    answer: `Yes! Starting with version 2.6.0 the voice chat server hides vanished players from the adjust volume list. Note that this only works with Minecraft 1.18.2 and newer.`,
  },
];
</script>
