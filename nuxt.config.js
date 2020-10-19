
const modIDs = ['advancedtools', 'better_respawn', 'camera', 'car', 'corpse', 'easy_villagers', 'fakeblocks', 'gravestone', 'mining_dimension', 'reap', 'shulkerbox', 'sleeping_bags', 'storage_overhaul', 'persistent_players', 'modenforcer', 'plane'];

const siteName = 'ModRepo';
const siteDescription = 'Minecraft Mods and more';
const siteLogo = '/icon.png';

export default {
  target: 'static',
  head: {
    titleTemplate: `%s - ${siteName}`,
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteDescription },
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og:title', property: 'og:title', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: siteLogo },
      { hid: 'og:description', property: 'og:description', content: siteDescription },
      { hid: 'twitter:title', name: 'twitter:title', content: siteName },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:image', property: 'twitter:image', content: siteLogo },
      { hid: 'itemprop:name', itemprop: 'name', content: siteName },
      { hid: 'itemprop:image', itemprop: 'image', content: siteLogo },
      { hid: 'itemprop:description', itemprop: 'description', content: siteDescription }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: [],
  plugins: [
    '~/plugins/mixins'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {},
  vuetify: {},
  build: {},
  generate: {
    routes: modIDs
      .flatMap(modid => [`/minecraft/${modid}/overview`, `/minecraft/${modid}/images`, `/minecraft/${modid}/update_history`, `/minecraft/${modid}/update_history`, `/minecraft/${modid}/credits`]),
    exclude: [/\/.*[A-Z].*/],
    fallback: '404.html'
  }
}
