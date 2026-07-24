<script setup lang="ts">
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McCard' })

const props = withDefaults(defineProps<{
  bordered?: boolean
  padded?: boolean
  hoverable?: boolean
}>(), {
  bordered: false,
  padded: false,
  hoverable: false
})

const cardClasses = clsx(
  'mc-card',
  {
    'mc-card--bordered': props.bordered,
    'mc-card--padded': props.padded,
    'mc-card--hoverable': props.hoverable
  }
)
</script>

<template>
  <div :class="cardClasses">
    <slot v-if="$slots.header" name="header" class="mc-card__header"></slot>
    <div class="mc-card__body">
      <slot></slot>
    </div>
    <slot v-if="$slots.footer" name="footer" class="mc-card__footer"></slot>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-card {
  background-color: var(--mc-surface);
  border: 2px solid;
  border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
  box-shadow: inset -2px -2px 0 rgba(0,0,0,0.2),
              inset 2px 2px 0 rgba(255,255,255,0.05);
  
  &--bordered {
    border-width: 3px;
    border-color: var(--mc-border) #888888 #888888 var(--mc-border);
  }
  
  &--padded {
    .mc-card__body {
      padding: 14px;
    }
    
    .mc-card__header {
      padding: 14px;
      padding-bottom: 8px;
    }
    
    .mc-card__footer {
      padding: 8px 14px;
      padding-top: 0;
    }
  }
  
  &--hoverable {
    cursor: pointer;
    transition: all 0.15s ease;
    
    &:hover {
      background-color: rgba(76,175,80,0.05);
      border-color: var(--mc-border) #888888 #888888 var(--mc-border);
      box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                  inset 2px 2px 0 rgba(255,255,255,0.1);
    }
  }
  
  &__header {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    font-weight: bold;
    color: var(--mc-text);
    border-bottom: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    margin-bottom: 8px;
    padding-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: var(--mc-button-bg);
    padding: 10px 14px;
    margin: -14px -14px 14px -14px;
    box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                inset 1px 1px 0 rgba(255,255,255,0.1);
  }
  
  &__body {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text);
    line-height: 1.6;
  }
  
  &__footer {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text-secondary);
    border-top: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    margin-top: 8px;
    padding-top: 10px;
    background-color: var(--mc-button-bg);
    margin: 14px -14px -14px -14px;
    padding: 10px 14px;
    box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                inset 1px 1px 0 rgba(255,255,255,0.1);
  }
}
</style>
