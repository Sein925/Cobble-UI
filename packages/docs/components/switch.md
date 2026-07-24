# Switch 开关

<script setup>
import { ref } from 'vue'
const switchValue = ref(false)
const switchValue2 = ref(true)
</script>

开关选择器。

## 基本用法

<component-demo code="<McSwitch v-model='switchValue' />
<McSwitch v-model='switchValue2' />">
<McSwitch v-model="switchValue" />
<McSwitch v-model="switchValue2" />
</component-demo>

## 尺寸

<component-demo code="<McSwitch v-model='switchValue' size='sm' />
<McSwitch v-model='switchValue' size='md' />
<McSwitch v-model='switchValue' size='lg' />">
<McSwitch v-model="switchValue" size="sm" />
<McSwitch v-model="switchValue" size="md" />
<McSwitch v-model="switchValue" size="lg" />
</component-demo>

## 自定义文字

<component-demo code="<McSwitch v-model='switchValue' active-text='开' inactive-text='关' />">
<McSwitch v-model="switchValue" active-text="开" inactive-text="关" />
</component-demo>

## 禁用状态

<component-demo code="<McSwitch v-model='switchValue' disabled />
<McSwitch v-model='switchValue2' disabled />">
<McSwitch v-model="switchValue" disabled />
<McSwitch v-model="switchValue2" disabled />
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| model-value | `boolean` | `false` | 绑定值 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |
| active-text | `string` | `''` | 开启时的文字 |
| inactive-text | `string` | `''` | 关闭时的文字 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:model-value | 绑定值变化时触发 | `value: boolean` |
| change | 切换时触发 | `value: boolean` |
