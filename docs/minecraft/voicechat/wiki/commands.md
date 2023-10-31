---
titleTemplate: Simple Voice Chat
aside: false
---

# Commands

All voice chat commands can only be executed in-game.
You won't be able to run them in the console.
You also need to have Simple Voice Chat installed on your client to be able to use these commands.

| Command                          | Description                                                                                                                                                 |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/voicechat help`                | Shows all possible commands.                                                                                                                                |
| `/voicechat test <PLAYERNAME>`    | Tests the voice chat connection of a specific player.<br/>*Requires the permission `voicechat.admin`. See [permissions](permissions) for more information.* |
| `/voicechat invite <PLAYERNAME>` | Invites the player to the group you are in.                                                                                                                 |
| `/voicechat join <GROUP-NAME>`   | Connects you to the group with that name.<br/>*This command only works if there's not more than one group with that exact name.*                            |
| `/voicechat join <GROUP-ID>`     | Connects you to the group with that ID.<br/>*This should not be used directly. This command is automatically executed when accepting an invite.*            |
| `/voicechat leave`               | Disconnects you from your current group.                                                                                                                    |
