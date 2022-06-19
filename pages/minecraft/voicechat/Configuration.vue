<template>
  <div>
    <h1>Configuration</h1>

    <p>
      <b>NOTE:</b> While editing configuration files, make sure the
      client/server is stopped. If the config values keep resetting, this is
      most likely the problem.
    </p>
    <p>
      If you can't find the config files, make sure the client/server was
      started at least once, so that the files are generated.
    </p>

    <h2>Server</h2>
    <br />
    <b>Fabric/Quilt</b>
    <code>config/voicechat/voicechat-server.properties</code>
    <br />
    <b>Forge</b>
    <code>&lt;Your world folder&gt;/serverconfig/voicechat-server.toml</code>
    <br />
    <b>Bukkit/Spigot/Paper</b>
    <code>plugins/voicechat/voicechat-server.properties</code>
    <br />
    <br />

    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Config key</th>
          <th class="text-left">Description</th>
          <th class="text-left">Default value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>port</code></td>
          <td>
            The port of the voice chat server
            <br />
            Setting this to <code>-1</code> sets the port to the Minecraft
            servers port
          </td>
          <td><code>24454</code></td>
        </tr>
        <tr>
          <td><code>bind_address</code></td>
          <td>
            The IP address to bind the voice chat server on <br />
            Leave empty to bind to an IP address chosen by the kernel
          </td>
          <td></td>
        </tr>
        <tr>
          <td><code>codec</code></td>
          <td>
            The opus codec <br />
            Possible values are <code>VOIP</code>, <code>AUDIO</code> and
            <code>RESTRICTED_LOWDELAY</code>
          </td>
          <td><code>VOIP</code></td>
        </tr>
        <tr>
          <td><code>mtu_size</code></td>
          <td>
            The maximum size in bytes in a voice packet <br />
            Set this to a lower value if your voice packets don't arrive
          </td>
          <td><code>1024</code></td>
        </tr>
        <tr>
          <td><code>keep_alive</code></td>
          <td>
            The frequency in which keep alive packets are sent <br />
            Setting this to a higher value may result in timeouts
          </td>
          <td><code>1000</code></td>
        </tr>
        <tr>
          <td><code>enable_groups</code></td>
          <td>If group chats are allowed</td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>open_groups</code></td>
          <td>If players in group chats can be heard locally</td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>voice_host</code></td>
          <td>
            The host name that clients should use to connect to the voice chat
            <br />
            Don't change this value if you don't know what you are doing
          </td>
          <td></td>
        </tr>
        <tr>
          <td><code>allow_recording</code></td>
          <td>If players are allowed to record the voice chat</td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>spectator_interaction</code></td>
          <td>If spectators are allowed to talk to other players</td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>min_voice_distance</code></td>
          <td>The distance to where the voice starts fading</td>
          <td><code>4.0</code></td>
        </tr>
        <tr>
          <td><code>max_voice_distance</code></td>
          <td>The distance to where the voice can be heard</td>
          <td><code>48</code></td>
        </tr>
        <tr>
          <td><code>crouch_distance_multiplier</code></td>
          <td>
            The multiplier the voice distance will be reduced by when sneaking
          </td>
          <td><code>1.0</code></td>
        </tr>
        <tr>
          <td><code>whisper_distance_multiplier</code></td>
          <td>
            The multiplier the voice distance will be reduced by when whispering
          </td>
          <td><code>0.5</code></td>
        </tr>
        <tr>
          <td><code>spectator_player_possession</code></td>
          <td>If spectators can talk to players they are spectating</td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>force_voice_chat</code></td>
          <td>If players without the mod should get kicked from the server</td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>login_timeout</code></td>
          <td>
            The amount of milliseconds, the server should wait to check if the
            player has the mod installed
            <br />
            Only active when <code>force_voice_chat</code> is set to true
          </td>
          <td><code>10 000</code></td>
        </tr>
        <tr>
          <td><code>broadcast_range</code></td>
          <td>
            The range where the voice chat should broadcast audio to
            <br />
            A value &lt;0 means <code>max_voice_distance</code>
          </td>
          <td><code>-1.0</code></td>
        </tr>
      </tbody>
    </v-simple-table>

    <br />
    <br />
    <h2>Client</h2>
    <br />
    <b>Fabric/Quilt</b>
    <code>config/voicechat/voicechat-client.properties</code>
    <br />
    <b>Forge</b>
    <code>config/voicechat-client.toml</code>
    <br />
    <br />

    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Config key</th>
          <th class="text-left">Description</th>
          <th class="text-left">Default value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>microphone_activation_type</code></td>
          <td>
            Microphone activation type <br />
            Possible values are <code>PTT</code> and <code>VOICE</code>
          </td>
          <td><code>PTT</code></td>
        </tr>
        <tr>
          <td><code>voice_activation_threshold</code></td>
          <td>The threshold for voice activation in dB</td>
          <td><code>-50</code></td>
        </tr>
        <tr>
          <td><code>voice_chat_volume</code></td>
          <td>The voice chat volume</td>
          <td><code>1</code></td>
        </tr>
        <tr>
          <td><code>microphone_amplification</code></td>
          <td>The voice chat microphone amplification</td>
          <td><code>1</code></td>
        </tr>
        <tr>
          <td><code>output_buffer_size</code></td>
          <td>
            The size of the audio output buffer in packets
            <br />
            Higher values mean a higher latency, but less crackles
            <br />
            Increase this value if you have an unstable internet connection
          </td>
          <td><code>5</code></td>
        </tr>
        <tr>
          <td><code>audio_packet_threshold</code></td>
          <td>
            The maximum amount of audio packets that are held back, if a packet
            arrives out of order or gets dropped
            <br />
            This prevents discarding audio packets that are slightly out of
            order
            <br />
            Set this to 0 to disable
          </td>
          <td><code>3</code></td>
        </tr>
        <tr>
          <td><code>voice_deactivation_delay</code></td>
          <td>
            The time it takes for the microphone to deactivate when using voice
            activation
            <br />
            A value of 1 means 20 milliseconds, 2=40 ms, 3=60 ms, ...
          </td>
          <td><code>25</code></td>
        </tr>
        <tr>
          <td><code>microphone</code></td>
          <td>
            The microphone used by the voice chat
            <br />
            Empty for default device
          </td>
          <td></td>
        </tr>
        <tr>
          <td><code>speaker</code></td>
          <td>
            The speaker used by the voice chat
            <br />
            Empty for default device
          </td>
          <td></td>
        </tr>
        <tr>
          <td><code>muted</code></td>
          <td>If the microphone is muted (only when using voice activation)</td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td>If the voice chat is disabled (sound and microphone off)</td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>hide_icons</code></td>
          <td>If the voice chat icons should be hidden</td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>show_group_hud</code></td>
          <td>If the group HUD should be visible</td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>show_own_group_icon</code></td>
          <td>If the own icon should be shown when in a group</td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>group_hud_icon_scale</code></td>
          <td>The scale of the group HUD</td>
          <td><code>2.0</code></td>
        </tr>
        <tr>
          <td><code>group_player_icon_orientation</code></td>
          <td>
            The orientation of the player icons in the group HUD
            <br />
            Possible values are <code>VERTICAL</code> and
            <code>HORIZONTAL</code>
          </td>
          <td><code>VERTICAL</code></td>
        </tr>
        <tr>
          <td><code>recording_destination</code></td>
          <td>
            The location where recordings should be saved
            <br />
            Leave empty for default location
          </td>
          <td></td>
        </tr>
        <tr>
          <td><code>denoiser</code></td>
          <td>If noise cancellation should be enabled</td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>group_player_icon_pos_x</code></td>
          <td>
            The X position of the player icons in the group HUD
            <br />
            Negative values mean anchoring to the bottom
          </td>
          <td><code>4</code></td>
        </tr>
        <tr>
          <td><code>group_player_icon_pos_y</code></td>
          <td>
            The Y position of the player icons in the group HUD
            <br />
            Negative values mean anchoring to the bottom
          </td>
          <td><code>4</code></td>
        </tr>
        <tr>
          <td><code>hud_icon_pos_x</code></td>
          <td>
            The X position of the HUD icons
            <br />
            Negative values mean anchoring to the right
          </td>
          <td><code>16</code></td>
        </tr>
        <tr>
          <td><code>hud_icon_pos_y</code></td>
          <td>
            The Y position of the HUD icons
            <br />
            Negative values mean anchoring to the right
          </td>
          <td><code>-16</code></td>
        </tr>
        <tr>
          <td><code>hud_icon_scale</code></td>
          <td>The scale of the HUD icons</td>
          <td><code>1.0</code></td>
        </tr>
        <tr>
          <td><code>run_local_server</code></td>
          <td>If voice chat should work in singleplayer/LAN worlds</td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>java_microphone_implementation</code></td>
          <td>
            Whether to use the Java implementation of microphone capturing
            instead of OpenAL
          </td>
          <td>
            <code>true</code> for MacOS, <code>false</code> for every other OS
          </td>
        </tr>
        <tr>
          <td><code>macos_microphone_workaround</code></td>
          <td>If the microphone workaround hack should be used (MacOS only)</td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>show_fake_players_disconnected</code></td>
          <td>
            If fake players should have the disconnected icon above their head
          </td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>offline_player_volume_adjustment</code></td>
          <td>If the volume adjustment GUI should also show offline players</td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>audio_type</code></td>
          <td>
            The 3D audio type
            <br />
            Possible values are <code>NORMAL</code>, <code>REDUCED</code> and
            <code>OFF</code>
          </td>
          <td><code>NORMAL</code></td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
