<template>
  <div>
    <h1>Permissions</h1>

    <p>
      Simple Voice Chat has permissions for the
      <a href="https://bukkit.fandom.com/wiki/Understanding_Permissions"
        >Bukkit permission system</a
      >, the
      <a
        href="https://mcforge.readthedocs.io/en/1.12.x/utilities/permissionapi/"
        >Forge permission API</a
      >
      and the
      <a href="https://github.com/lucko/fabric-permissions-api"
        >Fabric Permissions API</a
      >.
    </p>
    <p>
      Note that the permission system for Forge was added in version
      <code>2.2.21</code> and the permission system for Fabric was added in
      version <code>2.2.33</code>.
    </p>

    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Permission Node</th>
          <th class="text-left">Default</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>voicechat.connect</code></td>
          <td>Granted for everyone</td>
          <td>If players should be able to connect to the voice chat.</td>
        </tr>
        <tr>
          <td><code>voicechat.speak</code></td>
          <td>Granted for everyone</td>
          <td>If players should be able to transmit audio.</td>
        </tr>
        <tr>
          <td><code>voicechat.groups</code></td>
          <td>Granted for everyone</td>
          <td>If players should be able to join groups.</td>
        </tr>
        <tr>
          <td><code>voicechat.admin</code></td>
          <td>Only granted for server operators</td>
          <td>
            For administrative purposes like the
            <code>/voicechat test</code> command.
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
