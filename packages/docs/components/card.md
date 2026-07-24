# Card 卡片

卡片组件，用于展示信息内容。

## 基本用法

<component-demo code="<McCard>
  这是卡片内容。
</McCard>">
<McCard>
  这是卡片内容。
</McCard>
</component-demo>

## 带边框

<component-demo code="<McCard bordered>
  这是带边框的卡片。
</McCard>">
<McCard bordered>
  这是带边框的卡片。
</McCard>
</component-demo>

## 带内边距

<component-demo code="<McCard bordered padded>
  这是带边框和内边距的卡片。
</McCard>">
<McCard bordered padded>
  这是带边框和内边距的卡片。
</McCard>
</component-demo>

## 可悬浮

<component-demo code="<McCard bordered padded hoverable>
  悬停在我上面！
</McCard>">
<McCard bordered padded hoverable>
  悬停在我上面！
</McCard>
</component-demo>

## 带头部和底部

<component-demo code="<McCard bordered padded>
  <template #header>卡片头部</template>
  这是卡片主体。
  <template #footer>卡片底部</template>
</McCard>">
<McCard bordered padded>
  <template #header>卡片头部</template>
  这是卡片主体。
  <template #footer>卡片底部</template>
</McCard>
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| bordered | `boolean` | `false` | 是否带边框 |
| padded | `boolean` | `false` | 是否带内边距 |
| hoverable | `boolean` | `false` | 是否可悬浮 |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 内容 |
| header | 头部 |
| footer | 底部 |
