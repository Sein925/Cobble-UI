# Flex 弹性布局

弹性布局组件，用于灵活的布局排列。

## 基本用法

<component-demo code="<McFlex gap='8px'>
  <div style='background: var(--mc-primary); padding: 8px;'>项目 1</div>
  <div style='background: var(--mc-secondary); padding: 8px;'>项目 2</div>
  <div style='background: var(--mc-accent); padding: 8px;'>项目 3</div>
</McFlex>">
<McFlex gap="8px">
  <div style="background: var(--mc-primary); padding: 8px;">项目 1</div>
  <div style="background: var(--mc-secondary); padding: 8px;">项目 2</div>
  <div style="background: var(--mc-accent); padding: 8px;">项目 3</div>
</McFlex>
</component-demo>

## 垂直布局

<component-demo code="<McFlex direction='column' gap='8px'>
  <div style='background: var(--mc-primary); padding: 8px;'>项目 1</div>
  <div style='background: var(--mc-secondary); padding: 8px;'>项目 2</div>
  <div style='background: var(--mc-accent); padding: 8px;'>项目 3</div>
</McFlex>">
<McFlex direction="column" gap="8px">
  <div style="background: var(--mc-primary); padding: 8px;">项目 1</div>
  <div style="background: var(--mc-secondary); padding: 8px;">项目 2</div>
  <div style="background: var(--mc-accent); padding: 8px;">项目 3</div>
</McFlex>
</component-demo>

## 对齐方式

<component-demo code="<McFlex gap='8px' align='center' justify='center' style='height: 80px; background: #f0f0f0;'>
  <div style='background: var(--mc-primary); padding: 8px;'>居中</div>
  <div style='background: var(--mc-secondary); padding: 8px;'>居中</div>
</McFlex>">
<McFlex gap="8px" align="center" justify="center" style="height: 80px; background: #f0f0f0;">
  <div style="background: var(--mc-primary); padding: 8px;">居中</div>
  <div style="background: var(--mc-secondary); padding: 8px;">居中</div>
</McFlex>
</component-demo>

## 换行

<component-demo code="<McFlex gap='8px' wrap style='width: 200px;'>
  <div style='background: var(--mc-primary); padding: 8px;'>项目 1</div>
  <div style='background: var(--mc-secondary); padding: 8px;'>项目 2</div>
  <div style='background: var(--mc-accent); padding: 8px;'>项目 3</div>
  <div style='background: var(--mc-info); padding: 8px;'>项目 4</div>
</McFlex>">
<McFlex gap="8px" wrap style="width: 200px;">
  <div style="background: var(--mc-primary); padding: 8px;">项目 1</div>
  <div style="background: var(--mc-secondary); padding: 8px;">项目 2</div>
  <div style="background: var(--mc-accent); padding: 8px;">项目 3</div>
  <div style="background: var(--mc-info); padding: 8px;">项目 4</div>
</McFlex>
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| gap | `string` | `'8px'` | 间距 |
| align | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` | `'stretch'` | 垂直对齐 |
| justify | `'start' \| 'center' \| 'end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'start'` | 水平对齐 |
| direction | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'` | `'row'` | 方向 |
| wrap | `boolean` | `false` | 是否换行 |
