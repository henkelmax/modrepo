<template>
  <Mod
    title="The Ultimate Car Mod"
    description="This mod brings cars, road construction and biodiesel production into your Minecraft world."
    :logo="require('~/assets/minecraft/car/logo_car.png')"
    id="car"
    downloadlink="https://www.curseforge.com/minecraft/mc-mods/ultimate-car-mod/files/all"
    issueslink="https://github.com/henkelmax/ultimate-car-mod/issues"
    :images="images"
    :credits="credits"
    :faq="faq"
  >
    <v-container slot="overview">
      <v-img :src="require('~/assets/minecraft/car/image_car_1.png')"></v-img>
      <br />
      <v-img :src="require('~/assets/minecraft/car/image_car_2.png')"></v-img>
      <br />
      <p>
        This mod brings cars, road construction and biodiesel production into your minecraft world.
        There are many vehicles with different features to choose from.
        But before you can start driving, you need to get started
        with your fuel production.
        Based on the real biodiesel production, we created a system, which is a vital factor of the mod.
        After having your car, road construction is the next step: You have various
        options to design your own streets and be creative!
      </p>
      <h2>
        <a href="/minecraft/car/wiki">Quick start guide</a>
      </h2>
      <h4>
        <a
          href="http://mccarmod.blogspot.com/2017/04/recipes-fuel-production-recipes-oil.html"
          target="_blank"
        >Crafting Recipes (Minecraft 1.10.X - 1.12.X)</a>
      </h4>
      <br />
      <h2>Features</h2>
      <ul>
        <li>
          More than
          <strong>54,000</strong> different cars
        </li>
        <li>Realistic fuel production</li>
        <li>Road construction</li>
        <li>Highly configurable</li>
      </ul>
      <br />
      <h3>Cars</h3>
      <ul>
        <li>Single seater cars</li>
        <li>Two seater cars</li>
        <li>Truck (two seats)</li>
        <li>Truck with container (two seats)</li>
        <li>Truck with fluid container (two seats)</li>
        <li>Single seater sports car</li>
        <li>Single seater SUV</li>
        <li>Cars have sounds</li>
        <li>Cars can be damaged and have a damage indication</li>
        <li>Cars need fuel to run</li>
        <li>Cars need to be turned on before driving</li>
        <li>Cars have speedometer and fuel gauge</li>
        <li>Cars have a battery</li>
        <li>Engine starting time is affected by the environment temperature, damage and battery voltage</li>
        <li>Cars can be locked</li>
        <li>Cars have luggage space</li>
        <li>Cars have a horn</li>
        <li>Custom car license plate</li>
        <li>Different engines have different speeds and fuel consumption</li>
        <li>Cars are faster on roads</li>
        <li>Tools for repairing cars</li>
      </ul>
      <br />
      <h3>Roads</h3>
      <ul>
        <li>Different asphalt blocks for road construction</li>
        <li>27 white road markings (lines and arrows)</li>
        <li>27 yellow road markings (lines and arrows)</li>
        <li>Painter for markings</li>
        <li>Crash barrier</li>
        <li>Cars are faster on asphalt roads</li>
        <li>Signs with custom text</li>
      </ul>
      <br />
      <h3>Fuel Production</h3>
      <ul>
        <li>Biodiesel</li>
        <li>Gas station</li>
        <li>Multiblock tanks</li>
        <li>Biodiesel fabrication</li>
        <li>Canola cultivation</li>
        <li>Oil mill</li>
        <li>Canola cake (byproduct - can be used for breeding)</li>
        <li>Backmix reactor</li>
        <li>Split Tank (for decantation)</li>
        <li>Methanol extraction through pyrolysis (charcoal as a byproduct)</li>
        <li>Fuel production needs energy created by a generator or a dynamo</li>
        <li>Generator</li>
        <li>Cables</li>
        <li>Fluid pipes</li>
        <li>Fluid extractors</li>
        <li>Canister</li>
        <li>Fuel station to fuel cars</li>
      </ul>
      <br />
      <v-img :src="require('~/assets/minecraft/car/image_car_3.png')"></v-img>
      <br />
    </v-container>
    <template slot="wiki">
      <Wiki :tabs="tabs">
        <template slot="fuel_production">
          <FuelProduction class="pa-6" />
        </template>
        <template slot="car_crafting">
          <CarCrafting class="pa-6" />
        </template>
        <template slot="road_construction">
          <RoadConstruction class="pa-6" />
        </template>
        <template slot="crafting_recipes">
          <CraftingRecipes class="pa-6" />
        </template>
      </Wiki>
    </template>
  </Mod>
</template>

<script>
import Mod from "~/components/MinecraftMod.vue";
import Wiki from "~/components/Wiki.vue";
import FuelProduction from "~/pages/minecraft/car/FuelProduction.vue";
import CarCrafting from "~/pages/minecraft/car/CarCrafting.vue";
import RoadConstruction from "~/pages/minecraft/car/RoadConstruction.vue";
import CraftingRecipes from "~/pages/minecraft/car/CraftingRecipes.vue";

export default {
  data() {
    return {
      images: [
        require("~/assets/minecraft/car/image_car_1.png"),
        require("~/assets/minecraft/car/image_car_2.png"),
        require("~/assets/minecraft/car/image_car_3.png"),
        require("~/assets/minecraft/car/image_car_4.png"),
        require("~/assets/minecraft/car/image_car_5.png"),
        require("~/assets/minecraft/car/image_car_6.png"),
        require("~/assets/minecraft/car/image_car_7.png"),
        require("~/assets/minecraft/car/image_car_8.png"),
        require("~/assets/minecraft/car/image_car_9.png"),
        require("~/assets/minecraft/car/image_car_10.png"),
      ],
      credits: [
        {
          element: {
            name: "3 Cylinder Engine Sounds",
            link: "https://freesound.org/people/qubodup/sounds/147243/",
          },
          license: {
            name: "Creative Commons Attribution License",
            link: "https://creativecommons.org/licenses/by/3.0/legalcode",
          },
          name: { name: "qubodup" },
        },
        {
          element: {
            name: "TruckEngine Sounds",
            link: "https://freesound.org/people/willybilly1984/sounds/345336/",
          },
          license: {
            name: "Creative Commons Attribution License",
            link: "https://creativecommons.org/licenses/by/3.0/legalcode",
          },
          name: { name: "willybilly1984" },
        },
        {
          element: {
            name: "Gas Station Attendant Sounds",
            link: "https://freesound.org/people/XiiiSamples/sounds/382268/",
          },
          license: {
            name: "Creative Commons 0 License",
            link: "https://creativecommons.org/publicdomain/zero/1.0/",
          },
          name: { name: "XiiiSamples" },
        },
      ],
      tabs: [
        { id: "fuel_production", title: "Fuel Production" },
        { id: "car_crafting", title: "Car Crafting" },
        { id: "road_construction", title: "Road Construction" },
        { id: "crafting_recipes", title: "Crafting Recipes" },
      ],
      faq: [
        {
          question:
            "I can't find or craft the windshield / axle / control unit",
          answer: `These items were removed in the 2.X.X versions of this mod. For recipes use <a href="https://www.curseforge.com/minecraft/mc-mods/jei" target="_blank">JEI</a>.`,
        },
        {
          question: "How do I fill the tank container?",
          answer: `You can fill the tank container by right-clicking it with a bucket.`,
        },
        {
          question: "Is version 1.12.2-1.X.X still supported?",
          answer: `Yes, but it will not get any more feature updates. If you find a bug, please report it.`,
        },
        {
          question: "Is version 1.12.2-2.X.X still supported?",
          answer: `No. I moved on to newer Minecraft versions. This version won't get any bug fix or feature updates.`,
        },
      ],
    };
  },
  components: {
    Mod,
    Wiki,
    FuelProduction,
    CarCrafting,
    RoadConstruction,
    CraftingRecipes,
  },
};
</script>
