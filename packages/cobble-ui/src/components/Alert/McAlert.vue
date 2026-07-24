<script setup lang="ts">
import { computed } from 'vue'
import type { Status } from '@/types/component'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McAlert' })

const props = withDefaults(defineProps<{
  type?: Status
  title?: string
  closable?: boolean
  center?: boolean
}>(), {
  type: 'info',
  closable: true,
  center: false
})

const emit = defineEmits<{
  close: []
}>()

const alertClasses = computed(() => clsx(
  'mc-alert',
  `mc-alert--${props.type}`,
  {
    'mc-alert--center': props.center
  }
))

const iconClass = computed(() => {
  const icons: Record<Status, string> = {
    success: '✓',
    warning: '⚠',
    error: '✕',
    info: 'ℹ',
    default: 'ℹ'
  }
  return icons[props.type]
})

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <div :class="alertClasses">
    <span class="mc-alert__icon">{{ iconClass }}</span>
    <div class="mc-alert__content">
      <span v-if="title" class="mc-alert__title">{{ title }}</span>
      <slot></slot>
    </div>
    <span v-if="closable" class="mc-alert__close" @click="handleClose">
      ✕
    </span>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-alert {
  position: relative;
  padding: 14px;
  background-color: var(--mc-surface);
  border: 2px solid;
  border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
  box-shadow: inset -2px -2px 0 rgba(0,0,0,0.2),
              inset 2px 2px 0 rgba(255,255,255,0.05);
  display: flex;
  align-items: flex-start;
  gap: 12px;
  
  &--center {
    justify-content: center;
    text-align: center;
  }
  
  &--success {
    border-color: var(--mc-success) var(--mc-success-dark) var(--mc-success-dark) var(--mc-success);
    background-color: rgba(76, 175, 80, 0.1);
    
    .mc-alert__icon {
      color: var(--mc-success);
    }
    
    .mc-alert__title {
      color: var(--mc-success);
    }
  }
  
  &--warning {
    border-color: var(--mc-warning) var(--mc-warning-dark) var(--mc-warning-dark) var(--mc-warning);
    background-color: rgba(255, 152, 0, 0.1);
    
    .mc-alert__icon {
      color: var(--mc-warning);
    }
    
    .mc-alert__title {
      color: var(--mc-warning);
    }
  }
  
  &--error {
    border-color: var(--mc-error) var(--mc-error-dark) var(--mc-error-dark) var(--mc-error);
    background-color: rgba(244, 67, 54, 0.1);
    
    .mc-alert__icon {
      color: var(--mc-error);
    }
    
    .mc-alert__title {
      color: var(--mc-error);
    }
  }
  
  &--info,
  &--default {
    border-color: var(--mc-info) var(--mc-info-dark) var(--mc-info-dark) var(--mc-info);
    background-color: rgba(33, 150, 243, 0.1);
    
    .mc-alert__icon {
      color: var(--mc-info);
    }
    
    .mc-alert__title {
      color: var(--mc-info);
    }
  }
  
  &__icon {
    font-size: var(--mc-font-xl);
    flex-shrink: 0;
  }
  
  &__content {
    flex: 1;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text);
    line-height: 1.6;
  }
  
  &__title {
    display: block;
    font-weight: bold;
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  &__close {
    font-size: var(--mc-font-lg);
    color: var(--mc-text-secondary);
    cursor: pointer;
    transition: all 0.15s ease;
    padding: 2px;
    border: 2px solid transparent;
    
    &:hover {
      color: var(--mc-text);
      border-color: #5C5C5C #3C3C3C #3C3C3C #5C5C5C;
      background-color: rgba(255,255,255,0.1);
    }
  }
}
</style>
