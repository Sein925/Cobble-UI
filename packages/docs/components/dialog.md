# Dialog 对话框

<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)
</script>

对话框组件，用于模态对话框。

## 基本用法

<component-demo code="<McButton variant='primary' @click='dialogVisible = true'>打开对话框</McButton>
<McDialog v-model='dialogVisible' title='对话框标题'>
  这是对话框内容。
</McDialog>">
<McButton variant="primary" @click="dialogVisible = true">打开对话框</McButton>
<McDialog v-model="dialogVisible" title="对话框标题">
  这是对话框内容。
</McDialog>
</component-demo>

## 自定义宽度

<component-demo code="<McButton variant='primary' @click='dialogVisible = true'>打开宽对话框</McButton>
<McDialog v-model='dialogVisible' title='宽对话框' width='600px'>
  这是一个更宽的对话框。
</McDialog>">
<McButton variant="primary" @click="dialogVisible = true">打开宽对话框</McButton>
<McDialog v-model="dialogVisible" title="宽对话框" width="600px">
  这是一个更宽的对话框。
</McDialog>
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| visible | `boolean` | `false` | 是否显示 |
| title | `string` | `''` | 标题 |
| width | `string` | `'400px'` | 宽度 |
| closable | `boolean` | `true` | 是否可关闭 |
| mask-closable | `boolean` | `true` | 点击遮罩是否可关闭 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:visible | 显示状态变化时触发 | `value: boolean` |
| close | 关闭时触发 | - |
| confirm | 确认时触发 | - |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 内容 |
| footer | 底部按钮区 |
