# Container 容器

容器组件，用于布局。

## 基本用法

<component-demo code="<McContainer>
  这是容器内容。
</McContainer>">
<McContainer>
  这是容器内容。
</McContainer>
</component-demo>

## 尺寸

<component-demo code="<McContainer size='sm'>小号容器</McContainer>
<McContainer size='md'>中等容器</McContainer>
<McContainer size='lg'>大号容器</McContainer>">
<McContainer size="sm">小号容器</McContainer>
<McContainer size="md">中等容器</McContainer>
<McContainer size="lg">大号容器</McContainer>
</component-demo>

## 带边框

<component-demo code="<McContainer bordered>带边框容器</McContainer>">
<McContainer bordered>带边框容器</McContainer>
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |
| bordered | `boolean` | `false` | 是否带边框 |
| padded | `boolean` | `false` | 是否带内边距 |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 内容 |
