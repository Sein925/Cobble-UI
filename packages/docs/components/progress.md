# Progress 进度条

<script setup>
import { ref } from 'vue'
const progress = ref(50)
</script>

进度条组件，用于显示任务完成进度。

## 基本用法

通过按钮调节进度百分比，所有进度条会同步更新。

<component-demo code="<McProgress :percentage='progress' />
<McProgress :percentage='progress' status='info' />
<McProgress :percentage='progress' status='success' />
<McProgress :percentage='progress' status='warning' />
<McProgress :percentage='progress' status='error' />
<McButton variant='info' @click='progress = Math.max(0, progress - 10)'>-</McButton>
<McButton variant='info' @click='progress = Math.min(100, progress + 10)'>+</McButton>">
<McProgress :percentage="progress" />
<McProgress :percentage="progress" status="info" />
<McProgress :percentage="progress" status="success" />
<McProgress :percentage="progress" status="warning" />
<McProgress :percentage="progress" status="error" />

<McButton variant="info" @click="progress = Math.max(0, progress - 10)">-</McButton>
<McButton variant="info" @click="progress = Math.min(100, progress + 10)">+</McButton>
</component-demo>

## 棋盘格样式

<component-demo code="<McProgress :percentage='16.67' striped />
<McProgress :percentage='33.33' striped status='info' />
<McProgress :percentage='50' striped status='success' />
<McProgress :percentage='66.67' striped status='warning' />
<McProgress :percentage='83.33' striped status='error' />">
<McProgress :percentage="16.67" striped />
<McProgress :percentage="33.33" striped status="info" />
<McProgress :percentage="50" striped status="success" />
<McProgress :percentage="66.67" striped status="warning" />
<McProgress :percentage="83.33" striped status="error" />
</component-demo>

## 尺寸

<component-demo code="<McProgress :percentage='20' size='sm' />
<McProgress :percentage='26' />
<McProgress :percentage='36' size='lg' />">
<McProgress :percentage="20" size="sm" />
<McProgress :percentage="26" />
<McProgress :percentage="36" size="lg" />
</component-demo>

## 自定义内容

通过插槽可以在进度条前后添加内容。

<component-demo code="<McProgress :percentage='100'>
  <template #prepend>Progress:</template>
  <template #append>Complete</template>
</McProgress>
<McProgress :percentage='50' status='success'>
  <template #prepend>Loading</template>
</McProgress>">
<McProgress :percentage="100">
  <template #prepend>Progress:</template>
  <template #append>Complete</template>
</McProgress>

<McProgress :percentage="50" status="success">
  <template #prepend>Loading</template>
</McProgress>
</component-demo>

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| percentage | `number` | `0` | 进度百分比（0-100） |
| show-text | `boolean` | `true` | 是否显示百分比 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |
| status | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 状态 |
| striped | `boolean` | `false` | 是否显示条纹 |
| animated | `boolean` | `false` | 是否显示动画 |

## Slots

| 名称 | 说明 |
| --- | --- |
| prepend | 进度条前方内容 |
| append | 进度条后方内容 |
