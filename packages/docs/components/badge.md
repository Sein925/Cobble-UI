# Badge 徽章

徽章组件，用于标记数字或状态。

## 基本用法

<component-demo code="<McBadge :value='5'>
  <McButton>消息</McButton>
</McBadge>">
<McBadge :value="5">
  <McButton>消息</McButton>
</McBadge>
</component-demo>

## 小红点

<component-demo code="<McBadge dot>
  <McButton>通知</McButton>
</McBadge>">
<McBadge dot>
  <McButton>通知</McButton>
</McBadge>
</component-demo>

## 最大值

<component-demo code="<McBadge :value='99' :max='99'>
  <McButton>消息</McButton>
</McBadge>
<McBadge :value='100' :max='99'>
  <McButton>消息</McButton>
</McBadge>">
<McBadge :value="99" :max="99">
  <McButton>消息</McButton>
</McBadge>
<McBadge :value="100" :max="99">
  <McButton>消息</McButton>
</McBadge>
</component-demo>

## 状态

<component-demo code="<McBadge status='success' />
<McBadge status='warning' />
<McBadge status='error' />
<McBadge status='info' />">
<McBadge status="success" />
<McBadge status="warning" />
<McBadge status="error" />
<McBadge status="info" />
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | `number \| string` | `''` | 显示值 |
| max | `number` | `99` | 最大值 |
| dot | `boolean` | `false` | 是否显示小红点 |
| status | `'success' \| 'warning' \| 'error' \| 'info'` | `''` | 状态类型 |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 包裹的元素 |
