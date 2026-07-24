# Alert 警告

警告提示组件。

## 基本用法

<component-demo code="<McAlert>这是一个普通警告。</McAlert>">
<McAlert>这是一个普通警告。</McAlert>
</component-demo>

## 状态

<component-demo code="<McAlert status='success'>成功状态</McAlert>
<McAlert status='warning'>警告状态</McAlert>
<McAlert status='error'>错误状态</McAlert>
<McAlert status='info'>信息状态</McAlert>">
<McAlert status="success">成功状态</McAlert>
<McAlert status="warning">警告状态</McAlert>
<McAlert status="error">错误状态</McAlert>
<McAlert status="info">信息状态</McAlert>
</component-demo>

## 带标题

<component-demo code="<McAlert status='success' title='成功'>操作成功！</McAlert>">
<McAlert status="success" title="成功">操作成功！</McAlert>
</component-demo>

## 居中对齐

<component-demo code="<McAlert status='info' center>居中显示</McAlert>">
<McAlert status="info" center>居中显示</McAlert>
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| status | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 状态 |
| title | `string` | `''` | 标题 |
| center | `boolean` | `false` | 是否居中 |
| closable | `boolean` | `true` | 是否可关闭 |

## Events

| 事件名 | 说明 |
| --- | --- |
| close | 关闭时触发 |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 内容 |
