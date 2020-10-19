<template>
  <Mod
    title="The Ultimate Plane Mod"
    description="Planes in Minecraft."
    :logo="require('~/assets/minecraft/plane/logo_plane.png')"
    id="plane"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/ultimate-plane-mod/files/all"
    sourcelink="https://github.com/henkelmax/ultimate-plane-mod"
    issueslink="https://github.com/henkelmax/ultimate-plane-mod/issues"
    :images="images"
    :credits="credits"
  >
    <v-container slot="overview">
      <p>
        This mod adds planes into your Minecraft world. It requires the
        <a href="/minecraft/car/overview">Ultimate Car Mod</a> for the fuel and
        the gas station.
      </p>
      <v-img
        :src="require('~/assets/minecraft/plane/image_plane_1.png')"
      ></v-img>
      <br />
      <v-img
        :src="require('~/assets/minecraft/plane/image_plane_2.png')"
      ></v-img>
      <br />
      <v-img
        :src="require('~/assets/minecraft/plane/image_plane_3.png')"
      ></v-img>
      <br />
      <h2>Features</h2>
      <ul>
        <li>24 different planes</li>
        <li>Planes in every wood type</li>
        <li>Planes can be named</li>
        <li>Planes can store items</li>
        <li>WAILA/HWYLA support</li>
      </ul>
      <br />
      <h2>Types of planes</h2>
      <h3>The Bush Plane</h3>
      <p>
        The Bush plane is the smallest plane. It can only hold one player. It
        has no inventory. Despite these restrictions it has the best flight
        characteristics and the least fuel usage. Its tank can hold 2000 mb of
        fuel.
      </p>
      <v-img
        :src="require('~/assets/minecraft/plane/image_plane_4.png')"
      ></v-img>
      <br />
      <h3>The Normal Plane</h3>
      <p>
        The normal plane is the best compromise between maneuverability and
        storage size. It can hold three players and has 27 slots storage space.
        Its tank can hold 5000 mb of fuel.
      </p>
      <v-img
        :src="require('~/assets/minecraft/plane/image_plane_5.png')"
      ></v-img>
      <br />
      <h3>The Cargo Plane</h3>
      <p>
        The cargo plane has the most storage space of them all at the cost of
        maneuverability. It can hold two players. It has an external storage of
        54 slots and an internal storage of 27 slots. Its tank can hold 6000 mb
        of fuel.
      </p>
      <v-img
        :src="require('~/assets/minecraft/plane/image_plane_6.png')"
      ></v-img>
      <br />
      <h2>Controlling planes</h2>
      <h3>Getting the plane into the air</h3>
      <ul>
        <li>Turn on the engine by pressing and holding the <b>R</b> key</li>
        <li>Hold the <b>B</b> key to brake</li>
        <li>
          While holding the <b>B</b> key, hold the <b>I</b> key to increase your
          throttle
        </li>
        <li>
          Release the <b>B</b> key and let the plane accelerate to a speed
          that's high enough to lift the plane
        </li>
        <li>Steer by pressing the <b>A</b> and <b>D</b> key</li>
        <li>
          Press the <b>S</b> key to lift up and the <b>W</b> key to fly down
        </li>
      </ul>
      <br />
      <h3>Landing the plane</h3>
      <ul>
        <li>Turn down the throttle by pressing <b>K</b></li>
        <li>
          Try to fly as slow as possible towards the runway without stalling the
          plane
        </li>
        <li>When close to the runway try to decrease your vertical speed</li>
        <li>
          When touching the ground, immediately turn down the throttle to 0%,
          without turning off the engine in case you need to take off if the
          runway is too short, or you are too fast
        </li>
        <li>Press and hold the <b>B</b> key until you stand still</li>
      </ul>
      <br />
      <h2>Naming Planes</h2>
      <p>You can name a plane by naming the plane item in an anvil.</p>
      <v-img
        :src="require('~/assets/minecraft/plane/image_plane_7.png')"
      ></v-img>
      <br />
      <v-img
        :src="require('~/assets/minecraft/plane/image_plane_8.png')"
      ></v-img>
      <br />
      <h2>Picking up Planes</h2>
      <p>
        Planes can be picked up by hitting them with a plane wrench. The wrench
        will lose half of its durability when breaking a plane.
      </p>
      <br />
      <h2>Repairing planes</h2>
      <p>
        Planes can be repaired by holding right-click on the plane with a plane
        wrench. This will slowly decrease the damage value.
      </p>
      <br />
      <h2>Plane GUI</h2>
      <p>
        You can open a GUI containing the planes internal storage and some
        information about the plane by pressing the P key when sitting in a
        plane. Note that this GUI isn't available in the Bush plane as it has no
        storage space.
        <br />
        You can also access this GUI on the normal plane by sneaking and
        right-clicking it.
        <br />
        The external inventory of the cargo plane can be accessed by sneaking
        and right-clicking it.
      </p>
      <v-img
        :src="require('~/assets/minecraft/plane/image_plane_9.png')"
      ></v-img>
      <br />

      <p>
        Every plane has an overlay displaying useful information about the
        flight. You can disable it by pressing CTRL + P. You can also change the
        scale in the client config. The speed units can also be changed in the
        client config. Possible units are kilometers per hour (km/h) and blocks
        per second (b/s).
      </p>
      <v-img
        :src="require('~/assets/minecraft/plane/image_plane_8.png')"
      ></v-img>
    </v-container>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";

export default {
  data() {
    return {
      images: [
        require("~/assets/minecraft/plane/image_plane_1.png"),
        require("~/assets/minecraft/plane/image_plane_2.png"),
        require("~/assets/minecraft/plane/image_plane_3.png"),
        require("~/assets/minecraft/plane/image_plane_4.png"),
        require("~/assets/minecraft/plane/image_plane_5.png"),
        require("~/assets/minecraft/plane/image_plane_6.png"),
        require("~/assets/minecraft/plane/image_plane_7.png"),
        require("~/assets/minecraft/plane/image_plane_8.png"),
        require("~/assets/minecraft/plane/image_plane_9.png"),
        require("~/assets/minecraft/plane/image_plane_10.png"),
      ],
      credits: [
        {
          element: {
            name: "Plane Engine Sound",
            link:
              "https://www.sounddogs.com/sound-effects/airplane-propeller-cessna-idling-10251545",
          },
          license: {
            name: "Sound Effects End User License Agreement",
            link: "https://www.sounddogs.com/sound-effects-eula",
          },
          name: {
            name: "sounddogs.com",
            link: "https://www.sounddogs.com/",
          },
        },
      ],
    };
  },
  components: {
    Mod,
  },
};
</script>
