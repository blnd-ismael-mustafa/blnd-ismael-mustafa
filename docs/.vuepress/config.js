import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Blnd Ismael',
  description: 'Portfolio',

  theme: defaultTheme({
    logo: '/images/home/logo.png',
    navbar: [
      '/',
      { text: 'Projects', link: '/project/' },
      { text: 'Skills', link: '/skill/' },
      { text: 'Certifications', link: '/certification/' },
    ],
  }),

  plugins: [
    blogPlugin({
      filter: ({ filePathRelative }) =>
        filePathRelative
          ? filePathRelative.startsWith('projects/') ||
            filePathRelative.startsWith('skills/') ||
            filePathRelative.startsWith('certifications/')
          : false,

      getInfo: ({ frontmatter, title }) => ({
        title,
        description: frontmatter.description || '',
        cover: frontmatter.cover || '',
      }),

      type: [
        {
          key: 'project',
          filter: ({ filePathRelative }) =>
            filePathRelative && filePathRelative.startsWith('projects/'),
          layout: 'Project',
          frontmatter: () => ({
            title: 'Projects',
            sidebar: false,
          }),
        },
        {
          key: 'skill',
          filter: ({ filePathRelative }) =>
            filePathRelative && filePathRelative.startsWith('skills/'),
          layout: 'Skill',
          frontmatter: () => ({
            title: 'Skills',
            sidebar: false,
          }),
        },
        {
          key: 'certification',
          filter: ({ filePathRelative }) =>
            filePathRelative && filePathRelative.startsWith('certifications/'),
          layout: 'Certification',
          frontmatter: () => ({
            title: 'Certifications',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})
