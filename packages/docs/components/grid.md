# Grid 网格

网格布局组件，用于快速构建栅格布局。

## 基本用法

<component-demo code="<McGrid :cols='3' gap='12px'>
  <div style='background: var(--mc-primary); padding: 12px; text-align: center; color: white;'>列 1</div>
  <div style='background: var(--mc-secondary); padding: 12px; text-align: center; color: white;'>列 2</div>
  <div style='background: var(--mc-accent); padding: 12px; text-align: center; color: white;'>列 3</div>
</McGrid>">
<McGrid :cols="3" gap="12px">
  <div style="background: var(--mc-primary); padding: 12px; text-align: center; color: white;">列 1</div>
  <div style="background: var(--mc-secondary); padding: 12px; text-align: center; color: white;">列 2</div>
  <div style="background: var(--mc-accent); padding: 12px; text-align: center; color: white;">列 3</div>
</McGrid>
</component-demo>

## 不同列数

<component-demo code="<McGrid :cols='2' gap='8px'>
  <div style='background: var(--mc-primary); padding: 8px;'>2 列</div>
  <div style='background: var(--mc-secondary); padding: 8px;'>2 列</div>
</McGrid>">
<McGrid :cols="2" gap="8px">
  <div style="background: var(--mc-primary); padding: 8px;">2 列</div>
  <div style="background: var(--mc-secondary); padding: 8px;">2 列</div>
</McGrid>
</component-demo>

<component-demo code="<McGrid :cols='4' gap='8px'>
  <div style='background: var(--mc-primary); padding: 8px;'>4 列</div>
  <div style='background: var(--mc-secondary); padding: 8px;'>4 列</div>
  <div style='background: var(--mc-accent); padding: 8px;'>4 列</div>
  <div style='background: var(--mc-info); padding: 8px;'>4 列</div>
</McGrid>">
<McGrid :cols="4" gap="8px">
  <div style="background: var(--mc-primary); padding: 8px;">4 列</div>
  <div style="background: var(--mc-secondary); padding: 8px;">4 列</div>
  <div style="background: var(--mc-accent); padding: 8px;">4 列</div>
  <div style="background: var(--mc-info); padding: 8px;">4 列</div>
</McGrid>
</component-demo>

## 对齐方式

<component-demo code="<McGrid :cols='3' gap='8px' align='center' justify='space-between'>
  <div style='background: var(--mc-primary); padding: 8px; height: 40px;'>居中对齐</div>
  <div style='background: var(--mc-secondary); padding: 8px; height: 60px;'>居中对齐</div>
  <div style='background: var(--mc-accent); padding: 8px; height: 40px;'>居中对齐</div>
</McGrid>">
<McGrid :cols="3" gap="8px" align="center" justify="space-between">
  <div style="background: var(--mc-primary); padding: 8px; height: 40px;">居中对齐</div>
  <div style="background: var(--mc-secondary); padding: 8px; height: 60px;">居中对齐</div>
  <div style="background: var(--mc-accent); padding: 8px; height: 40px;">居中对齐</div>
</McGrid>
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| cols | `number` | `12` | 列数 |
| gap | `string` | `'16px'` | 间距 |
| align | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | 垂直对齐 |
| justify | `'start' \| 'center' \| 'end' \| 'space-between' \| 'space-around'` | `'start'` | 水平对齐 |
