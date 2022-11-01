<template>
  <div>
    <h1>Supported Versions</h1>

    <p>
      This is a list containing every Minecraft version, Simple Voice Chat has
      been released to. It shows for which Minecraft versions the mod is still
      maintained.
    </p>

    <p>
      We usually only support the latest patch of each major Minecraft version.
      Snapshots are generally no longer supported after a newer snapshot version
      is released or the full release of that version is out.
    </p>

    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Minecraft Version</th>
          <th class="text-left">Type</th>
          <th class="text-left">Support</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="version in versions" :key="version.version">
          <td>
            <code>{{ version.version }}</code>
          </td>
          <td>
            <p v-if="version.type === 'fabric'">Fabric</p>
            <p v-else-if="version.type === 'quilt'">Quilt</p>
            <p v-else-if="version.type === 'forge'">Forge</p>
            <p v-else-if="version.type === 'bukkit'">Bukkit/Spigot/Paper</p>
            <p v-else>All</p>
          </td>
          <td>
            <v-chip v-if="version.support === 'no_support'" color="red">
              No support
            </v-chip>
            <v-chip v-if="version.support === 'critical_bugs'" color="orange">
              Only critical bugs
            </v-chip>
            <v-chip
              v-if="version.support === 'active_development'"
              color="green"
            >
              Under active development
            </v-chip>
            <v-chip
              v-if="version.support === 'active_development_snapshot'"
              color="blue"
            >
              Limited snapshot support
            </v-chip>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      versions: [
        {
          version: "1.15.2",
          support: "no_support",
        },
        {
          version: "1.16.3",
          support: "no_support",
        },
        {
          version: "1.16.4",
          support: "no_support",
        },
        {
          version: "1.16.5",
          type: "fabric",
          support: "no_support",
        },
        {
          version: "1.16.5",
          type: "forge",
          support: "active_development",
        },
        {
          version: "1.16.5",
          type: "bukkit",
          support: "active_development",
        },
        {
          version: "1.17",
          support: "no_support",
        },
        {
          version: "1.17.1",
          support: "active_development",
        },
        {
          version: "1.18",
          support: "no_support",
        },
        {
          version: "1.18.1",
          support: "no_support",
        },
        {
          version: "1.18.2",
          support: "active_development",
        },
        {
          version: "1.19",
          support: "active_development",
        },
        {
          version: "1.19.1",
          support: "active_development",
        },
        {
          version: "1.19.2",
          support: "active_development",
        },
        {
          version: "1.19.3",
          type: "fabric",
          support: "active_development_snapshot",
        },
      ],
    };
  },
};
</script>

