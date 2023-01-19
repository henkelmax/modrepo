export default {
  title: 'ModRepo',
  description: 'ModRepo',
  cleanUrls: 'with-subfolders',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/henkelmax' },
    ],
    nav: [
      {
        text: 'Information',
        items: [
          { text: 'FAQ', link: '/minecraft/faq.md' },
          { text: 'How to get logs', link: '/minecraft/how_to_get_logs.md' },
        ]
      },
      {
        text: 'Mods',
        items: [
          { text: 'Simple Voice Chat', link: '/minecraft/voicechat/overview.md' },
          { text: 'Ultimate Car Mod', link: '/minecraft/car/overview.md' },
        ]
      },
      { text: 'Privacy', link: '/privacy.md' },
    ],
    sidebar: {
      '/minecraft/voicechat/': [
        {
          text: 'General',
          items: [
            { text: 'Overview', link: '/minecraft/voicechat/overview.md' },
            { text: 'FAQ', link: '/minecraft/voicechat/faq.md' },
            { text: 'Credits', link: '/minecraft/voicechat/credits.md' },
            { text: 'Downloads', link: '/minecraft/voicechat/downloads.md' },
            { text: 'Discord', link: 'https://discord.gg/4dH2zwTmyX' },
            { text: 'Issues', link: 'https://github.com/henkelmax/simple-voice-chat/issues' },
            { text: 'GitHub', link: 'https://github.com/henkelmax/simple-voice-chat' },
            { text: 'API', link: 'https://github.com/henkelmax/simple-voice-chat/tree/1.19.3/api' },
          ]
        },
        {
          text: 'Wiki',
          items: [
            { text: 'Installation', link: '/minecraft/voicechat/wiki/installation.md' },
            { text: 'Setup', link: '/minecraft/voicechat/wiki/setup.md' },
            { text: 'Troubleshooting Problems', link: '/minecraft/voicechat/wiki/troubleshooting.md' },
            { text: 'Configuration', link: '/minecraft/voicechat/wiki/configuration.md' },
            { text: 'Compatibility', link: '/minecraft/voicechat/wiki/compatibility.md' },
            { text: 'Supported Versions', link: '/minecraft/voicechat/wiki/supported_versions.md' },
            { text: 'Commands', link: '/minecraft/voicechat/wiki/commands.md' },
            { text: 'Permissions', link: '/minecraft/voicechat/wiki/permissions.md' },
            { text: 'MacOS Microphone Permissions', link: '/minecraft/voicechat/wiki/macos.md' },
            { text: 'Icons', link: '/minecraft/voicechat/wiki/icons.md' },
          ]
        },
        {
          text: 'Support',
          items: [
            { text: 'Get a Support Key', link: '/minecraft/voicechat/wiki/support.md' }
          ]
        },
        {
          text: 'API',
          items: [
            { text: 'Overview', link: '/minecraft/voicechat/api/overview.md' },
            { text: 'Getting Started', link: '/minecraft/voicechat/api/getting_started.md' },
            { text: 'Your Plugin', link: '/minecraft/voicechat/api/your_plugin.md' },
            { text: 'Registering Events', link: '/minecraft/voicechat/api/registering_events.md' },
            { text: 'Examples', link: '/minecraft/voicechat/api/examples.md' },
            { text: 'Javadocs', link: 'https://voicechat.modrepo.de/' },
          ]
        },
      ],
      '/minecraft/car/': [
        {
          text: 'General',
          items: [
            { text: 'Overview', link: '/minecraft/car/overview.md' },
            { text: 'FAQ', link: '/minecraft/car/faq.md' },
            { text: 'Credits', link: '/minecraft/car/credits.md' },
          ]
        },
        {
          text: 'Wiki',
          items: [
            { text: 'Fuel Production', link: '/minecraft/car/wiki/fuel_production.md' },
            { text: 'Car Crafting', link: '/minecraft/car/wiki/car_crafting.md' },
            { text: 'Vehicle Operation', link: '/minecraft/car/wiki/vehicle_operation.md' },
            { text: 'Road Construction', link: '/minecraft/car/wiki/road_construction.md' },
            { text: 'Crafting Recipes', link: '/minecraft/car/wiki/crafting_recipes.md' },
          ]
        }
      ]
    },
    footer: {
      message: 'ModRepo',
      copyright: '© Max Henkel'
    }
  }
}