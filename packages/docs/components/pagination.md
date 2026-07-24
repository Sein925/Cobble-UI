# Pagination 分页

分页组件，用于分页导航。

## 基本用法

<component-demo code="<McPagination :total='100' :page-size='10' />">
<McPagination :total="100" :page-size="10" />
</component-demo>

## 显示总数

<component-demo code="<McPagination :total='100' :page-size='10' show-total />">
<McPagination :total="100" :page-size="10" show-total />
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| current-page | `number` | `1` | 当前页码 |
| page-size | `number` | `10` | 每页条数 |
| total | `number` | `0` | 总条数 |
| show-total | `boolean` | `false` | 是否显示总数 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:current-page | 页码变化时触发 | `page: number` |
| change | 页码变化时触发 | `page: number` |
