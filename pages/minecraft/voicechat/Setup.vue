<template>
  <div>
    <h1>Setup</h1>

    <v-card color="red">
      <v-card-subtitle class="white--text">
        If you are hosting your server with a Minecraft hosting provider, please
        look if there is a guide for your specific hoster in the text channel
        <b>#server-hosting</b> on the
        <a href="https://discord.gg/4dH2zwTmyX" style="color: white;">Discord</a> server. If no guide
        for your hoster exists, ask the support of the hoster for help.
      </v-card-subtitle>
    </v-card>
    <br />
    <p>
      If you are hosting your Minecraft server on your PC or on a VPS/root
      server, follow these steps:
    </p>
    <ul>
      <li>
        Make sure you opened the voice chat port on your server (
        <code>24454</code>
        <code>UDP</code>
        by default)
        <ul>
          <li>
            Opening the port for the voice chat is the same process as opening
            the normal minecraft port. You just have to use UDP instead of TCP
            for the protocol.
          </li>
          <li>
            You can change the port in the server config of the mod
            (<code>port</code>).
          </li>
          <ul>
            <li>
              On Fabric the server config file is located in
              <code>config/voicechat/voicechat-server.properties</code>
            </li>
            <li>
              On Forge the server config file is located in
              <code
                >&lt;Your world
                folder&gt;/serverconfig/voicechat-server.toml</code
              >
            </li>
            <li>
              On Bukkit/Spigot/Paper config file is located in
              <code>plugins/voicechat/voicechat-server.properties</code>
            </li>
          </ul>
          <li>
            If you are hosting the server on your own computer, you have to make
            sure that the port is open in your firewall, as well as in your
            router. In most cases you also need to select your computer/IP
            address as the destination of this port, so the packets arrive on
            your machine.
          </li>
          <li>
            Opening ports is different for every setup. It depends on your OS,
            your router, your ISP, your hoster and many other things. Please
            don't ask us how to do it.
          </li>
        </ul>
      </li>
    </ul>
    <br />
    <h3>Setting it up with a proxy</h3>
    <i> This only applies when using a proxy like Velocity or BungeeCord. </i>
    <p>
      <br />
      First of all, make sure, you have the mod/plugin installed on every
      Minecraft server that's running behind your proxy.
    </p>
    <p>
      If the proxy and all Minecraft servers are running on the same machine,
      you have to assign a different port for every instance of voice chat on
      each Minecraft server. Please also make sure each port is opened in the
      firewall.
    </p>
    <p>
      If the proxy and the Minecraft servers are running on different machines,
      you need to set <code>voice_host</code> in the voice chat config of each
      Minecraft server to the public IP address (Without the port) of the server
      its running on (Not the IP of the proxy). You also need to make sure each
      voice port is opened in the firewall of each server.
    </p>
    <br />
    <h3>Testing the voice chat connection</h3>
    <p>
      You can test the voice chat connection of a specific player by typing the
      command <code>/voicechat test &lt;PLAYERNAME&gt;</code>.
    </p>
  </div>
</template>
