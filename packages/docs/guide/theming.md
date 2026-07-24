# 主题配置

Cobble UI 提供了丰富的主题配置选项，让你可以自定义组件库的外观。

## 内置主题

组件库内置了两种主题：

### 浅色主题（默认）

```css
:root {
  --mc-primary: #4CAF50;
  --mc-primary-dark: #2E7D32;
  --mc-secondary: #FF9800;
  --mc-secondary-dark: #EF6C00;
  --mc-accent: #E91E63;
  --mc-background: #F5F5F5;
  --mc-surface: #FFFFFF;
  --mc-border: #BDBDBD;
  --mc-text: #212121;
  --mc-text-secondary: #757575;
}
```

### 深色主题

添加 `.dark` 类到 `html` 标签即可启用深色主题：

```html
<html class="dark">
```

```css
.dark {
  --mc-primary: #2E7D32;
  --mc-primary-dark: #1B5E20;
  --mc-secondary: #EF6C00;
  --mc-secondary-dark: #E65100;
  --mc-accent: #C2185B;
  --mc-background: #1A1A1A;
  --mc-surface: #2D2D2D;
  --mc-border: #424242;
  --mc-text: #FFFFFF;
  --mc-text-secondary: #BDBDBD;
}
```

## 使用 useTheme 组合式函数

组件库提供了 `useTheme` 组合式函数来管理主题状态：

```vue
<script setup>
import { useTheme } from '@cobble-ui/web-vue'

const { isDark, toggleMode, themeMode } = useTheme()
</script>

<template>
  <div>
    <p>当前模式: {{ themeMode }}</p>
    <button @click="toggleMode">
      {{ isDark ? '🌙 深色模式' : '☀️ 浅色模式' }}
    </button>
  </div>
</template>
```

### API

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| isDark | `boolean` | 是否为深色模式 |
| themeMode | `'light' \| 'dark'` | 当前主题模式 |
| toggleMode | `() => void` | 切换主题模式 |
| setMode | `(mode: 'light' \| 'dark') => void` | 设置主题模式 |

## 自定义主题

你可以通过覆盖 CSS 变量来自定义主题：

```css
:root {
  --mc-primary: #FF5722;
  --mc-primary-dark: #E64A19;
  --mc-secondary: #03A9F4;
  --mc-background: #FAFAFA;
  --mc-surface: #FFFFFF;
}

.dark {
  --mc-primary: #FF7043;
  --mc-primary-dark: #F4511E;
  --mc-background: #212121;
  --mc-surface: #303030;
}
```

## CSS 变量列表

以下是所有可用的 CSS 变量：

| 变量名 | 默认值（浅色） | 默认值（深色） | 说明 |
| --- | --- | --- | --- |
| --mc-primary | #4CAF50 | #2E7D32 | 主色 |
| --mc-primary-dark | #2E7D32 | #1B5E20 | 主色深色 |
| --mc-secondary | #FF9800 | #EF6C00 | 次要颜色 |
| --mc-secondary-dark | #EF6C00 | #E65100 | 次要颜色深色 |
| --mc-accent | #E91E63 | #C2185B | 强调色 |
| --mc-accent-dark | #C2185B | #880E4F | 强调色深色 |
| --mc-background | #F5F5F5 | #1A1A1A | 背景色 |
| --mc-surface | #FFFFFF | #2D2D2D | 表面色 |
| --mc-border | #BDBDBD | #424242 | 边框色 |
| --mc-text | #212121 | #FFFFFF | 文本色 |
| --mc-text-secondary | #757575 | #BDBDBD | 次要文本色 |
| --mc-success | #4CAF50 | #2E7D32 | 成功色 |
| --mc-warning | #FF9800 | #EF6C00 | 警告色 |
| --mc-error | #F44336 | #C62828 | 错误色 |
| --mc-info | #2196F3 | #1565C0 | 信息色 |

## 像素风格变量

组件库使用以下变量来控制像素风格：

```css
$pixel-size: 4px;
```

你可以在 SCSS 文件中重新定义这个变量来调整像素大小。

### SCSS Mixins

组件库提供了一些 SCSS mixins 来帮助你创建像素风格的组件：

```scss
@mixin pixel-border($color: var(--mc-border), $width: 2px) {
  border: $width solid $color;
  outline: none;
}

@mixin pixel-shadow($color: var(--mc-border), $offset: $pixel-size) {
  box-shadow: $offset $offset 0 $color;
}

@mixin pixel-font {
  font-family: 'Press Start 2P', 'Courier New', monospace;
  font-smooth: never;
  -webkit-font-smoothing: none;
}
```

使用示例：

```scss
.my-pixel-button {
  @include pixel-border(var(--mc-primary));
  @include pixel-shadow(var(--mc-primary-dark));
  @include pixel-font;
}
```
