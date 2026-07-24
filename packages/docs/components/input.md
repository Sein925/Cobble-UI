# Input 输入框

<script setup>
import { ref } from 'vue'
const inputValue = ref('')
</script>

输入框组件。

## 基本用法

<component-demo code="<McInput v-model='inputValue' placeholder='请输入内容' />">
<McInput v-model="inputValue" placeholder="请输入内容" />
</component-demo>

## 尺寸

<component-demo code="<McInput v-model='inputValue' size='sm' placeholder='小号输入框' />
<McInput v-model='inputValue' size='md' placeholder='中等输入框' />
<McInput v-model='inputValue' size='lg' placeholder='大号输入框' />">
<McInput v-model="inputValue" size="sm" placeholder="小号输入框" />
<McInput v-model="inputValue" size="md" placeholder="中等输入框" />
<McInput v-model="inputValue" size="lg" placeholder="大号输入框" />
</component-demo>

## 状态

<component-demo code="<McInput v-model='inputValue' status='success' placeholder='成功状态' />
<McInput v-model='inputValue' status='warning' placeholder='警告状态' />
<McInput v-model='inputValue' status='error' placeholder='错误状态' />">
<McInput v-model="inputValue" status="success" placeholder="成功状态" />
<McInput v-model="inputValue" status="warning" placeholder="警告状态" />
<McInput v-model="inputValue" status="error" placeholder="错误状态" />
</component-demo>

## 禁用与只读

<component-demo code="<McInput v-model='inputValue' disabled placeholder='禁用状态' />
<McInput v-model='inputValue' readonly placeholder='只读状态' />">
<McInput v-model="inputValue" disabled placeholder="禁用状态" />
<McInput v-model="inputValue" readonly placeholder="只读状态" />
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| model-value | `string` | `''` | 绑定值 |
| placeholder | `string` | `''` | 占位符 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |
| status | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | 状态 |
| disabled | `boolean` | `false` | 是否禁用 |
| readonly | `boolean` | `false` | 是否只读 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:model-value | 绑定值变化时触发 | `value: string` |
| input | 输入时触发 | `value: string` |
| focus | 获取焦点时触发 | `event: FocusEvent` |
| blur | 失去焦点时触发 | `event: FocusEvent` |
