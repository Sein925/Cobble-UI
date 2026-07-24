<script setup lang="ts">
import type { Size } from '@/types/component'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McContainer' })

const props = withDefaults(defineProps<{
  size?: Size
  bordered?: boolean
  padded?: boolean
}>(), {
  size: 'md',
  bordered: false,
  padded: false
})
</script>

<template>
  <div :class="clsx(
    'mc-container',
    `mc-container--${props.size}`,
    {
      'mc-container--bordered': props.bordered,
      'mc-container--padded': props.padded
    }
  )">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-container {
  background-color: var(--mc-surface);
  border: 2px solid;
  border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
  box-shadow: inset -2px -2px 0 rgba(0,0,0,0.2),
              inset 2px 2px 0 rgba(255,255,255,0.05);
  transition: all 0.15s ease;
  
  &--sm {
    padding: 10px 14px;
  }
  
  &--md {
    padding: 16px 20px;
  }
  
  &--lg {
    padding: 24px 28px;
  }
  
  &--bordered {
    border-width: 3px;
    border-color: var(--mc-border) #888888 #888888 var(--mc-border);
  }
  
  &--padded {
    margin: 16px;
  }
}
</style>
