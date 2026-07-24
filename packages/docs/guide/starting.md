# 快速开始

欢迎使用 Cobble UI！这是一个 Minecraft 风格的像素艺术 UI 组件库。

## 安装

### 使用 npm

```bash
npm install @cobble-ui/web-vue
```

### 使用 yarn

```bash
yarn add @cobble-ui/web-vue
```

### 使用 pnpm

```bash
pnpm install @cobble-ui/web-vue
```

## 引入组件

### 全局引入

在 `main.ts` 中引入：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import MinecraftUI from '@cobble-ui/web-vue'
import '@cobble-ui/web-vue/style.css'

const app = createApp(App)
app.use(MinecraftUI)
app.mount('#app')
```

### 按需引入

在组件中按需引入：

```vue
<script setup>
import { McButton, McInput } from '@cobble-ui/web-vue'
import '@cobble-ui/web-vue/style.css'
</script>

<template>
  <McButton>点击我</McButton>
  <McInput placeholder="输入内容" />
</template>
```

## 基础用法

以下是一些常用组件的示例：

### 按钮

```vue
<McButton>主要按钮</McButton>
<McButton variant="secondary">次要按钮</McButton>
<McButton variant="outline">轮廓按钮</McButton>
<McButton variant="ghost">幽灵按钮</McButton>
```

### 输入框

```vue
<McInput v-model="value" placeholder="请输入..." />
```

### 开关

```vue
<McSwitch v-model="checked" />
```

### 进度条

```vue
<McProgress :percentage="50" show-text />
```

## 主题

Cobble UI 支持深色和浅色两种主题，默认跟随系统设置。

```vue
<script setup>
import { useTheme } from '@cobble-ui/web-vue'

const { isDark, toggleMode } = useTheme()
</script>

<template>
  <button @click="toggleMode">
    {{ isDark ? '切换到浅色模式' : '切换到深色模式' }}
  </button>
</template>
```

## 下一步

- [查看组件列表](../components/button)
- [了解主题配置](./theming)
