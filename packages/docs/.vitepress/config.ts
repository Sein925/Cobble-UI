import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cobble UI',
  description: '一个 Minecraft 风格的像素艺术 UI 组件库',
  base: '/cobble-ui/',
  lang: 'zh-CN',
  appearance: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/starting' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/starting' },
          { text: '主题配置', link: '/guide/theming' }
        ]
      },
      {
        text: '表单组件',
        items: [
          { text: '按钮 Button', link: '/components/button' },
          { text: '输入框 Input', link: '/components/input' },
          { text: '开关 Switch', link: '/components/switch' },
          { text: '滑块 Slider', link: '/components/slider' },
          { text: '复选框 Checkbox', link: '/components/checkbox' },
          { text: '单选框 Radio', link: '/components/radio' },
          { text: '选择器 Select', link: '/components/select' }
        ]
      },
      {
        text: '反馈组件',
        items: [
          { text: '角标 Badge', link: '/components/badge' },
          { text: '消息提示 Alert', link: '/components/alert' },
          { text: '对话框 Dialog', link: '/components/dialog' },
          { text: '进度条 Progress', link: '/components/progress' },
          { text: '加载动画 Spinner', link: '/components/spinner' }
        ]
      },
      {
        text: '导航组件',
        items: [
          { text: '标签页 Tabs', link: '/components/tabs' },
          { text: '分页 Pagination', link: '/components/pagination' },
          { text: '面包屑 Breadcrumb', link: '/components/breadcrumb' },
          { text: '下拉菜单 Dropdown', link: '/components/dropdown' }
        ]
      },
      {
        text: '布局组件',
        items: [
          { text: '容器 Container', link: '/components/container' },
          { text: '卡片 Card', link: '/components/card' },
          { text: '网格 Grid', link: '/components/grid' },
          { text: '弹性布局 Flex', link: '/components/flex' }
        ]
      },
      {
        text: '数据组件',
        items: [
          { text: '表格 Table', link: '/components/table' }
        ]
      }
    ],
    footer: {
      message: 'Made with ❤️ by Cobble UI Team',
      copyright: 'Copyright 2026 Cobble UI'
    },
    editLink: {
      pattern: 'https://github.com/cobble-ui/cobble-ui/edit/main/packages/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    search: {
      provider: 'local'
    }
  }
})
