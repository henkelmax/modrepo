---
titleTemplate: Simple Voice Chat
---

# MacOS Microphone Permission

MacOS requires any application that wants to use the microphone to show a permission dialog.

Since Minecraft itself doesn't need the microphone, we are not able to request access for it.

In order to use the voice chat on MacOS, you must either use [Prism Launcher](https://prismlauncher.org/), or grant the permissions to java manually, which can be done by following these steps:

1. Open a terminal window and enter the command: `open /usr/`.
::: warning NOTE
This is **not** the same as your user/root directory. The `/usr` directory is hidden by default, hence requiring the terminal to open it.
:::
3. Drag the `bin` directory into the favourites section in the sidebar.
4. Navigate to `System Settings > Privacy & Security > Microphone`.
5. Use the `+` button and navigate to the bin directory using the sidebar.
6. Select the `java` binary file (It should have no extension).
