# Slider 滑块

<script setup>
import { ref } from 'vue'
const sliderValue = ref(50)
</script>

滑块组件，用于选择数值。

## 基本用法

<component-demo code="<McSlider v-model='sliderValue' />">
<McSlider v-model="sliderValue" />
</component-demo>

## 范围

<component-demo code="<McSlider v-model='sliderValue' :min='0' :max='100' />">
<McSlider v-model="sliderValue" :min="0" :max="100" />
</component-demo>

## 尺寸

<component-demo code="<McSlider v-model='sliderValue' size='sm' />
<McSlider v-model='sliderValue' size='md' />
<McSlider v-model='sliderValue' size='lg' />">
<McSlider v-model="sliderValue" size="sm" />
<McSlider v-model="sliderValue" size="md" />
<McSlider v-model="sliderValue" size="lg" />
</component-demo>

## 禁用状态

<component-demo code="<McSlider v-model='sliderValue' disabled />">
<McSlider v-model="sliderValue" disabled />
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| model-value | `number` | `50` | 绑定值 |
| min | `number` | `0` | 最小值 |
| max | `number` | `100` | 最大值 |
| step | `number` | `1` | 步长 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:model-value | 绑定值变化时触发 | `value: number` |
| change | 变化时触发 | `value: number` |
