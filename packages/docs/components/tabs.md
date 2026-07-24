# Tabs 标签页

<script setup>
import { ref } from 'vue'
const tabsValue = ref('tab1')
const tabsList = ref([
  { label: '标签一', value: 'tab1' },
  { label: '标签二', value: 'tab2' },
  { label: '标签三', value: 'tab3' }
])
</script>

标签页组件，用于切换内容区域。

## 基本用法

<component-demo code="<McTabs v-model='tabsValue' :tabs='tabsList' />">
<McTabs v-model="tabsValue" :tabs="tabsList" />
</component-demo>

## 卡片样式

<component-demo code="<McTabs v-model='tabsValue' :tabs='tabsList' type='card' />">
<McTabs v-model="tabsValue" :tabs="tabsList" type="card" />
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| model-value | `string` | `''` | 绑定值 |
| tabs | `Array` | `[]` | 标签列表 |
| type | `'line' \| 'card'` | `'line'` | 类型 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:model-value | 切换时触发 | `value: string` |
| change | 切换时触发 | `value: string` |