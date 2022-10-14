<template>
  <div>
    <h1>Commands</h1>

    <p>
      All voice chat commands can only be executed ingame. You won't be able to
      run them in the console. You also need to have Simple Voice Chat installed
      to be able to use these commands.
    </p>

    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Command</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>/voicechat help</code></td>
          <td>Shows all possible commands</td>
        </tr>
        <tr>
          <td><code>/voicechat test &lt;PLAYERNAME&gt;</code></td>
          <td>
            Tests the voice chat connection of a specific player
            <br/>
            <i>Requires the permission <code>voicechat.admin</code></i>
          </td>
        </tr>
        <tr>
          <td><code>/voicechat invite &lt;PLAYERNAME&gt;</code></td>
          <td>Invites the player to the group you are in</td>
        </tr>
        <tr>
          <td><code>/voicechat join &lt;GROUP-ID&gt;</code></td>
          <td>Connects you to the group with that ID</td>
        </tr>
        <tr>
          <td><code>/voicechat leave</code></td>
          <td>Disconnects you from your current group</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
