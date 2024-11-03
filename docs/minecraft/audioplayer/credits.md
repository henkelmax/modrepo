---
titleTemplate: Audio Player
aside: false
---

# Credits

<Credits :credits="credits"/>

<script setup>
const credits = [
  {
    element: { name: "Web UI" },
    name: {
      name: "GeiloChef",
      link: "https://github.com/GeiloChef",
    },
  },
  {
    element: {
      name: "microhttp",
      link: "https://github.com/ebarlas/microhttp",
    },
    license: {
      name: "MIT",
      link: "https://raw.githubusercontent.com/ebarlas/microhttp/refs/heads/main/LICENSE",
    },
  }
];
</script>
