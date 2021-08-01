<template>
  <Mod
    title="Camera Utils"
    description="Helpful camera utilities."
    :logo="require('~/assets/minecraft/camerautils/logo_camerautils.png')"
    id="camerautils"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/camera-utils/files/all"
    sourcelink="https://github.com/henkelmax/camera-utils"
    issueslink="https://github.com/henkelmax/camera-utils/issues"
    :faq="faq"
  >
    <v-container slot="overview">
      <p>
        Camera Utils is a client side Fabric mod that adds convenient features
        related to the players camera.
      </p>
      <h1>Features</h1>
      <ul>
        <li>Dynamic zoom</li>
        <li>Camera detaching</li>
        <li>Adjustable third person distance</li>
        <li>Two customizable third person perspectives</li>
        <li>Advanced cinematic camera controls</li>
        <li>Movement smoothing</li>
      </ul>
      <br />
      <h2>Dynamic Zoom</h2>
      <p>
        By default the zoom key is bound to <code>Z</code>. Holding the zoom key
        and scrolling dynamically adjusts the zoom value.
      </p>
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/camerautils/video_camerautils_1.mp4')
          "
          type="video/mp4"
        />
      </video>
      <br />
      <h2>Camera Detaching</h2>
      <p>
        By hitting the detach camera button, the players camera is locked to the
        current position. You can still control the player like before, just
        from another point of view. By pressing <code>RIGHT ALT</code> in
        combination with the detach camera key, the camera goes back to the
        position, the camera was last detached.
      </p>
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/camerautils/video_camerautils_2.mp4')
          "
          type="video/mp4"
        />
      </video>
      <br />
      <h2>Adjustable Third Person Distance</h2>
      <p>
        When holding the third person distance modifier in third person, you are
        able to scroll out up to 100 blocks away from the player.
      </p>
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/camerautils/video_camerautils_3.mp4')
          "
          type="video/mp4"
        />
      </video>
      <br />
      <h2>Customizable Third Person Perspectives</h2>
      <p>
        This mod allows for two custom third person perspectives. These are
        bound to <code>F6</code> and <code>F7</code> by default. These can be
        modified by pressing <code>RIGHT ALT</code> and <code>F6</code> or
        <code>F7</code> respectively.
      </p>
      <video style="width: 100%" autoplay loop muted>
        <source
          :src="
            require('~/assets/minecraft/camerautils/video_camerautils_4.mp4')
          "
          type="video/mp4"
        />
      </video>
      <br />
      <h2>Advanced Cinematic Camera Controls</h2>
      <p>
        By pressing <code>RIGHT ALT</code> and the cinematic camera button, you
        can adjust the properties of the cinematic camera.
      </p>
      <br />
      <h2>Movement Smoothing</h2>
      <p>
        This option is located in the accessibility settings. It smoothens the
        players camera movement to potentially avoid motion sickness.
      </p>
      <br />
      <h2>Additional Information</h2>
      <p>
        Pressing any key related to the camera utils mod in combination with
        <code>RIGHT ALT</code> will open a settings GUI which allows you to
        change properties or to reset them back to their default values.
      </p>
      <p>
        Note that this mod is <strong>not compatible with OptiFine</strong>.
      </p>
    </v-container>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";

export default {
  data() {
    return {
      faq: [
        {
          question: "Does this mod need to be installed on client and server?",
          answer: "No. This mod only needs to be installed on the client.",
        },
      ],
    };
  },
  components: {
    Mod,
  },
};
</script>
