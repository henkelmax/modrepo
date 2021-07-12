<template>
  <div>
    <h1>Troubleshooting problems</h1>
    <h2>Voice chat unavailable</h2>
    <p>
      The most likely cause of this is that you didn't forward your port
      correctly. Please double check your setup. Another cause of this is not
      binding to the correct IP address. See <a href="?t=setup">Setup</a> for
      more information.
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
    <br />
    <h2>The voice chat is constantly reconnecting</h2>
    <p>
      This is mostly caused by not binding to the correct IP address. See
      <a href="?t=setup">Setup</a>.
    </p>
    <br />
    <h2>The Server Crashes on Startup (Failed to bind to address)</h2>
    <p>
      This is mostly caused by not binding to the correct IP address. Please try
      the default setting of <code>0.0.0.0</code> before using a specific
      address.
    </p>
    <br />
    <h2>The Server Crashes on Startup (Address already in use)</h2>
    <p>
      Another program is already using the voice chat port. Make sure you don't
      already have your Minecraft server running and change the voice chat port
      in the mods server config.
    </p>
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
    <h2>
      Could not find required mod: voicechat requires {fabricloader ...}
    </h2>
    <p>
      You need to install the latest version of the <a
        href="https://fabricmc.net/use/"
        >Fabric Loader</a
      >.
    </p>
  </div>
</template>
