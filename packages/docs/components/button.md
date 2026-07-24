# Button 按钮

按钮组件，用于触发一个操作。

## 基本用法

<component-demo code="<McButton>点击我</McButton>">
<McButton>点击我</McButton>
</component-demo>

## 变体

<component-demo code="<McButton variant='primary'>主要按钮</McButton>
<McButton variant='secondary'>次要按钮</McButton>
<McButton variant='outline'>轮廓按钮</McButton>
<McButton variant='ghost'>幽灵按钮</McButton>">
<McButton variant="primary">主要按钮</McButton>
<McButton variant="secondary">次要按钮</McButton>
<McButton variant="outline">轮廓按钮</McButton>
<McButton variant="ghost">幽灵按钮</McButton>
</component-demo>

## 尺寸

<component-demo code="<McButton size='sm'>小按钮</McButton>
<McButton size='md'>中等按钮</McButton>
<McButton size='lg'>大按钮</McButton>">
<McButton size="sm">小按钮</McButton>
<McButton size="md">中等按钮</McButton>
<McButton size="lg">大按钮</McButton>
</component-demo>

## 状态

<component-demo code="<McButton status='success'>成功</McButton>
<McButton status='warning'>警告</McButton>
<McButton status='error'>错误</McButton>">
<McButton status="success">成功</McButton>
<McButton status="warning">警告</McButton>
<McButton status="error">错误</McButton>
</component-demo>

## 禁用与加载

<component-demo code="<McButton disabled>禁用状态</McButton>
<McButton loading>加载中</McButton>">
<McButton disabled>禁用状态</McButton>
<McButton loading>加载中</McButton>
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |
| variant | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | 变体 |
| status | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | 状态 |
| disabled | `boolean` | `false` | 是否禁用 |
| loading | `boolean` | `false` | 是否加载中 |

## Events

| 事件名 | 说明 |
| --- | --- |
| click | 点击时触发 |
