---
titleTemplate: Simple Voice Chat
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

- Go to `Settings > Nodes > your-node > Allocation`
- Go to the `Assign New Allocations` panel
- Enter the servers IP and the voice chat port (`24454` `UDP` by default)
- Press `Submit`


## Changing the Voice Chat Port

You can change the port that the voice chat is running on in the server config of the mod.
More information on how to find the config file [here](configuration).

Just set the property `port` to the port you want.
For example `port=1234` to use port `1234`.

<ClientOnly>
    <WikiTracker name="setup"/>
</ClientOnly>
