import { defineConfig } from 'vitepress';
import pkg from 'git-describe';
const { gitDescribeSync } = pkg;

export default defineConfig({
  title: 'ModRepo',
  description: 'ModRepo',
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/henkelmax' },
    ],
    nav: [
      {
        text: 'Information',
        items: [
          { text: 'FAQ', link: '/minecraft/faq' },
          { text: 'How to get logs', link: '/minecraft/how_to_get_logs' },
        ]
      },
      {
        text: 'Mods',
        items: [
          { text: 'Simple Voice Chat', link: '/minecraft/voicechat/overview' },
          { text: 'Ultimate Car Mod', link: '/minecraft/car/overview' },
          { text: 'Peek', link: '/minecraft/peek/wiki/overview' },
        ]
      },
      { text: 'Privacy', link: '/privacy' },
    ],
    sidebar: {
      '/minecraft/voicechat/': [
        {
          text: 'General',
          items: [
            { text: 'Overview', link: '/minecraft/voicechat/overview' },
            { text: 'FAQ', link: '/minecraft/voicechat/faq' },
            { text: 'Credits', link: '/minecraft/voicechat/credits' },
            { text: 'Downloads', link: '/minecraft/voicechat/downloads' },
            { text: 'Addons', link: '/minecraft/voicechat/addons' },
            { text: 'Discord', link: 'https://discord.gg/4dH2zwTmyX' },
            { text: 'Issues', link: 'https://github.com/henkelmax/simple-voice-chat/issues' },
            { text: 'GitHub', link: 'https://github.com/henkelmax/simple-voice-chat' },
          ]
        },
        {
          text: 'Wiki',
          items: [
            { text: 'Installation', link: '/minecraft/voicechat/wiki/installation' },
            { text: 'Client Setup', link: '/minecraft/voicechat/wiki/client_setup' },
            { text: 'Server Setup', link: '/minecraft/voicechat/wiki/server_setup' },
            { text: 'Troubleshooting Problems', link: '/minecraft/voicechat/wiki/troubleshooting' },
            { text: 'Key Bindings', link: '/minecraft/voicechat/wiki/key_bindings' },
            { text: 'Configuration', link: '/minecraft/voicechat/wiki/configuration' },
            { text: 'Compatibility', link: '/minecraft/voicechat/wiki/compatibility' },
            { text: 'Supported Versions', link: '/minecraft/voicechat/wiki/supported_versions' },
            { text: 'Commands', link: '/minecraft/voicechat/wiki/commands' },
            { text: 'Permissions', link: '/minecraft/voicechat/wiki/permissions' },
            { text: 'MacOS Microphone Permissions', link: '/minecraft/voicechat/wiki/macos' },
            { text: 'Icons', link: '/minecraft/voicechat/wiki/icons' },
          ]
        },
        {
          text: 'Support',
          items: [
            { text: 'Get a Support Key', link: '/minecraft/voicechat/wiki/support' }
          ]
        },
        {
          text: 'API',
          items: [
            { text: 'Overview', link: '/minecraft/voicechat/api/overview' },
            { text: 'Getting Started', link: '/minecraft/voicechat/api/getting_started' },
            { text: 'Your Plugin', link: '/minecraft/voicechat/api/your_plugin' },
            { text: 'Registering Events', link: '/minecraft/voicechat/api/registering_events' },
            { text: 'Example Projects', link: '/minecraft/voicechat/api/example_projects' },
            { text: 'Examples', link: '/minecraft/voicechat/api/examples' },
            { text: 'Javadocs', link: 'https://voicechat.modrepo.de/' },
            { text: 'Old Javadocs', link: '/minecraft/voicechat/api/old_javadocs' },
          ]
        },
      ],
      '/minecraft/peek/': [
        {
          text: 'Wiki',
          items: [
            { text: 'Overview', link: '/minecraft/peek/wiki/overview' },
            { text: 'Setup', link: '/minecraft/peek/wiki/setup' },
            { text: 'Configuration', link: '/minecraft/peek/wiki/configuration' },
            { text: 'Shulker Box Hints', link: '/minecraft/peek/wiki/shulker_box_hints' },
            { text: 'Data Strings', link: '/minecraft/peek/wiki/data_strings' },
            { text: 'Item Names', link: '/minecraft/peek/wiki/item_names' },
            { text: 'Resource Packs', link: '/minecraft/peek/wiki/resource_packs' },
          ]
        },
        {
          text: 'General',
          items: [
            { text: 'FAQ', link: '/minecraft/peek/faq' },
            { text: 'Credits', link: '/minecraft/peek/credits' },
          ]
        }
      ],
      '/minecraft/car/': [
        {
          text: 'General',
          items: [
            { text: 'Overview', link: '/minecraft/car/overview' },
            { text: 'FAQ', link: '/minecraft/car/faq' },
            { text: 'Credits', link: '/minecraft/car/credits' },
          ]
        },
        {
          text: 'Wiki',
          items: [
            { text: 'Fuel Production', link: '/minecraft/car/wiki/fuel_production' },
            { text: 'Car Crafting', link: '/minecraft/car/wiki/car_crafting' },
            { text: 'Vehicle Operation', link: '/minecraft/car/wiki/vehicle_operation' },
            { text: 'Road Construction', link: '/minecraft/car/wiki/road_construction' },
            { text: 'Crafting Recipes', link: '/minecraft/car/wiki/crafting_recipes' },
          ]
        }
      ]
    },
    footer: {
      message: `ModRepo Release ${gitDescribeSync().hash}`,
      copyright: '© Max Henkel'
    }
  },
  sitemap: {
    hostname: 'https://modrepo.de'
  }
});