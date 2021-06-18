<template>
  <div>
    <h1>Configuration</h1>

    <h2>Server</h2>

    <table>
      <tr>
        <td><b>Config key</b></td>
        <td><b>Description</b></td>
        <td><b>Default value</b></td>
      </tr>
      <tr>
        <td><code>port</code></td>
        <td>The port of the voice chat server</td>
        <td><code>24454</code></td>
      </tr>
      <tr>
        <td><code>bind_address</code></td>
        <td>
          The IP address to bind the voice chat server on <br />
          Use '0.0.0.0' to bind to an IP address chosen by the kernel
        </td>
        <td><code>0.0.0.0</code></td>
      </tr>
      <tr>
        <td><code>distance</code></td>
        <td>The distance to where the voice can be heard</td>
        <td><code>32</code></td>
      </tr>
      <tr>
        <td><code>fade_distance</code></td>
        <td>The distance to where the voice starts fading</td>
        <td><code>16</code></td>
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
    </table>

    <br />
    <br />
    <h2>Client</h2>

    <table>
      <tr>
        <td><b>Config key</b></td>
        <td><b>Description</b></td>
        <td><b>Default value</b></td>
      </tr>
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
        <td><code>6</code></td>
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
        <td><code>stereo</code></td>
        <td>If the voice chat should use semi 3D stereo sound</td>
        <td><code>true</code></td>
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
        <td><code>hud_icon_location</code></td>
        <td>
          The location of the HUD icons <br />
          Possible values are <code>LEFT</code>, <code>RIGHT</code> and
          <code>CENTER</code>
        </td>
        <td><code>LEFT</code></td>
      </tr>
      <tr>
        <td><code>group_player_icon_orientation</code></td>
        <td>
          The orientation of the player icons in the group HUD
          <br />
          Possible values are <code>VERTICAL</code> and <code>HORIZONTAL</code>
        </td>
        <td><code>VERTICAL</code></td>
      </tr>
    </table>
  </div>
</template>
