<template>
  <Mod
    title="Camera Mod"
    description="A working Camera in Minecraft!"
    :logo="require('~/assets/minecraft/camera/logo_camera.png')"
    id="camera"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/camera-mod/files/all"
    issueslink="https://github.com/henkelmax/camera/issues"
    :images="images"
    :credits="credits"
  >
    <v-container slot="overview">
      <p>
        This mod adds a Camera and a frame for the images.
        The Camera takes real images of your game.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Images can be displayed by right-clicking the image</li>
        <li>Images can be put into image frames</li>
        <li>Images can be copied</li>
        <li>Custom images can be uploaded</li>
        <li>Image Frames can be resized up to 8 x 8 blocks</li>
        <li>Date and photographer name are stored with the image item</li>
        <li>The Camera consumes a piece of paper for every taken image</li>
        <li>The Camera has multiple filters that can be applied</li>
        <li>Multiplayer compatible</li>
        <li>Images are saved in the world folder</li>
      </ul>
      <h2>Taking an Image</h2>
      <p>
        Images can be taken by right-clicking a camera.
        This brings you in the viewfinder of the camera.
        Right-clicking again takes an image of the perspective you are currently seeing.
        Images are saved with the same ratio as your Minecraft window.
      </p>

      <br />
      <v-img :src="require('~/assets/minecraft/camera/image_camera_1.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/camera/image_camera_2.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/camera/image_camera_3.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/camera/image_camera_4.png')"></v-img>
      <br />

      <h2>Filters</h2>
      <p>
        The camera is able to apply filters to the image.
        By sneak + right-clicking the camera a GUI opens where the filter can be chosen.
      </p>
      <h3>Available filters</h3>
      <ul>
        <li>Black and White</li>
        <li>Sepia</li>
        <li>Desaturated</li>
        <li>Overexposed</li>
        <li>Oversaturated</li>
        <li>Blurry</li>
        <li>Inverted</li>
      </ul>
      <br />
      <v-img :src="require('~/assets/minecraft/camera/image_camera_5.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/camera/image_camera_6.png')"></v-img>
      <br />
      <video style="width: 100%;" autoplay loop muted>
        <source :src="require('~/assets/minecraft/camera/video_camera_1.mp4')" type="video/mp4" />
      </video>
      <br />

      <h2>Zooming</h2>
      <p>You can zoom in and out by scrolling.</p>

      <br />
      <video style="width: 100%;" autoplay loop muted>
        <source :src="require('~/assets/minecraft/camera/video_camera_2.mp4')" type="video/mp4" />
      </video>
      <br />

      <h2>Viewing an Image</h2>
      <p>You can either look at the image by right-clicking the image item or by putting it in an image frame.</p>

      <br />
      <v-img :src="require('~/assets/minecraft/camera/image_camera_7.png')"></v-img>
      <br />

      <h2>The Album</h2>
      <p>
        The album can hold up to 54 images.
        You can add images by sneak + right-clicking the album.
        You can view the contained images by right-clicking the album.
        By scrolling up and down or pressing the arrow-up/down key, you can switch the currently viewed image.
      </p>

      <br />
      <video style="width: 100%;" autoplay loop muted>
        <source :src="require('~/assets/minecraft/camera/video_camera_3.mp4')" type="video/mp4" />
      </video>
      <br />

      <h2>The Image Frame</h2>
      <p>
        The image frame allows you to place your image in the world.
        Just place the image frame item on a wall.
        Sneak + right-clicking the image frame opens a GUI that allows you to resize the frame.
        Just clicking the resize buttons enlarges the frame in the given direction.
        If you sneak and click the button the frame will be downsize the frame in that direction.
        To display an image in the frame right-click it with the chosen image in hand.
        To remove it from the frame just right-click the frame again.
      </p>

      <br />
      <v-img :src="require('~/assets/minecraft/camera/image_camera_8.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/camera/image_camera_9.png')"></v-img>
      <br />

      <h2>Recipes</h2>
      <p>Images can be copied by combining it with a piece of paper in the crafting table.</p>
      <h2>Config Options</h2>
      <ul>
        <li>The camera cooldown</li>
        <li>The date format displayed on the image item</li>
        <li>The item that is getting consumed when taking an image</li>
        <li>The maximum image storage size</li>
      </ul>
      <br />
    </v-container>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";

export default {
  data() {
    return {
      images: [
        require("~/assets/minecraft/camera/image_camera_1.png"),
        require("~/assets/minecraft/camera/image_camera_2.png"),
        require("~/assets/minecraft/camera/image_camera_3.png"),
        require("~/assets/minecraft/camera/image_camera_4.png"),
        require("~/assets/minecraft/camera/image_camera_5.png"),
        require("~/assets/minecraft/camera/image_camera_6.png"),
        require("~/assets/minecraft/camera/image_camera_7.png"),
        require("~/assets/minecraft/camera/image_camera_8.png"),
        require("~/assets/minecraft/camera/image_camera_9.png"),
      ],
      credits: [
        {
          element: { name: "Turkish translation" },
          name: {
            name: "oynthe",
            link: "https://www.curseforge.com/members/oynthe",
          },
        },
        {
          element: { name: "Chinese Simplified (China) translation" },
          name: {
            name: "Imbarainbow",
            link: "https://github.com/Imbarainbow",
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
