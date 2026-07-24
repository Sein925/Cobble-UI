# Dropdown 下拉菜单

<script setup>
import { ref } from 'vue'
const dropdownValue = ref('')
const dropdownOptions = ref([
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' }
])
</script>

下拉菜单组件。

## 基本用法

<component-demo code="<McDropdown v-model='dropdownValue' :options='dropdownOptions' />">
<McDropdown v-model="dropdownValue" :options="dropdownOptions" />
</component-demo>

## 悬浮触发

<component-demo code="<McDropdown v-model='dropdownValue' :options='dropdownOptions' trigger='hover' />">
<McDropdown v-model="dropdownValue" :options="dropdownOptions" trigger="hover" />
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| model-value | `string \| number` | `''` | 绑定值 |
| options | `Array` | `[]` | 选项列表 |
| trigger | `'click' \| 'hover'` | `'click'` | 触发方式 |
| disabled | `boolean` | `false` | 是否禁用 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:model-value | 选择变化时触发 | `value: string \| number` |
| change | 选择变化时触发 | `value: string \| number` |