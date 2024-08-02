---
titleTemplate: Simple Voice Chat
aside: false
---

# Credits

## General

<Credits :credits="credits"/>
[*Credits for older versions*](old_credits.md)

## Translations

<Credits :credits="translations" :displayLicense="false"/>

<script setup>
const credits = [
  {
    element: { name: "Icons" },
    name: {
      name: "Stridey",
      link: "https://www.planetminecraft.com/member/stridey/",
    },
  },
  {
    element: { name: "Proxy plugins" },
    name: {
      name: "Nila",
      link: "https://github.com/nilathedragon",
    },
  },
  {
    element: {
      name: "Opus Codec",
      link: "https://opus-codec.org/",
    },
    license: {
      name: "3-Clause BSD License",
      link: "https://opus-codec.org/license/",
    },
  },
  {
    element: {
      name: "RNNoise",
      link: "https://jmvalin.ca/demo/rnnoise/",
    },
    license: {
      name: 'BSD 3-Clause "New" or "Revised" License',
      link: "https://gitlab.xiph.org/xiph/rnnoise/-/blob/master/COPYING",
    },
  },
  {
    element: {
      name: "LAME",
      link: "https://lame.sourceforge.io/",
    },
    license: {
      name: "GNU LIBRARY GENERAL PUBLIC LICENSE Version 2",
      link: "https://sourceforge.net/p/lame/svn/HEAD/tree/tags/RELEASE__3_100/lame/COPYING",
    },
  },
  {
    element: {
      name: "adventure",
      link: "https://github.com/KyoriPowered/adventure",
    },
    license: {
      name: "MIT",
      link: "https://github.com/KyoriPowered/adventure/blob/master/license.txt",
    },
  },
  {
    element: {
      name: "commodore",
      link: "https://github.com/lucko/commodore",
    },
    license: {
      name: "MIT",
      link: "https://github.com/lucko/commodore/blob/master/LICENSE.txt",
    },
  },
  {
    element: {
      name: "Concentus",
      link: "https://github.com/lostromb/concentus",
    },
    license: {
      name: "Custom",
      link: "https://github.com/lostromb/concentus/blob/master/LICENSE",
    },
  },
  {
    element: {
      name: "Fabric API",
      link: "https://github.com/FabricMC/fabric",
    },
    license: {
      name: "Apache License 2.0",
      link: "https://github.com/FabricMC/fabric/blob/1.20.1/LICENSE",
    },
  },
  {
    element: {
      name: "Quilt Standard Libraries (QSL)",
      link: "https://github.com/QuiltMC/quilt-standard-libraries",
    },
    license: {
      name: "Apache License 2.0",
      link: "https://github.com/QuiltMC/quilt-standard-libraries/blob/1.20/LICENSE",
    },
  },
  {
    element: {
      name: "Quilted Fabric API",
      link: "https://github.com/QuiltMC/quilted-fabric-api",
    },
    license: {
      name: "Apache License 2.0",
      link: "https://github.com/QuiltMC/quilted-fabric-api/blob/1.20.1/LICENSE",
    },
  }
];

const translations = [
  {
    element: { name: "Brazilian Portuguese translation" },
    name: {
      name: "Allomere",
      link: "https://github.com/Allomere",
    },
  },
  {
    element: { name: "Italian translation" },
    name: {
      name: "UknownGino",
      link: "https://github.com/UknownGino",
    },
  },
  {
    element: { name: "Dutch translation" },
    name: {
      name: "emielderckx",
      link: "https://github.com/emielderckx",
    },
  },
  {
    element: { name: "Chinese Simplified (China) translation" },
    name: {
      name: "MikhailTapio",
      link: "https://github.com/MikhailTapio",
    },
  },
  {
    element: { name: "Russian translation" },
    name: {
      name: "Strongleong",
      link: "https://github.com/Strongleong",
    },
  },
  {
    element: { name: "Catalan translation" },
    name: {
      name: "JoanVC100",
      link: "https://github.com/JoanVC100",
    },
  },
  {
    element: { name: "Polish translation" },
    name: {
      name: "RDKRACZ",
      link: "https://github.com/RDKRACZ",
    },
  },
  {
    element: { name: "Spanish translation" },
    name: {
      name: "zeedif",
      link: "https://github.com/zeedif",
    },
  },
  {
    element: { name: "Russian translation" },
    name: {
      name: "DrHesperus",
      link: "https://github.com/DrHesperus",
    },
  },
  {
    element: { name: "Swedish translation" },
    name: {
      name: "TechnicProblem",
      link: "https://github.com/TechnicProblem",
    },
  },
  {
    element: { name: "Ukrainian translation" },
    name: {
      name: "ProSplash1",
      link: "https://legacy.curseforge.com/members/prosplash1",
    },
  },
  {
    element: { name: "Japanese translation" },
    name: {
      name: "shonkei",
      link: "https://github.com/shonkei",
    },
  },
  {
    element: { name: "Chinese Simplified (China) translation" },
    name: {
      name: "XmLinkia",
      link: "https://github.com/XmLinkia",
    },
  },
  {
    element: { name: "Korean translation" },
    name: {
      name: "gyular",
      link: "https://github.com/gyular",
    },
  },
  {
    element: { name: "Polish translation" },
    name: {
      name: "joker876",
      link: "https://github.com/joker876",
    },
  },
  {
    element: { name: "Czech translation" },
    name: {
      name: "HonzaVinCZ",
      link: "https://github.com/HonzaVinCZ",
    },
  },
  {
    element: { name: "Chinese Simplified (China) translation" },
    name: {
      name: "IceBingQI",
      link: "https://github.com/IceBingQI",
    },
  },
  {
    element: { name: "Brazilian Portuguese translation" },
    name: {
      name: "Sanadriell",
      link: "https://github.com/Sanadriell",
    },
  },
  {
    element: { name: "Russian translation" },
    name: {
      name: "Syorito Hatsuki",
      link: "https://github.com/syorito-hatsuki",
    },
  },
  {
    element: { name: "Argentinian Spanish translation" },
    name: {
      name: "aguzzfw",
      link: "https://legacy.curseforge.com/members/aguzzfw",
    },
  },
  {
    element: { name: "Mexican Spanish translation" },
    name: {
      name: "NetongasNG",
      link: "https://github.com/NetongasNG",
    },
  },
  {
    element: { name: "Brazilian Portuguese translation" },
    name: {
      name: "FITFC",
      link: "https://github.com/FITFC",
    },
  },
  {
    element: { name: "Japanese translation" },
    name: {
      name: "Omokage R",
      link: "https://github.com/Omokage-R",
    },
  },
  {
    element: { name: "Russian translation" },
    name: {
      name: "Heimdallr-1",
      link: "https://github.com/Heimdallr-1",
    },
  },
  {
    element: { name: "Chinese Traditional translation" },
    name: {
      name: "notlin4",
      link: "https://github.com/notlin4",
    },
  },
  {
    element: { name: "Tatar translation" },
    name: {
      name: "Amirhan-Taipovjan-Greatest-I",
      link: "https://github.com/Amirhan-Taipovjan-Greatest-I",
    },
  },
  {
    element: { name: "Swedish translation" },
    name: {
      name: "Dontknow09",
      link: "https://github.com/Dontknow09",
    },
  },
  {
    element: { name: "Chinese Simplified (China) translation" },
    name: {
      name: "Fang_Zhijian",
      link: "https://github.com/klxf",
    },
  },
  {
    element: { name: "Polish translation" },
    name: {
      name: "NieBoczek",
      link: "https://github.com/Bocz3k",
    },
  },
  {
    element: { name: "Ukrainian translation" },
    name: {
      name: "Maks",
      link: "https://github.com/masik16u",
    },
  },
  {
    element: { name: "French translation" },
    name: {
      name: "Supertheobrg",
      link: "https://github.com/Supertheobrg",
    },
  },
  {
    element: { name: "Norwegian Bokmål translation" },
    name: {
      name: "Bloodaxe",
      link: "https://github.com/Bloodaxe95",
    },
  },
  {
    element: { name: "Mexican Spanish translation" },
    name: {
      name: "CANALETA",
      link: "https://github.com/CANALETA",
    },
  },
  {
    element: { name: "Spanish translation" },
    name: {
      name: "Christopher",
      link: "https://github.com/ChrisTVH",
    },
  },
  {
    element: { name: "Russian translation" },
    name: {
      name: "BAD7777",
      link: "https://github.com/BAD7777",
    },
  },
  {
    element: { name: "Swedish translation" },
    name: {
      name: "Dontknow09",
      link: "https://github.com/Dontknow09",
    },
  },
  {
    element: { name: "French translation" },
    name: {
      name: "Alex",
      link: "https://github.com/Alex-Pqn",
    },
  },
  {
    element: { name: "Korean translation" },
    name: {
      name: "sjhub",
      link: "https://github.com/sj-hub9796",
    },
  },
  {
    element: { name: "Vietnamese translation" },
    name: {
      name: "Nguyễn Thế Việt",
      link: "https://github.com/duchiru",
    },
  },
];
</script>
