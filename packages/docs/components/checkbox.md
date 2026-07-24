# Checkbox 复选框

<script setup>
import { ref } from 'vue'
const checkboxValue = ref(false)
const checkboxValue2 = ref(true)
</script>

多选框组件。

## 基本用法

<component-demo code="<McCheckbox v-model='checkboxValue' label='已选中' />
<McCheckbox v-model='checkboxValue2' label='未选中' />">
<McCheckbox v-model="checkboxValue" label="已选中" />
<McCheckbox v-model="checkboxValue2" label="未选中" />
</component-demo>

## 尺寸

<component-demo code="<McCheckbox v-model='checkboxValue' size='sm' label='小号' />
<McCheckbox v-model='checkboxValue' size='md' label='中等' />
<McCheckbox v-model='checkboxValue' size='lg' label='大号' />">
<McCheckbox v-model="checkboxValue" size="sm" label="小号" />
<McCheckbox v-model="checkboxValue" size="md" label="中等" />
<McCheckbox v-model="checkboxValue" size="lg" label="大号" />
</component-demo>

## 禁用状态

<component-demo code="<McCheckbox v-model='checkboxValue' disabled label='禁用已选中' />
<McCheckbox v-model='checkboxValue2' disabled label='禁用未选中' />">
<McCheckbox v-model="checkboxValue" disabled label="禁用已选中" />
<McCheckbox v-model="checkboxValue2" disabled label="禁用未选中" />
</component-demo>

## 半选状态

<component-demo code="<McCheckbox indeterminate label='半选' />">
<McCheckbox indeterminate label="半选" />
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| model-value | `boolean` | `false` | 绑定值 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |
| indeterminate | `boolean` | `false` | 是否半选 |
| label | `string` | `''` | 标签文本 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:model-value | 绑定值变化时触发 | `value: boolean` |
| change | 切换时触发 | `value: boolean` |
