<template>
  <div>
    <h1>Troubleshooting problems</h1>
    <h2>Voice chat unavailable/Voice chat not connected/Plug icon</h2>
    <p>
      The most likely cause of this is that you didn't forward your port
      correctly. Please double check your setup.
    </p>
    <p>
      If you are running your server behind a proxy like BungeeCord or Velocity,
      you may also need to set <code>voice_host</code> to the public IP of the
      server the voice chat is running on.
    </p>
    <p>
      Some servers have a DDoS protection that prevents the voice chat from
      working. If this is the case, please ask your hoster to either disable it
      or to create an exception for the voice chat.
    </p>
    <p>
      This can also be caused by your permissions system not giving players the
      <code>voicechat.connect</code> permission. See
      <a href="?t=permissions">permissions</a> for more information.
    </p>
    <br />
    <h2>Other people can't be heard</h2>
    <p>
      If you can't hear other people talking, you might haven't selected the
      correct sound output device.<br />
      You can select your sound device in the voice chat menu by clicking on the
      <code>Select Speaker</code> button and choosing the correct device.<br />
      You can test if it works by clicking the
      <code>Enable microphone testing</code> button.
    </p>
    <br />
    <h2>Other people can't hear me</h2>
    <p>
      If other people can't hear you, you might haven't selected the correct
      microphone.<br />
      You can select your microphone in the voice chat menu by clicking on the
      <code>Select Microphone</code> button and choosing the correct device.<br />
      You can test if it works by clicking the
      <code>Enable microphone testing</code> button.
    </p>
    <p>
      If you are using MacOS, you need to
      <a href="https://github.com/henkelmax/simple-voice-chat/tree/1.19.2/macos">
        patch your launcher
      </a>
      in order for the game to gain microphone access. The patcher will open
      automatically when the mod detects missing microphone permissions.
    </p>
    <p>
      If you are using version <code>1.x.x</code> of the voice chat or Minecraft
      version <code>1.16.5</code> or lower on MacOS, you need to use the
      <a
        href="https://github.com/henkelmax/simple-voice-chat/tree/1.19.2/macos#standalone-version"
        >standalone version</a
      >
      of the patcher, since it is not included in these versions.
    </p>
    <p>
      If you are on Linux, you can try setting
      <code>java_microphone_implementation</code> to <code>true</code> in the
      client config of the mod. Note that this is not guaranteed to work in all
      cases.
    </p>
    <br />
    <h2>The voice chat is constantly reconnecting</h2>
    <p>
      This is mostly caused by not binding to the correct IP address. See
      <code>bind_address</code> in <a href="?t=configuration">Configuration</a>.
    </p>
    <br />
    <h2>The Server Crashes on Startup (Failed to bind to address)</h2>
    <p>
      This is mostly caused by not binding to the correct IP address. Please try
      the default setting of an empty string or <code>0.0.0.0</code> before
      using a specific address.
      <br />
      If the bind address is already empty or set to <code>0.0.0.0</code>,
      please take a look at the issue below this one (Address already in use).
    </p>
    <br />
    <h2>The Server Crashes on Startup (Address already in use)</h2>
    <p>
      Another program is already using the voice chat port. Make sure you don't
      already have your Minecraft server running and change the voice chat port
      in the mods server config.
    </p>
    <p>
      If you are running multiple servers with voice chat on the same machine,
      you need to select a different voice chat port for every server.
    </p>
    <br />
    <h2>
      Mod 'Simple Voice Chat' (voicechat) requires version XXX or later of mod
      fabric, which is missing!
    </h2>
    <p>
      You need to install the latest version of the
      <a
        href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all"
        >Fabric API</a
      >.
    </p>
    <br />
    <h2>Could not find required mod: voicechat requires {fabricloader ...}</h2>
    <p>
      You need to install the latest version of the
      <a href="https://fabricmc.net/use/">Fabric Loader</a>.
    </p>
    <br />
    <h2>
      Jar at /mods/voicechat-fabric-X.X.X-X.X.X.jar is corrupted, please
      redownload it
    </h2>
    <p>
      Please make sure you actually download the mod from CurseForge or
      Modrinth. If you already did that, please double check that the file has
      not been modified in any way.
    </p>
    <br />
    <h2>The mods config file does not exist</h2>
    <p>
      Make sure the mod is actually installed and you started the client/server
      at least once with the mod added to it.
    </p>
    <br />
    <h2>The changed config values are not affecting the game</h2>
    <p>
      Make sure you actually restarted the client/server after changing anything
      in the config, for it to take effect.
    </p>
    <br />
    <h2>Microphone unavailable</h2>
    <p>
      Try starting your launcher as an administrator. If this doesn't work,
      restart your computer and don't start any other programs other than
      Minecraft, that can use your microphone.
    </p>
    <br />
    <h2>Players can be heard far away/Proximity is not working</h2>
    <p>
      You are most likely just in a group. Leave the group and proximity will
      work fine.
    </p>
  </div>
</template>
