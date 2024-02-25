---
titleTemplate: Simple Voice Chat
---

# macOS Microphone Permission

MacOS requires any application that wants to use the microphone to show a permission dialog.

Since Minecraft itself doesn't need the microphone, we are not able to request access for it.
However, some launchers add the ability to ask for microphone permission.

In order to use the voice chat on MacOS, you need to use [Prism Launcher](https://prismlauncher.org/)
or perform the manual steps below.

::: warning NOTE
If you have issues **installing** or **setting up** the launcher, visit the [Prism Launcher Discord server](https://discord.gg/prismlauncher) for help.

Please don't ask them for help with the voice chat mod itself!
:::

## Adding permissions manually
Alternatively, it is possible to add the microphone permission for
`Minecraft.app` *(the official launcher)* manually, by directly interacting with
the corresponding `SQLite` database from within the command-line terminal.

To achieve this, you have to perform the following steps
*(tested on macOS `14.2.1` Sonoma)*:

1. **Read note below**
2. `cd ~/Library/Application\ Support/com.apple.TCC`
3. `sqlite3 TCC.db` *(This is the database containing the list of apps' permissions)*

then in the *SQLite* command-line:

4. `INSERT INTO access VALUES ('kTCCServiceMicrophone','com.mojang.minecraftlauncher', 0, 2, 2, 1, null, null, null, 'UNUSED', null, null, 1669648527, null, null, 'UNUSED',0);`
5. `.quit`

After closing the *System Settings* app and reopening it, `Minecraft.app`
should appear in the list of apps for which microphone access can be enabled.
The *SQLite* query above is crafted in a way, that the permission is already
granted.

::: warning NOTE
As you are interacting with system files directly, it is possible that you
damage your system configuration by mistyping something in the query. It is
highly recommended to make a backup of the `TCC.db` database file by running
`cp TCC.db TCC.db.bak` for example, so you can easily restore the file in case
something goes wrong.
:::