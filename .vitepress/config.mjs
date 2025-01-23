import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Pixelfed Glitch Docs",
  base: "/",
  description: "The Pixelfed Glitch documentation",
  themeConfig: {
    logo: {
      light: '/logo-black.png',
      dark: '/logo-white.png'
    },

    siteTitle: 'Docs',

  
    // https://vitepress.dev/reference/frontmatter-config#outline
    outline: {
      level: [2, 3, 4, 5],
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'pixelfed', link: 'https://pixelfed-glitch.github.io' },
      { text: 'Support', link: 'https://github.com/pixelfed-glitch/pixelfed/discussions' },
    ],

    search: {
      provider: 'local'
    },

    i18nRouting: false,

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Introduction', link: '/project/introduction' },
          { text: 'Community', link: '/project/community' },
        ]
      },
      {
        text: 'Running Pixelfed',
        items: [
          {
            text: "Docker",
            items: [
              { text: "Prerequisites", link: "/running-pixelfed/docker/prerequisites" },
              { text: "Installation", link: "/running-pixelfed/docker/installation" },
              { text: "Customize", link: "/running-pixelfed/docker/customize" },
              { text: "FAQ", link: "/running-pixelfed/docker/faq" },
              { text: "Runtimes", link: "/running-pixelfed/docker/runtimes" },
              { text: "Migrate to v2", link: "/running-pixelfed/docker/migrate/v2.0" },
            ],
          },
          {
            text: "Generic",
            items: [
              { text: 'Prerequisites', link: '/running-pixelfed/prerequisites' },
              { text: 'Installation', link: '/running-pixelfed/installation' },
              { text: 'Configuration', link: '/running-pixelfed/configuration' },
              { text: 'Administration', link: '/running-pixelfed/administration' },
              { text: 'Push Notifications', link: '/running-pixelfed/push-notifications' },
              { text: 'CLI Cheatsheet', link: '/running-pixelfed/cli-cheatsheet' },
              { text: 'Troubleshooting', link: '/running-pixelfed/troubleshooting' }
        ],
      },
    ]
  },
      {
        text: 'Spec Compliance',
        items: [
          { text: 'ActivityPub', link: '/spec/ActivityPub' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pixelfed-glitch/pixelfed' },
      { icon: 'discord', link: 'https://discord.gg/HuZc6jr25X' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
  },
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicon.png"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicon.png"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
})
