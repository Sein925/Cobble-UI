<script setup lang="ts">
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McGrid' })

const props = withDefaults(defineProps<{
  cols?: number
  gap?: string
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
}>(), {
  cols: 12,
  gap: '16px',
  align: 'stretch',
  justify: 'start'
})

const gridClasses = clsx('mc-grid', `mc-grid--cols-${props.cols}`)

const gridStyle = {
  gap: props.gap,
  alignItems: props.align,
  justifyContent: props.justify
}
</script>

<template>
  <div :class="gridClasses" :style="gridStyle">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-grid {
  display: grid;
  
  @for $i from 1 through 12 {
    &--cols-#{$i} {
      grid-template-columns: repeat(#{$i}, 1fr);
    }
  }
  
  &--cols-auto {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
