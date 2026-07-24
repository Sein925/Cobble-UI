# Table 表格

<script setup>
import { ref } from 'vue'
const columns = ref([
  { key: 'name', label: '姓名' },
  { key: 'age', label: '年龄' },
  { key: 'gender', label: '性别' }
])
const data = ref([
  { name: '张三', age: 25, gender: '男' },
  { name: '李四', age: 30, gender: '女' },
  { name: '王五', age: 28, gender: '男' }
])
</script>

表格组件，用于展示数据。

## 基本用法

<component-demo code="<McTable :columns='columns' :data='data' />">
<McTable :columns="columns" :data="data" />
</component-demo>

## 带边框

<component-demo code="<McTable :columns='columns' :data='data' bordered />">
<McTable :columns="columns" :data="data" bordered />
</component-demo>

## 斑马纹

<component-demo code="<McTable :columns='columns' :data='data' striped />">
<McTable :columns="columns" :data="data" striped />
</component-demo>

## 可悬浮

<component-demo code="<McTable :columns='columns' :data='data' hoverable />">
<McTable :columns="columns" :data="data" hoverable />
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| columns | `Array` | `[]` | 列配置 |
| data | `Array` | `[]` | 数据源 |
| bordered | `boolean` | `false` | 是否带边框 |
| striped | `boolean` | `false` | 是否斑马纹 |
| hoverable | `boolean` | `false` | 是否可悬浮 |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义列内容 |