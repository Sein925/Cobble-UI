<script setup lang="ts">
import { computed } from 'vue'
import type { Status } from '@/types/component'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McBadge' })

const props = withDefaults(defineProps<{
  value?: number | string
  max?: number
  dot?: boolean
  status?: Status
  offset?: [number, number]
}>(), {
  max: 99,
  dot: false,
  status: 'default',
  offset: () => [0, 0]
})

const displayValue = computed(() => {
  if (props.dot) return ''
  if (typeof props.value === 'number' && props.value > props.max) {
    return `${props.max}+`
  }
  return props.value
})

const badgeClasses = computed(() => clsx(
  'mc-badge',
  `mc-badge--${props.status}`,
  {
    'mc-badge--dot': props.dot
  }
))

const badgeStyle = computed(() => ({
  transform: `translate(${props.offset[0]}px, ${props.offset[1]}px)`
}))
</script>

<template>
  <span class="mc-badge__wrapper">
    <slot></slot>
    <span
      v-if="dot || value !== undefined"
      :class="badgeClasses"
      :style="badgeStyle"
    >
      {{ displayValue }}
    </span>
  </span>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-badge {
  &__wrapper {
    position: relative;
    display: inline-flex;
  }
  
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 16px;
  height: 16px;
  padding: 0 5px;
  background-color: #C62828;
  color: white;
  font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
  font-size: var(--mc-font-xs);
  font-weight: bold;
  border: 2px solid;
  border-color: #F44336 #8E0000 #8E0000 #F44336;
  box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
              inset 1px 1px 0 rgba(255,255,255,0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  
  &--dot {
    width: 8px;
    height: 8px;
    min-width: 8px;
    padding: 0;
    border-width: 1px;
  }
  
  &--success {
    background-color: #2E7D32;
    border-color: #4CAF50 #1B5E20 #1B5E20 #4CAF50;
  }
  
  &--warning {
    background-color: #F57C00;
    border-color: #FF9800 #E65100 #E65100 #FF9800;
  }
  
  &--error {
    background-color: #C62828;
    border-color: #F44336 #8E0000 #8E0000 #F44336;
  }
  
  &--info {
    background-color: #1976D2;
    border-color: #2196F3 #0D47A1 #0D47A1 #2196F3;
  }
  
  &--default {
    background-color: #388E3C;
    border-color: #4CAF50 #2E7D32 #2E7D32 #4CAF50;
  }
}
</style>
