# Breadcrumb 面包屑

<script setup>
import { ref } from 'vue'
const breadcrumbItems = ref([
  { label: '首页', path: '/' },
  { label: '组件', path: '/components' },
  { label: '按钮', path: '/components/button' }
])
</script>

面包屑导航组件。

## 基本用法

<component-demo code="<McBreadcrumb :items='breadcrumbItems' />">
<McBreadcrumb :items="breadcrumbItems" />
</component-demo>

## 自定义分隔符

<component-demo code="<McBreadcrumb :items='breadcrumbItems' separator='/' />">
<McBreadcrumb :items="breadcrumbItems" separator="/" />
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | `Array` | `[]` | 面包屑项列表 |
| separator | `string` | `>` | 分隔符 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击面包屑项时触发 | `item: BreadcrumbItem` |