# Radio 单选框

<script setup>
import { ref } from 'vue'
const radioValue = ref('')
</script>

单选框组件。

## 基本用法

<component-demo code="<McRadio v-model='radioValue' value='option1' label='选项一' />
<McRadio v-model='radioValue' value='option2' label='选项二' />">
<McRadio v-model="radioValue" value="option1" label="选项一" />
<McRadio v-model="radioValue" value="option2" label="选项二" />
</component-demo>

## 尺寸

<component-demo code="<McRadio v-model='radioValue' value='sm' size='sm' label='小号' />
<McRadio v-model='radioValue' value='md' size='md' label='中等' />
<McRadio v-model='radioValue' value='lg' size='lg' label='大号' />">
<McRadio v-model="radioValue" value="sm" size="sm" label="小号" />
<McRadio v-model="radioValue" value="md" size="md" label="中等" />
<McRadio v-model="radioValue" value="lg" size="lg" label="大号" />
</component-demo>

## 禁用状态

<component-demo code="<McRadio v-model='radioValue' value='disabled1' disabled label='禁用选项一' />
<McRadio v-model='radioValue' value='disabled2' disabled label='禁用选项二' />">
<McRadio v-model="radioValue" value="disabled1" disabled label="禁用选项一" />
<McRadio v-model="radioValue" value="disabled2" disabled label="禁用选项二" />
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| model-value | `string` | `''` | 绑定值 |
| value | `string` | `''` | 选项值 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |
| label | `string` | `''` | 标签文本 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:model-value | 绑定值变化时触发 | `value: string` |
| change | 切换时触发 | `value: string` |
