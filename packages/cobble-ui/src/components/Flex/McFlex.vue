<script setup lang="ts">
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McFlex' })

const props = withDefaults(defineProps<{
  gap?: string
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  wrap?: boolean
}>(), {
  gap: '8px',
  align: 'stretch',
  justify: 'start',
  direction: 'row',
  wrap: false
})

const flexClasses = clsx('mc-flex', { 'mc-flex--wrap': props.wrap })

const flexStyle = {
  gap: props.gap,
  alignItems: props.align,
  justifyContent: props.justify,
  flexDirection: props.direction
}
</script>

<template>
  <div :class="flexClasses" :style="flexStyle">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-flex {
  display: flex;
  
  &--wrap {
    flex-wrap: wrap;
  }
}
</style>
