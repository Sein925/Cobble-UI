# Select 选择器

<script setup>
import { ref } from 'vue'
const selectValue = ref('')
</script>

下拉选择器组件。

## 基本用法

<component-demo code="<McSelect v-model='selectValue'>
  <option value='option1'>选项一</option>
  <option value='option2'>选项二</option>
  <option value='option3'>选项三</option>
</McSelect>">
<McSelect v-model="selectValue">
  <option value="option1">选项一</option>
  <option value="option2">选项二</option>
  <option value="option3">选项三</option>
</McSelect>
</component-demo>

## 尺寸

<component-demo code="<McSelect v-model='selectValue' size='sm'>
  <option value='option1'>选项一</option>
</McSelect>
<McSelect v-model='selectValue' size='md'>
  <option value='option1'>选项一</option>
</McSelect>
<McSelect v-model='selectValue' size='lg'>
  <option value='option1'>选项一</option>
</McSelect>">
<McSelect v-model="selectValue" size="sm">
  <option value="option1">选项一</option>
</McSelect>
<McSelect v-model="selectValue" size="md">
  <option value="option1">选项一</option>
</McSelect>
<McSelect v-model="selectValue" size="lg">
  <option value="option1">选项一</option>
</McSelect>
</component-demo>

## 状态

<component-demo code="<McSelect v-model='selectValue' status='success'>
  <option value='option1'>选项一</option>
</McSelect>
<McSelect v-model='selectValue' status='warning'>
  <option value='option1'>选项一</option>
</McSelect>
<McSelect v-model='selectValue' status='error'>
  <option value='option1'>选项一</option>
</McSelect>">
<McSelect v-model="selectValue" status="success">
  <option value="option1">选项一</option>
</McSelect>
<McSelect v-model="selectValue" status="warning">
  <option value="option1">选项一</option>
</McSelect>
<McSelect v-model="selectValue" status="error">
  <option value="option1">选项一</option>
</McSelect>
</component-demo>

## 禁用状态

<component-demo code="<McSelect v-model='selectValue' disabled>
  <option value='option1'>选项一</option>
</McSelect>">
<McSelect v-model="selectValue" disabled>
  <option value="option1">选项一</option>
</McSelect>
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| model-value | `string` | `''` | 绑定值 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |
| status | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | 状态 |
| disabled | `boolean` | `false` | 是否禁用 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:model-value | 绑定值变化时触发 | `value: string` |
| change | 选择变化时触发 | `value: string` |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 选项列表 |
