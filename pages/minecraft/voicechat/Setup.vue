<template>
  <div>
    <h1>Setup</h1>
    <p>
      If you are hosting your server with a Minecraft hosting provider, please
      look if there is a guide for your specific hoster in the text channel
      <b>#server-hosting</b> on the
      <a href="https://discord.gg/4dH2zwTmyX">Discord</a> server. If no guide
      for your hoster exists, ask the support of the hoster for help.
    </p>
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
            Opening the port for the voice chat is the same process as opening the
            normal minecraft port. You just have to use UDP
            instead of TCP for the protocol.
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
          <!-- <li>
            If you use a Minecraft hosting service, they may have the default
            UDP port open and in other cases you may have a port range available
            for you. If this isn't the case contact their support.
          </li> -->
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
      <!-- <li>
        Some Minecraft server hosters or servers with multiple network adapters
        require you to bind the voice chat to a specific IP address
        <ul>
          <li>
            This is only required for some hosters. Please only do this if
            explicitly stated.
          </li>
          <li>
            You can set this address in the server config of the mod
            (<code>bind_address</code>)
          </li>
          <li>
            Use <code>0.0.0.0</code> to not bind to a specific address (This is
            the default value)
          </li>
          <li>
            If you are setting this value, make sure to enter your servers IP
            address without a port. (Like this <code>1.2.3.4</code>, not like
            this <code>1.2.3.4:24454</code>)
          </li>
          <li>
            If your server crashes after setting this value, you might use the
            wrong IP or you don't even need to change this option.
          </li>
          <li>
            If you don't know what to do, please ask the support of your
            minecraft hoster.
          </li>
        </ul>
      </li> -->
    </ul>
    <br />
    <h3>Testing the voice chat connection</h3>
    <p>
      You can test the voice chat connection of a specific player by typing the
      command <code>/voicechat test &lt;PLAYERNAME&gt;</code>.
    </p>
  </div>
</template>
