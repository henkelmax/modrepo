---
titleTemplate: Simple Voice Chat
aside: false
---

# Credits

<Credits :credits="credits"/>

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
      name: "RNNoise natives",
      link: "https://github.com/mjwells2002/rnnoise-bin",
    },
    name: {
      name: "mjwells2002",
      link: "https://github.com/mjwells2002",
    },
  },
  {
    element: {
      name: "Opus natives",
      link: "https://github.com/mjwells2002/libopus-bin",
    },
    name: {
      name: "mjwells2002",
      link: "https://github.com/mjwells2002",
    },
  },
  {
    element: { name: "Opus natives for ARM based macs" },
    name: {
      name: "jason-green-io",
      link: "https://github.com/jason-green-io",
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
      name: "dd-plist",
      link: "https://github.com/3breadt/dd-plist",
    },
    license: {
      name: "Custom",
      link: "https://github.com/3breadt/dd-plist/blob/master/LICENSE.txt",
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
      link: "https://github.com/FabricMC/fabric/blob/1.19.3/LICENSE",
    },
  },
  {
    element: {
      name: "MacOS microphone workaround",
    },
    name: {
      name: "mjwells2002",
      link: "https://github.com/mjwells2002",
    },
  },
  {
    element: {
      name: "MacOS microphone workaround",
    },
    name: {
      name: "cbyrneee",
      link: "https://github.com/cbyrneee",
    },
  },
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
      link: "https://www.curseforge.com/members/prosplash1",
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
      link: "https://www.curseforge.com/members/aguzzfw",
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
];
</script>
