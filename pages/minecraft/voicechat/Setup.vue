<template>
  <div>
    <h1>Setup</h1>
    <ul>
      <li>
        Make sure you opened the voice chat port on your server (<code
          >24454/udp</code
        >
        by default)
        <ul>
          <li>
            You can change the port in the server config (<code>port</code>)
          </li>
        </ul>
      </li>
      <li>
        Some Minecraft server hosters or servers with multiple network adapters require you to bind the voice chat to a
        specific IP address
        <ul>
          <li>
            You can set this address in the server config
            (<code>bind_address</code>)
          </li>
          <li>
            Use <code>0.0.0.0</code> to not bind to a specific address (This is
            the default value)
          </li>
          <li>Don't use this option if you don't know what you are doing</li>
        </ul>
      </li>
    </ul>
    <br />
    <h3>Testing the voice chat connection</h3>
    <p>
      You can test the voice chat connection of a specific player by typing the
      command <code>/voicechat test &lt;PLAYERNAME&gt;</code>.<br />
      If you are submitting a bug report, please include the logs of the server
      and the client that you tested. But please don't submit a bug report just
      because your voice chat is not connected.
    </p>
    <br />
    <h2>Troubleshooting problems</h2>
    <h3>Voice chat unavailable</h3>
    <p>
      If you see a message <code>Voice Chat Unavailable</code> or a striked through plug icon when trying to
      use the voice chat, try the following steps:
    </p>
    <ul>
      <li>
        Install Netcat on your server and your client
        <ul>
          <li>On Linux and MacOS, Netcat should be pre installed</li>
          <li>
            On Windows download Netcat
            <a href="https://joncraton.org/blog/46/netcat-for-windows/">here</a>
            or from any other site
          </li>
        </ul>
      </li>
      <li>
        On your server run <code>nc -lup &lt;YOUR VOICECHAT PORT&gt;</code>
      </li>
      <li>
        On your client run
        <code
          >nc -u &lt;YOUR SERVER ADDRESS&gt; &lt;YOUR VOICECHAT PORT&gt;</code
        >
      </li>
      <li>
        Now type any text into the command line of your client and press enter
      </li>
      <li>The text should now appear on the command line of your server</li>
      <li>
        Do the same thing on the server and look for the output on the client
      </li>
      <li>
        If this does not work, you have not opened your voice chat port
        correctly or you have not bound the voice chat to the correct IP address
      </li>
    </ul>
    <p>
      Obviously if you are using a Minecraft server hoster, you are not able to
      do these steps. In this case please ask your Minecraft server provider or
      look for information to that topic on their website.
    </p>
    <br />
    <h3>Other people can't be heard</h3>
    <p>
      If you can't hear other people talking, you might haven't selected the
      correct sound output device.<br />
      You can select your sound device in the voice chat menu by clicking on the
      <code>Select Speaker</code> button and choosing the correct device.<br />
      You can test if it works by clicking the
      <code>Enable microphone testing</code> button.
    </p>
    <br />
    <h3>Other people can't hear me</h3>
    <p>
      If other people can't hear you, you might haven't selected the correct
      microphone.<br />
      You can select your microphone in the voice chat menu by clicking on the
      <code>Select Microphone</code> button and choosing the correct device.<br />
      You can test if it works by clicking the
      <code>Enable microphone testing</code> button.
    </p>
    <br />
    <h3>The voice chat is constantly reconnecting</h3>
    <p>
      This is mostly caused by not binding to the correct IP address.
    </p>
  </div>
</template>
