---
titleTemplate: Simple Voice Chat
prev:
  text: 'Server Setup'
  link: './server_setup'
next: false
---

# Setting Up The Server - Self Hosted

::: danger NOTE
The setup requires some in-depth knowledge about networking and port-forwarding.
It is not recommended to do this without any prior knowledge about this topic.

Opening ports is different for every setup. It depends on your OS, your router, your ISP, your hoster and many other things.
**Please don't ask us for help with port-forwarding!**
:::


## On a VPS or root server

- Open the voice chat port (`24454` `UDP` by default)
  - In your servers firewall
  - In your server hosting panel (Not always present)


## On Your Own Computer or a Machine in Your Local Network

- Open the voice chat port (`24454` `UDP` by default)
  - In the firewall of the machine, the server is running on
  - In your router
- When connecting to your Minecraft server in-game, please make sure you use the local IP address of the server in your internal network or `localhost` if the server is running on the same machine, you are playing on
- Make sure your router allows devices in your local network to communicate with each other


## With Pterodactyl

- Go to `Servers > your-server > Build Configuration > Allocation Management > Assign Additional Ports`
- Add the voice chat port (`24454` by default)
- Go to `Settings > Nodes > your-node > Allocation`
- Go to the `Assign New Allocations` panel
- Enter the servers IP and the voice chat port (`24454` by default)
- Press `Submit`


## With Docker

- We recommend using the [itzg/minecraft-server](https://docker-minecraft-server.readthedocs.io/en/latest/) container
- Make sure to add the voice chat UDP port


*[Example from the itzg/minecraft-server documentation](https://docker-minecraft-server.readthedocs.io/en/latest/#using-docker-compose)*
``` yaml{8}
services:
  mc:
    image: itzg/minecraft-server
    tty: true
    stdin_open: true
    ports:
      - "25565:25565"
      - "24454:24454/udp" # Make sure to change the voice chat port if you aren't using the default one
    environment:
      EULA: "TRUE"
    volumes:
      # attach the relative directory 'data' to the container's /data path
      - ./data:/data
```

<ClientOnly>
    <WikiTracker name="setup"/>
</ClientOnly>
